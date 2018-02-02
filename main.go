package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	// "github.com/gorilla/csrf"

	"github.com/gorilla/websocket"
)

// global variables, usually bad style
var clients = make(map[*websocket.Conn]bool) // connected clients
var broadcast = make(chan Message)           // broadcast channel
var upgrader = websocket.Upgrader{}          // configure the upgrader

// Message object defined here
type Message struct {
	// Email    string `json:"email"`
	Username string `json:"username"`
	Message  string `json:"message"`
}

func main() {
	// create simple file server
	// in order to server the index.html file the folder must be called static
	fs := http.FileServer(http.Dir("static"))
	http.Handle("/", fs)
	// http.Handle("/", http.StripPrefix("/static/", fs))

	// configure WebSocket route
	http.HandleFunc("/ws", handleConnections)

	// start a go routine to start listening for incoming chat messages
	go handleMessages()

	port := fmt.Sprintf(":%s", os.Getenv("PORT"))
	if port == ":" {
		port = ":8000"
	}

	log.Printf("http server started on %v", port)
	err := http.ListenAndServe(port, nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}

// mux router, but not working with websockets
// func main() {
// 	router := mux.NewRouter()

// 	// router.PathPrefix("/static/").
// Handler(http.StripPrefix("/static/", http.FileServer(http.Dir("/static")))).
// 	// 	Methods("GET")

// 	router.PathPrefix("/").Handler(http.FileServer(http.Dir("./static/")))

// 	router.HandleFunc("/ws", handleConnections)
// 	go handleMessages()

// 	port := fmt.Sprintf(":%s", os.Getenv("PORT"))
// 	if port == ":" {
// 		port = ":8000"
// 	}

// 	fmt.Println("Serving on port", port)
// 	log.Fatal(http.ListenAndServe(port, router))
// }

// handles incoming WebSocket connections
func handleConnections(w http.ResponseWriter, r *http.Request) {
	// upgrade intial GET request to a WebSocket
	ws, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Fatal(err)
	}
	defer ws.Close()

	// register our new client by adding it to the global "clients" map
	clients[ws] = true
	// an infinite loop that listens for a new message to be written to the WebSocket
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
		// send the newly received message to the broadcast channel
		broadcast <- msg
	}
}

// loop that continously reads from the 'broadcast' channel and then relays the message
// to all the the clients over their WebSocket connection
func handleMessages() {
	for {
		msg := <-broadcast
		// send it to every client that is currently connected
		for client := range clients {
			log.Println(msg)
			err := client.WriteJSON(msg)
			if err != nil {
				log.Printf("error: %v", err)
				client.Close()
				delete(clients, client)
			}
		}
	}
}
