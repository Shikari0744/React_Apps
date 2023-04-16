import React from 'react';

const User = (props) => {
    let name = props.children ? props.children : "N/A";
    // let age = props.age ? props.age : "N/A";
    let age = props.age;
    return (
        // ES6 Functional Components
        <li>
            <div>
                <span name="ES6 Functional Components"> Name : {name} | Age : {age} </span>
                <br/>
                <div>
                    <br/>
                    <button onClick={props.deleteEvent}> Delete User</button>
                    <input type="text" onChange={props.changeEvent} title="Change corresponding user name"/>
                    <br/>
                </div>
            </div>
        </li>
);
}

export default User;