class Socket {
  constructor() {
    this.ws =new WebSocket('ws://' + window.location.host + '/ws');
    this.ws.addEventListener('open', (event) => {
      console.log("websocket open");
    });
  }

  send() {
    
  }

}

export default Socket;