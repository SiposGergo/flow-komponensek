// import React from "react";
import {Component} from "react";


export default class HelloClass extends Component {
    render() {
        const {name, asd} = this.props;
        // cosnt name = this.props.name;
        console.log('HelloClass component rendered!')
        return <p>Hello {name} {asd}!</p>;
    }
}

// export default Hello;