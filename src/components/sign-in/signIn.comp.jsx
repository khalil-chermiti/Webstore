import React from "react";

import "./signIn.style.scss";
import FormInput from "../form-input/form-input.comp";
import CustomButton from "../custom-button/custom-button.comp";
import { signInWithGoogle } from "../../firebase/firebase.utils";

// building the sign in class component

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  // preventing default submit event and resetting state
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  // state live update onchange
  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h1>I already have an account</h1>
        <span>sign in with your email and passsword</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            label="Email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <FormInput
            name="email"
            label="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <div className="buttons">
            <CustomButton type="submit" value="submit form">
              Sign in
            </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
