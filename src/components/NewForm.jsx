//import components
import React from "react";
import Form from "react-bootstrap";

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

render() {
    return (
        
        <form onChange={this.handleNumberChange}>
            <option value="0" >Pick the Number of Horns</option>
            <option value="1" >1</option>
            <option value="2" >2</option>
            <option value="3" >3</option>
            <option value="100" >100</option>
        </form>
    
    )
}
