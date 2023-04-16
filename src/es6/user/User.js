import React, {Fragment} from 'react';

const User = (props) => {
    let name = props.children ? props.children : "N/A";
    // let age = props.age ? props.age : "N/A";
    let age = props.age;
    return (
        // ES6 Functional Components
        <Fragment>
            <li>
                <div>
                    <span name="ES6 Functional Components"> Name : {name} | Age : {age} </span>
                    <br/>
                    <div>
                        <br/>
                        <button onClick={props.deleteEvent}> Delete User</button>
                        <input type="text" onChange={props.changeEvent} title="Change corresponding user name"/>
                        <div>
                            <span> ----------------------------------------------------------------------------------- </span>
                        </div>
                        <br/>
                    </div>
                </div>
            </li>
        </Fragment>
    );
}

export default User;