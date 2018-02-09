import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TagLine extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="tagline">
        <h2>enter a username at the bottom and invite others to the room by sharing the url</h2>
      </section>
    );
  }
}

export default TagLine;