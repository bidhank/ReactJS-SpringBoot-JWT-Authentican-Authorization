import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { getUserProfile } from "../services/common/profileService";

class Profile extends Component {
  state = {
    data: {},

  };

  async populateUserProfile() {
    const { data: userProfile } = await getUserProfile();
    console.log(userProfile);
    this.setState({ data: userProfile });
  }
  async componentDidMount() {
    this.populateUserProfile();
  }
  render() {
    const { id,address, email, gender, mobileNo ,userDto} = (this.state.data);
    return (
      <div>
        <h1>Profile</h1>
        <div className="card">
          <div className="card-body">
            {/* <h5 className="card-title">Profile</h5> */}
            <p className="card-text">
              <i className="fa fa-envelope-o" aria-hidden="true"></i> {email} 
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <i className="fa fa-mobile" aria-hidden="true"></i> {mobileNo}
            </li>
            <li className="list-group-item">
              <i className="fa fa-male" aria-hidden="true"></i>
              <i className="fa fa-female" aria-hidden="true"></i> {gender}
            </li>
            <li className="list-group-item">
              <i className="fa fa-map-marker" aria-hidden="true"></i> {address}
            </li>
          </ul>
          <div className="card-body">
            <NavLink to="/updateProfile" className="card-link"><i className="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i> 
            </NavLink> 
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
