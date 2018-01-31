import React, { Component } from 'react';

class Messages extends React.Component {
  constructor(props) {
    super(props);
  }

  messages() {
    const messages = this.props.messages.map((message) => {
        return ( 
          <li>
            <p>{message.username}</p>
            <p>{message.message}</p>
          </li>
        );
    });

    return (
      <ul>
        {messages}
      </ul>
    );
  }

  
  render() {
    return this.messages();
  }
}

export default Messages;