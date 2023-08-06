// import React
import React from 'react';

//import other components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import HornedBeast from './HornedBeast.jsx';
import data from './data.json';
import './beast.css'


// Create Component
class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalBeastName: "UniWhal",
      modalImgUrl: "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
      modalIsShowing: false
    };
  }

  handleShow = () => {
    console.log("PLEASE SHOW THE MODAL!!");
    this.setState({
      modalIsShowing: true
    });
  }
  
  handleClose = () => {
    this.setState({
      modalIsShowing: false
    });
  }

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