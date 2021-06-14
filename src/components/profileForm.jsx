import Joi from "joi-browser";
import React from "react";
import { toast } from "react-toastify";

import {
  getUserProfile,
  updateUserProfile,
} from "../services/common/profileService";

import Form from "./common/form";

class UpdateProfile extends Form {
  state = {
    data: {
      id: "",
      email: "",
      mobileNo: "",
      address: "",
      gender: "",
      userDto: {},
    },
    genderList: [],
    errors: {},
  };

  schema = {
    email: Joi.string().email().required().label("Email"),
    mobileNo: Joi.number().required().label("Mobile No"),
    address: Joi.string().required().label("Address"),
    gender: Joi.string().required().label("Gender"),
    userDto: Joi.object(),
    id: Joi.number().required(),
  };

  async populateGenderList() {
    const genderList = [
      //Modify here , Calling to server will be more beneficial
      { _id: "M", name: "Male" },
      { _id: "F", name: "Female" },
      { _id: "O", name: "Other" },
    ];
    this.setState({ genderList });
  }

  async populateProfile() {
    try {
      const { data: resData } = await getUserProfile();
      this.setState({ data: this.viewMapper(resData) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.props.history.replace("/userProfile");
      }
    }
  }

  viewMapper(resData) {
    return {
      id: resData.id,
      email: resData.email,
      mobileNo: resData.mobileNo,
      address: resData.address,
      gender: resData.gender,
      userDto: resData.userDto,
    };
  }

  async componentDidMount() {
    await this.populateGenderList();
    await this.populateProfile();
  }

  doSubmit = async () => {
    try {
      await updateUserProfile(this.state.data);
      toast.success("Profie Updated");
      this.props.history.push("/userProfile");
    } catch (ex) {
      if (ex.response) {
        switch (ex.response.status) {
          case 403:
            window.location = "/login";
          case 400:
            const errors = { ...this.state.errors };
            errors.email = ex.response.data;
            this.setState({ errors });
        }
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <h1>Update Profile</h1>
        <div className={this.getBorderStyle()}>
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col">{this.renderInput("email", "Email")}</div>
              <div className="col">
                {this.renderInput("mobileNo", "Mobile No")}
              </div>
            </div>

            <div className="row">
              <div className="col">
                {this.renderInput("address", "Address")}
              </div>

              <div className="col">
                {this.renderSelect("gender", "Gender", this.state.genderList)}
              </div>
            </div>

            <div className="row">
              <div className="col">
                <br></br>
                {this.renderButton("Update")}
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default UpdateProfile;
