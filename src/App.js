import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { ToastContainer } from "react-toastify";
import auth from "./services/authService";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import ToggleButton from "./components/common/ToggleButton";
import LoginForm from "./components/loginForm";
import Logout from "./components/logout";
import "bootstrap/dist/css/bootstrap.css";
import ProtectedRoute from "./components/common/protectedRoute";
import AddUser from "./components/addUser";
import Profile from "./components/profile";
import UpdateProfile from "./components/profileForm";
import "./style.css";
import "react-toastify/dist/ReactToastify.css";
import "font-awesome/css/font-awesome.min.css";

class App extends Component {
  state = {};

  render() {
    const user = auth.getCurrentUser(); // Fetching user in render() instead of componentDidMount() to avoid undefined error at first
    return (
      <React.Fragment>
        <ToastContainer />
        <div id="wrapper">
          <NavBar user={user} />
          <div id="page-content-wrapper">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <ToggleButton />
                  <Switch>
                    <ProtectedRoute path="/dashboard" component={Dashboard} />
                    <Route path="/addUser" component={AddUser} />
                    <Route path="/userProfile" component={Profile} />
                    <Route path="/updateProfile" component={UpdateProfile} />
                    <Route path="/login" component={LoginForm} />
                    <Route path="/logout" component={Logout} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
