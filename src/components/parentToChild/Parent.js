import React from 'react';
import Child from "./Child";

const Parent = (props) => {
    return(
        <div>
            <Child {...props} message="message from parent"/>
        </div>
    )
}

export default Parent;