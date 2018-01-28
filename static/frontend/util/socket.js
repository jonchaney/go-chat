class Socket {
  constructor() {
    this.ws = new WebSocket('ws://' + window.location.host + '/ws');
    this.open();
    this.receive();
  }

  open(){ 
    // test if websocket is open, remove later
    this.ws.addEventListener('open', (event) => {
      console.log("websocket open");
    });
  }

  receive() {
    // add event listener to receive messages
    this.ws.addEventListener('message', (event) => {
      // update state here
      console.log('Message from server ', event.data);
    });
  }

  send(data) {
    this.ws.send(JSON.stringify(data));
  }
}

export default Socket;