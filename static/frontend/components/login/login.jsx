import React, { Component } from 'react';

import Input from '../presentationals/input.js';
import Button from '../presentationals/button.js';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state.username, this.state.email);
  }

  render() {
    return (
      <section className="login">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <Input onChange={(e) => this.setState({ username: e.currentTarget.value })}
                autoFocus="true"
                placeholder="username"/>
          <Input onChange={(e) => this.setState({ email: e.currentTarget.value })}
                placeholder="email"/>
          <Button value="submit" />
          </form>
      </section>
    );
  }
}

export default Login;