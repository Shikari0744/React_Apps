import './App.css';
import Parent from './components/parentToChild/Parent'
import Users from './users/Users'
import React, {Component} from "react";

class App extends Component {
    state = {
        title: 'Hello World'
    }

    changeTheWorld = (new_title) => {
        this.setState({
            title:new_title
            });
    }

  render() {
    return (
        <div className = "App">
            <Users> Below is the list: </Users>
            <Parent
                doSomething={this.changeTheWorld.bind(this, 'World has change now to NEW WORLD')} title={this.state.title}
            />
        </div>
    );
  }
}

export default App;
