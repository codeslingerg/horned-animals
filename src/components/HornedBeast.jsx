// import React
import React from "react";


// Create Component
class HornedBeast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            likedCount: 0
        };
    }

    handleLiked = () => {
        console.log("say hola to" + this.props.title);
        this.setState({
            likedCount: this.state.likedCount + 1
        });
    };
    
    handleClickImage = (event) => {
        this.props.handleOpenBeast(this.props.title, this.props.imgURL);
    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p onClick={this.handleLiked}>🫶</p>
                <p>Like Count: {this.state.likedCount} times.</p>
                <img
                    src={this.props.imgURL}
                    onClick={this.handleClickImage}
                />
                <p>{this.props.description}</p>
            </div>
        );
    }
}   
// this.props works in tandem with the HornedBeasts components in Gallery.jsx.

// export Component
export default HornedBeast;