package main

import (
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

// global variables, usually bad style
var clients = make(map[*websocket.Conn]bool) // connected clients
var broadcast = make(chan Message)           // broadcast channel
var upgrader = websocket.Upgrader{}          // configure the upgrader

// Message object defined here
type Message struct {
	Email    string `json:"email"`
	Username string `json:"username"`
	Message  string `json:"message"`
}

func main() {
	// create simple file server
	fs := http.FileServer(http.Dir("../public"))
	http.Handle("/", fs)

	// configure websocket route
	http.HandleFunc("/ws", handleConnections)

	// start a go routine to start listenind for incoming chat messages
	go handleMessages()

	log.Println("http server started on :8000")
	err := http.ListenAndServe(":8000", nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}

func handleConnections(w http.ResponseWriter, r *http.Request) {
	// upgrade intial GET request to a websocket
	ws, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Fatal(err)
	}
	defer ws.Close()

	// register our new client by adding it to the global "clients" map
	clients[ws] = true
	// an infinite loop that listens for a new message to be written to the websocket
	// unserializes it from JSON to a Message object and then puts it into the broadcast channel
	for {
		var msg Message
		// read in new message as JSON and map it to a Message object
		err := ws.ReadJSON(&msg)
		if err != nil {
			log.Printf("error: %v", err)
			// we are assuming that if there is an error, the client is no longer connected,
			// therefor we remove them from the clients map and exit the loops
			delete(clients, ws)
			break
		}
		// send the newly recieved message to the broadcast channel
		broadcast <- msg
	}

}

// loop that continously reads from the 'broadcast' channel and then relays the message
// to all the the clients over there Websocket connection
func handleMessages() {
	for {
		msg := <-broadcast
		// send it to every client that is currently connected
		for client := range clients {
			err := client.WriteJSON(msg)
			if err != nil {
				log.Println("error: %v", err)
				client.Close()
				delete(clients, client)
			}
		}
	}
}
