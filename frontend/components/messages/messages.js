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

    let height = '78vh';
    if (messages.length === 0) {
      height = '71vh';
    }
    return (
      <div className="messages" style={{ height: height}}>
        {messages}
      </div>
    );
  }
  
  render() {
    return this.messages();
  }
}

export default Messages;