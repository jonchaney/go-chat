import React, { Component } from 'react';

import Input from '../presentationals/input.js';
import Button from '../presentationals/button.js';

class ChatClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      email: this.props.email,
      message: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <section>
        <section>
          <Input onChange={(e) => this.setState({ message: e.currentTarget.value })}
            placeholder="enter message" />
          <Button value="submit"
            onClick={(e) => this.handleSubmit(e)} />
        </section>
      </section>
    );
  }
}

export default ChatClient;