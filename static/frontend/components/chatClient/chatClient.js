import React, { Component } from 'react';

import SendMessage from '../messages/sendMessage.js';
import Messages from '../messages/messages.js';
import Input from '../presentationals/input.js';
import Button from '../presentationals/button.js';

class ChatClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.currentUser.username,
      email: this.props.currentUser.email,
      message: ""
    };
    this.ws = new WebSocket('ws://' + window.location.host + '/ws');
    this.open();
    this.receive();
  }

  open() {
    this.ws.addEventListener('open', (event) => {
      console.log("websocket open");
    });
  }

  receive() {
    this.ws.addEventListener('message', (event) => {
      this.props.createMessage(JSON.parse(event.data));
    });
  }

  send(data) {
    this.ws.send(JSON.stringify(data));
  }

  handleSubmit(e) {
    e.preventDefault();
    let message = {
      email: this.state.email,
      username: this.state.username,
      message: this.state.message
    };
    this.send(message);
  }

  render() {
    return (
      <section>
          <Messages messages={this.props.messages}/>
          <SendMessage onChange={(e) => this.setState({ message: e.currentTarget.value })}
                       onSubmit={(e) => this.handleSubmit(e)}
                       value="submit"
                       placeholder="enter message"  />
      </section>
    );
  }
}

export default ChatClient;