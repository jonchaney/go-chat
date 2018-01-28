import React, { Component } from 'react';

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
    console.log(this.state.email, this.state.username);
  }

  render() {
    return (
      <section>
          <input type="text" 
                 onChange={(e) => this.setState({username: e.currentTarget.value})}
                 placeholder="username"></input>
          <input type="text" 
                 onChange={(e) => this.setState({ email: e.currentTarget.value })}
                 placeholder="email"></input>
          <input type="submit" 
                 value="Submit"
                 onClick={(e) => this.handleSubmit(e)}></input>
      </section>
    );
  }
}

export default Login;