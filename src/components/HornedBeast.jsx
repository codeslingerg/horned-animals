// import React
import React from "react";


// Create Component
class HornedBeast extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <img src={this.props.imgURL} />
                <p>hi nice to meet you</p>
            </div>
        );
    }
}   


// export Component
export default HornedBeast;