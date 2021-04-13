import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=200&nat=us";

export default {
  search: function (query) {
    return axios.get(BASEURL + query);
  },
};
// its giving me an error that i need to put the api into a function

// function App() {
//   return axios.get(BASEURL);
// }

// export default App;
