import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../services/authService";
import { Redirect } from "react-router";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.username, data.password);

      const { state } = this.props.location;

      window.location = state ? state.from.pathname : "/dashboard";
    } catch (ex) {
      if (ex.response && ex.response.status === 403) {
        const errors = { ...this.state.errors };
        errors.username = "Invalid Username/Password";
        this.setState({ errors });
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/dashboard" />;
    return (
      <div>
        <h1>Login</h1>
        <div className={this.getBorderStyle()}>        
          <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          <br></br>
          {this.renderButton("Login")}
        </form>
        </div>

      </div>
    );
  }
}

export default LoginForm;
