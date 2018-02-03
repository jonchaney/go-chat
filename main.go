package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

func main() {
	// create simple file server
	// in order to serve the index.html file the folder must be called static
	fs := http.FileServer(http.Dir("static"))
	http.Handle("/", fs)

	// configure WebSocket route
	http.HandleFunc("/ws", HandleConnections)

	// start a go routine to start listening for incoming chat messages
	go HandleMessages()

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

// 	router.PathPrefix("/").Handler(http.FileServer(http.Dir("./static/")))

// need to create own webSocket connection handler to pass as second arugment i think
// 	router.HandleFunc("/ws", handleConnections)
// 	go handleMessages()

// 	http.Handle("/", router)

// 	port := fmt.Sprintf(":%s", os.Getenv("PORT"))
// 	if port == ":" {
// 		port = ":8000"
// 	}

// 	fmt.Println("Serving on port", port)
// 	log.Fatal(http.ListenAndServe(port, router))
// }
