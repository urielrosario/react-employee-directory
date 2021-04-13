import React, { Component } from "react";
import API from "../../utils/API";
import SearchBar from "../../components/SearchBar/SearchBar";
import Table from "../../components/Table/Table";

class Main extends Component {
  state = {
    search: "",
    results: [],
    // filterEmployees: [],
    searchEmployees: [],
  };
  //  get employees info
  // get employeesInfo() {
  //   return {
  //     name: "",
  //     phone: "",
  //     email: "",
  //     dob: "",
  //   };
  // }
  componentDidMount() {
    this.getApi();
  }
  // used activity 19 to guide me.
  //  get the api so i can get the employees info
  getApi = () => {
    API.search()
      .then((res) =>
        this.setState({
          results: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  };
  handleInputChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    this.setState({
      search: value,
    });
  };
  handleFormSubmit = (event) => {
    console.log(event);
    const array = this.state.results;
    if (event.length >= 0) {
      const filterEmployee = array.filter((result) => {
        const employeeName = [array.name.first];
        return employeeName.some((e) => e.toLowerCase());
      });
      this.setState({
        searchEmployees: filterEmployee,
      });
    }
  };
  filterEmployee = () => {
    const filterEm = this.state.results;
    const filter = filterEm.sort((a, b) => {
      const nameA = a.name.first.toLowerCase();
      const nameB = b.name.first.toLowerCase();
      if (nameA < nameB) {
        return -1;
      } else {
        return 1;
      }
    });
    this.setState({ results: filter });
  };
  render() {
    console.log(this.state.results);
    const searchlength = this.state.searchEmployees;
    return (
      <>
        <div>
          <SearchBar
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
        </div>
        <Table
          filterEmployee={this.filterEmployee}
          results={
            searchlength.length
              ? this.state.searchEmployees
              : this.state.results
          }
        />
      </>
    );
  }
}

export default Main;
