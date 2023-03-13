import React, {Component} from 'react';

class Child extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.doSomething}> {this.props.title} </button>
                <input type = "text" value={this.props.message} title="message from parent" readOnly={true} />
            </div>
        );
    }
}

export default Child;