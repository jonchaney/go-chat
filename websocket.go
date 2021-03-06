package main

import (
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

// global variables
var clients = make(map[*websocket.Conn]bool) // connected clients
var broadcast = make(chan Message)           // broadcast channel
var upgrader = websocket.Upgrader{}          // configure the upgrader

// Message object defined here
type Message struct {
	// Email    string `json:"email"`
	Username string `json:"username"`
	Message  string `json:"message"`
}

// HandleConnections - incoming WebSocket connections
func HandleConnections(w http.ResponseWriter, r *http.Request) {
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
			// therefore we remove them from the clients map and exit the loops
			delete(clients, ws)
			break
		}
		// send the newly received message to the broadcast channel unless it is a manual ping
		// refactor to sending ping packet to server with a pong response...?
		if msg.Username != "ping" {
			broadcast <- msg
		}
	}
}

// HandleMessages loop that continously reads from the 'broadcast' channel and then relays the message
// to all the the clients over their WebSocket connection
func HandleMessages() {
	for {
		msg := <-broadcast
		for client := range clients {
			err := client.WriteJSON(msg)
			if err != nil {
				log.Printf("error: %v", err)
				client.Close()
				delete(clients, client)
			}
		}
	}
}
