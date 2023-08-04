// import React
import React from "react";


// Create Component
class HornedBeast extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <img src={this.props.imgURL} alt= "" title=""/>
                <p>hi nice to meet you</p>
            </div>
        );
    }
}   


// export Component
export default HornedBeast;