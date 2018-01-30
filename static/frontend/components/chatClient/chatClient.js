import React, { Component } from 'react';

import SendMessage from './sendMessage.js';
import Input from '../presentationals/input.js';
import Button from '../presentationals/button.js';
import Socket from '../../util/socket.js';

class ChatClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.currentUser.username,
      email: this.props.currentUser.email,
      message: ""
    };
    this.ws = new Socket;
  }

  handleSubmit(e) {
    e.preventDefault();
    let message = {
      email: this.state.email,
      username: this.state.username,
      message: this.state.message
    };
    this.ws.send(message);
  }

  render() {
    return (
      <section>
        <section>
          <SendMessage onChange={(e) => this.setState({ message: e.currentTarget.value })}
                       onSubmit={(e) => this.handleSubmit(e)}
                       value="submit"
                       placeholder="enter message"  />
        </section>
      </section>
    );
  }
}

export default ChatClient;