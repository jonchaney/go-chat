import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TagLine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      greeting: [
        <p key={1}>enter a username at the bottom and invite others to the room by sharing the url</p>
      ]
    }
  }

  render() {
    return (
      <section className="tagline">
        <p>jonathan</p>
        {this.state.greeting}
      </section>
    );
  }
}

export default TagLine;