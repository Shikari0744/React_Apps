import './App.css';
import Users from './users/Users'
import React, {Component} from "react";

class App extends Component {
  render() {
    return (
        <div className = "App">
          <Users> Below is the list: </Users>
        </div>
    );
  }
}

export default App;
