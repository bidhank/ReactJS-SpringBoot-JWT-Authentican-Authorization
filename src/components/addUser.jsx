import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import Form from "./common/form";
import { getUnits, addUser, getUsers } from "../services/adminService";
import Table from "./common/table";

class AddUser extends Form {
  state = {
    data: { userId: "", userRole: "", fullName: "", unitId: "" },
    userRoleList: [],
    units: [],
    users: [],
    errors: {},
  };

  schema = {
    userId: Joi.string().required().label("Username"),
    userRole: Joi.string().required().label("User Role"),
    fullName: Joi.string().required().label("Full Name"),
    unitId: Joi.string().required().label("Unit"),
  };

  populateRoleList() {
    const userRoleList = [
      //Modify here , Calling to server is good
      { _id: "ADMIN", name: "ROLE_ADMIN" },
      { _id: "USER", name: "ROLE_USER" },
      { _id: "APPROVER", name: "ROLE_APPROVER" },
      { _id: "CHECKER", name: "ROLE_CHECKER" },
    ];
    this.setState({ userRoleList });
  }

  async populateUnitList() {
    const { data: units } = await getUnits();
    const parsedUnits = [];
    units.map((value) => {
      parsedUnits.push({ _id: value.id, name: value.unitName });
    });
    this.setState({ units: parsedUnits });
  }

  async getUsers() {
    const { data: users } = await getUsers();
    this.setState({ users: users });
  }

  async componentDidUpdate(){
    await this.getUsers();
  }

  async componentDidMount() {
    await this.getUsers();
    this.populateRoleList();
    this.populateUnitList();
  }

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await addUser(data);
      toast.success("User Added");
    } catch (ex) {
      if (ex.response) {
        switch (ex.response.status) {
          case 403:
            window.location = "/login";
          case 400:
            const errors = { ...this.state.errors };
            errors.userId = ex.response.data;
            this.setState({ errors });
        }
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <h1>Add User</h1>
        <div className={this.getBorderStyle()}>
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col">
                {this.renderInput("userId", "Username")}
              </div>
              <div className="col">
                {this.renderSelect(
                  "userRole",
                  "User Role",
                  this.state.userRoleList
                )}
              </div>
            </div>

            <div className="row">
              <div className="col">
                {this.renderInput("fullName", "Full Name")}
              </div>

              <div className="col">
                {this.renderSelect("unitId", "Unit", this.state.units)}
              </div>
            </div>

            <div className="row">
              <div className="col">
                <br></br>
                {this.renderButton("Add")}
              </div>
            </div>
          </form>
        </div>
        <Table
          columns={[
            { Header: "Full Name", accessor: "fullName" },
            { Header: "User Id", accessor: "userId" },
            { Header: "User Role", accessor: "userRole" },
            { Header: "Active", accessor: "active" },
          ]}
          data={this.state.users}
        />
      </React.Fragment>
    );
  }
}

export default AddUser;
