// import React
import React from 'react';

//import other components
import HornedBeast from './HornedBeast.jsx';
import data from './data.json';
import Row from 'react-bootstrap';

// Create Component
class Gallery extends React.Component {

  render() {
  let beastComponents = [];
    data.forEach((name) => {
      beastComponents.push(
           //arr2
        <Col key={beast._id} xs={3}>
          <HornedBeast title={beast.title}
            description={beast.description}
            ImgLink={beast.image_url}
            handleShowModal={this.props.handleShowModal}
            beast={beast} />
        </Col>
      );
    });
    return (
      <div>
        <h2>Beasts:</h2>
        {beastComponents}
      </div>
    
    );
  }
}
  
// export default
export default Gallery