import React from 'react';

import FormInput from '../form-input/form-input.component.jsx';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props){
    super();
    this.state = {
      email: "",
      password: ""
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: "", password: ""})
  }
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value })
  }
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an accounnt</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name="email" 
            type="email" 
            value={this.state.email} 
            required 
            label="email"
            handleChange={this.handleChange}
          />
          <FormInput 
            name="password" 
            type="password" 
            value={this.state.password} 
            required 
            label="password"
            handleChange={this.handleChange} 
          />
          <input type="submit" value="Submit Form" />
        </form>
      </div>
    )
  }
}

export default SignIn;