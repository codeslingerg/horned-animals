// import React
import React from "react";


// Create Component
class HornedBeast extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <img src={this.props.imgURL}/>
                <p>{this.props.description}</p>
            </div>
        );
    }
}   
// this.props works in tandem with the HornedBeasts components in Gallery.jsx.

// export Component
export default HornedBeast;