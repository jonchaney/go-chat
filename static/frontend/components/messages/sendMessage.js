import React, { Component } from 'react';

import Input from '../presentationals/input.js';
import Button from '../presentationals/button.js';

class SendMessage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <Input onChange={this.props.onChange}
               placeholder={this.props.placeholder}/>
        <Button onSubmit={this.props.onSubmit}
                value={this.props.value} />
      </section>
    );
  }
}

export default SendMessage;