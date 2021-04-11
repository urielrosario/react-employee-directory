import React from "react";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <div className="App">
      {/* <Wrapper> */}
      <Header />
      <SearchBar />
      <Table />
      {/* <Main /> */}
      {/* </Wrapper> */}
    </div>
  );
}

export default App;
