import React, { Component } from 'react';

import ResumeInfo from './resumeinfo.js';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <h1>go chat</h1>
        <ResumeInfo/>
      </section>
    );
  }
}

export default Header;