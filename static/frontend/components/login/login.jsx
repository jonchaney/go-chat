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
    this.props.history.push('/chat');
  }

  render() {
    return (
      <section>
        <Input onChange={(e) => this.setState({ username: e.currentTarget.value })}
               placeholder="username"/>
        <Input onChange={(e) => this.setState({ email: e.currentTarget.value })}
               placeholder="email"/>
        <Button value="submit"
                onSubmit={(e) => this.handleSubmit(e)}/>
      </section>
    );
  }
}

export default Login;