import React, { Component } from 'react';

import Messages from '../messages/messages.js';
import LoginContainer from '../login/loginContainer.js';
import Input from '../presentationals/input.js';
import Button from '../presentationals/button.js';

class ChatClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
    this.ws = new WebSocket('ws://' + window.location.host + '/ws');
    this.open();
    this.receive();
  }

  open() {
    this.ws.addEventListener('open', (event) => {
      // console.log("websocket open");
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
      username: this.props.currentUser.username,
      email: this.props.currentUser.email,
      message: this.state.message
    };
    this.send(message);
    this.setState({message: ""});
  }

  renderChat() {
    if (this.props.currentUser.username) {
      return (
        <section className="send-message">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <Input onChange={(e) => this.setState({ message: e.currentTarget.value })}
              placeholder="enter message"
              autoFocus="true"
              value={this.state.message} />
            <Button value="submit" />
          </form>
        </section>
      );
    } else {
      return <LoginContainer />;
    }
  }

  render() {
    return (
      <section className="chat-client">
          <Messages messages={this.props.messages}/>
          <section>
            {this.renderChat()}
          </section>
      </section>
    );
  }
}

export default ChatClient;