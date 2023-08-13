// import React
import React from 'react';

//import other components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import HornedBeast from './HornedBeast.jsx';
import data from './data.json';
import './Beast.css'
// import NewForm from "./components/NewForm"


// Create Component
class Gallery extends React.Component {  
  

  render() {
    let beastComponents = [];
    data.forEach((object,i) => {
   


      beastComponents.push(
        <HornedBeast
          title={data[i].title}
          imgURL={data[i].image_url}
          handleOpenBeast={this.props.handleOpenBeast}
        />
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
        < HornedBeast
          title=""
          imgURL=""
          description="" />
        { beastComponents }
      </div>
    
    );
  }
}
  
// export default
export default Gallery