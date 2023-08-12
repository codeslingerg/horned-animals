//import components
import React from "react";
import Form from "react-bootstrap/Form";

class NewForm extends React.Component {
    constructor(props) {
        super(props);
    }
}

// handle horns = 1,2,3,100
handleNumberChange = (event) => {
    let num = +event.target.value;
    this.props.handleNum(num);
    console.log(num);
}