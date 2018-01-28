import React, { Component } from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("form submitted");
  }

  render() {
    return (
      <section>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" 
                 placeholder="username"
                 name="fname"></input>
          <input type="text" 
                 placeholder="email"
                 name="lname"></input>
          <input type="submit" 
                 value="Submit"></input>
        </form>
      </section>
    );
  }
}

export default Login;