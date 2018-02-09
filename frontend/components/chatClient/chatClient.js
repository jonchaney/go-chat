import React, { Component } from 'react';

import Messages from '../messages/messages.js';
import LoginContainer from '../login/loginContainer.js';
import Input from '../presentationals/input.js';
import Button from '../presentationals/button.js';
import TagLine from '../presentationals/tagline.js';

class ChatClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
    this.ws = new WebSocket('ws://' + window.location.host + '/ws');
    // "ping" the websocket server after 25 seconds of inactivity
    // refactor to use a real ping
    this.ticker = () => {
      this.ws.send(JSON.stringify({
        username: "ping",
        message: "ping"
      }));
    };
    this.timer = window.setInterval(this.ticker, 25000);
    this.receive();
    this.open();
  }

  componentWillReceiveProps() {
    // auto scroll to the bottom of messages
    let element = document.getElementsByClassName('messages')[0];
    element.scrollTop = element.scrollHeight; 
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
    clearInterval(this.timer);
    this.ws.send(JSON.stringify(data));
    this.timer = window.setInterval(this.ticker, 25000);
  }

  handleSubmit(e) {
    e.preventDefault();
    let message = {
      username: this.props.currentUser.username,
      // email: this.props.currentUser.email,
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

  tagLine() {
    if (this.props.messages.length === 0) {
      return (
        <TagLine />
      );
    }
  }

  render() {
    return (
      <section className="chat-client">
          {this.tagLine()}
          <Messages messages={this.props.messages}/>
            {this.renderChat()}
      </section>
    );
  }
}

export default ChatClient;