import React, { Component } from 'react';

class Messages extends React.Component {
  constructor(props) {
    super(props);
  }

  messages() {
    const messages = this.props.messages.map((message, idx) => {
        return ( 
          <div key={idx}>
            <p>{message.username}</p>
            <p>{message.message}</p>
          </div>
        );
    });

    return (
      <div className="messages">
        {messages}
      </div>
    );
  }
  
  render() {
    return this.messages();
  }
}

export default Messages;