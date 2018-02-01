import React, { Component } from 'react';

class Messages extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps() {
    let element = document.getElementsByClassName('messages');
    element[0].scrollTop = element.scrollHeight; // Auto scroll to the bottom
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