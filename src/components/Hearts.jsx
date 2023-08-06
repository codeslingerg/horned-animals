// import React
import React from 'react';

// Create Component
class Hearts extends React.Component {
    //render function
    render() {
        return (
            <div>
                <p onClick={this.props.handleLiked}>🫶</p>
                <p> Like Count: {this.props.likedCount}</p>
            </div>
        );
    }
}

// Export Component
export default Hearts;