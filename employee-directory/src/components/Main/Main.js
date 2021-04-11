import React, { Component } from "react";
import SearchBar from "../SearchBar/SearchBar";
import API from "../../utils/API";

class Main extends Component {
  state = {
    search: "",
    employees: [],
    filterEmployees: [],
    sortEmployees: this.employeesInfo,
  };
  //  get employees info
  get employeesInfo() {
    return {
      name: "",
      phone: "",
      email: "",
      DOB: "",
    };
  }
  // used activity 19 to guide me.
  //  get the api so i can get the employees info
  getApi = (query) => {
    API.getEmployees(query)
      .then((res) =>
        this.setState({
          employees: res.data.results,
          filterEmployees: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  };
  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({ search: value });
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
  };
}
export default Main;
