// import React
import React from 'react';

//import other components
import HornedBeast from './HornedBeast.jsx';
import data from './data.json';
import './beast.css'


// Create Component
class Gallery extends React.Component {

  render() {
    let beastComponents = [];
    data.forEach((object,i) => {
   


      beastComponents.push(
        <HornedBeast title={data[i].title} imgURL={data[i].image_url} />
      );
     
          // <Col>
          //   <HornedBeast title={beast.title}
          //     description={beast.description}
          //     ImgLink={beast.image_url}
          //     handleShowModal={this.props.handleShowModal}
          //     beast={beast} />
          // </Col>
    
    });


    return (
      <div>
        <h2>Beasts:</h2>
        < HornedBeast title="Hello Rhino" imgURL="" description= ""/>
        { beastComponents }
      </div>
    
    );
  }
}
  
// export default
export default Gallery