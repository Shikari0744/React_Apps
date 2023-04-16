import React, {Component, Fragment} from "react";
import User from "../es6/user/User";
import {user_name_input_update, user_age_input, user_name_input} from "../constants/AppConstants";
import UniqueId from 'react-html-id';

class Users extends Component {

    constructor() {
        super();
        UniqueId.enableUniqueIds(this);
        this.state = {
            users: [
                {id: this.nextUniqueId(), name: "Akash", age: 25},
                {id: this.nextUniqueId(), name: "Nikhil", age: 27},
                {id: this.nextUniqueId(), name: "Pankej", age: 24},
                {id: this.nextUniqueId(), name: "Ashish", age: 25}
            ],
            title: "Users List"
        };
        console.log(this.state);
    }

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

    deleteUser = (index, e) => {
        const tempUser = Object.assign([], this.state.users);
        // It creates duplicate of users[] array in tempUser. It doesn't create the reference.
        tempUser.splice(index, 1);
        this.setState({users: tempUser});
    }

    changeUserName = (id, events) => {
        const userIndex = this.state.users.findIndex((user) => {
            return user.id === id;
        });
        const changedUser = Object.assign([], this.state.users[userIndex]);
        const duplicateUsers = Object.assign([], this.state.users);
        changedUser.name = events.target.value;
        duplicateUsers[userIndex] = changedUser;
        this.setState({
            users: duplicateUsers
        });
    }

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
                    <>
                        {
                            this.state.users.map((user, index) => {
                                return <User changeEvent={this.changeUserName.bind(this, user.id)}
                                             deleteEvent={this.deleteUser.bind(this, index)} age={user.age}
                                             key={user.id}> {user.name} </User>
                            })
                        }
                    </>
                </div>
                {/*<User age = {this.state.users[0].age}> {this.state.users[0].name} </User>*/}
                {/*<User age = {this.state.users[1].age}> {this.state.users[1].name} </User>*/}
                {/*<User age = {this.state.users[2].age}> {this.state.users[2].name} </User>*/}
                {/*<User age = {this.state.users[3].age}> {this.state.users[3].name} </User>*/}
                <br/>
                <div>
                    <div>
                        <input id={user_name_input} type="text" title="name"/>
                        <input id={user_name_input_update} type="text" title="newName"/>
                        <input onChange={this.onChangeInputAge} id={user_age_input} title="user age" type="number"/>
                        {/*One way binding - onChange event*/}
                    </div>

                    <button onClick={this.changeName.bind(this)}> Changed Name</button>
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