// import React
import React from "react";

// Create Component
class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likeCount: 0,
        };
    }


    handleLike = () => {
        this.setState({
            likeCount: this.state.likeCount + 1,
        });
    };

    hanleClickImage = (event) => {
        this.props.handleOpenBeast(this.props.title, this.props.imgSRC);
    };

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p>like count: {this.state.likeCount}</p>
                <img src={this.props.imgSRC} onClick={this.handleClickImage} />
            </div>
        );
    }
}   



// export Component
export default HornedBeast;