import React, {Component} from "react";
import User from "../es6/user/User";
import {user_name_input_update, user_age_input, user_name_input} from "../constants/AppConstants";

class Users extends Component {

    state = {
        users : [
            {name : "Akash", age : 25},
            {name : "Nikhil", age : 27},
            {name : "Pankej", age : 24},
            {name : "Ashish", age : 25}
        ],
        title : "Users List"
    };

    onChangeInputAge = (event) => {
        const tpUser = document.getElementById(user_name_input).value;
        if (!tpUser) {
            window.alert('Name field is absent.');
        }
        const newSate = this.state.users.map((user) => {
            const temporaryUser = user;
            if (temporaryUser.name === tpUser) {
                temporaryUser.age = event.target.value;
            }
            return temporaryUser;
        })
        this.setState({
            newSate
        })
    }

    // makeMeYounger = () => {
    //     const tpUser = document.getElementById(user_name_input).value;
    //     const tpAge = document.getElementById(user_age_input).value;
    //     console.log(tpUser);
    //     const newState = this.state.users.map((user) => {
    //             const tempUser = user;
    //             if (tempUser.name === tpUser) {
    //                 tempUser.age =  user.age - tpAge;
    //             }
    //             if (tempUser.age < 0) {
    //                 // age cannot be lower than 0
    //                 tempUser.age = 0;
    //             }
    //             return tempUser;
    //         }
    //     );
    //     this.setState({
    //         newState
    //     });
    // }

    // makeMeOlder = () => {
    //     const tpUser = document.getElementById(user_name_input).value;
    //     const tpAge = document.getElementById(user_age_input).value;
    //     console.log(tpUser);
    //     const newState = this.state.users.map((user) => {
    //             const tempUser = user;
    //             if (tempUser.name === tpUser) {
    //                 tempUser.age = user.age + tpAge;
    //             }
    //             // if (tempUser.age < 0) {
    //             //     // age cannot be lower than 0
    //             //     tempUser.age = 0;
    //             // }
    //             return tempUser;
    //         }
    //     );
    //     this.setState({
    //         newState
    //     });
    // }

    changeName = (e_name) => {
        const updatedName = document.getElementById(user_name_input_update).value;
        let previousName = document.getElementById(user_name_input).value;
        if (!previousName) {
            window.alert('Name field is absent, going with default name i.e., ' + e_name);
            previousName = e_name;
        }
        const newSate = this.state.users.map((user) => {
            const temporaryUser = user;
            if (temporaryUser.name === previousName) {
                temporaryUser.name = updatedName;
            }
            return temporaryUser;
        })
        this.setState({
            newSate
        })
}

    render() {
        // let subTitle = this.props.children ? this.props.children : "N/A";
        return (
            // Class Components - It BY DEFAULT has the props
            <div>
                <div>
                <h1> {this.state.title} </h1>
                {
                    this.state.users.map((user) => {
                        return <User age = {user.age}> {user.name} </User>
                    })
                }
                </div>
                {/*<User age = {this.state.users[0].age}> {this.state.users[0].name} </User>*/}
                {/*<User age = {this.state.users[1].age}> {this.state.users[1].name} </User>*/}
                {/*<User age = {this.state.users[2].age}> {this.state.users[2].name} </User>*/}
                {/*<User age = {this.state.users[3].age}> {this.state.users[3].name} </User>*/}
                <br/>
                <div>
                    <div>
                        <input id = {user_name_input} type = "text" title="name" />
                        <input id = {user_name_input_update} type = "text" title="newName" />
                        <input onChange={this.onChangeInputAge} id = {user_age_input} title = "user age" type = "number" />
                        {/*One way binding - onChange event*/}
                    </div>
                <button onClick={this.changeName.bind(this, 'default_name')}> Changed Name </button>
                {/* if you call above function like makeMeYounger(), then it will execute function right away causing infinite loop as console will call render infinite because we are changing state in that function body*/}
                {/*<button onClick={this.makeMeOlder}> Make User X years older </button>*/}
                <br/>
                </div>
                <br/>
            </div>
        );
    }
}

export default Users;