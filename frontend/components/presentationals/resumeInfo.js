import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ResumeInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="resume">
        <a href="https://www.github.com/jonchaney/go-chat"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/jonchaney"><i className="fab fa-linkedin"></i></a>
      </section>
    );
  }
}

export default ResumeInfo;