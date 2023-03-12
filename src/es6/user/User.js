import React from 'react';

const User = (props) => {
    let name = props.children ? props.children : "N/A";
    // let age = props.age ? props.age : "N/A";
    let age = props.age;
    return (
        // ES6 Functional Components
        <div name="ES6 Functional Components"> name : {name} | age : {age} </div>
);
}

export default User;