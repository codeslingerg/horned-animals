// import React
import React from 'react';

//import other components
import HornedBeast from './HornedBeast.jsx';
import data from './data.json';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Create Component
class Gallery extends React.Component {

  render() {
    let beastComponents = [];
    // data.forEach((beast) => {
    //   beastComponents.push(
    //        //arr2
    //     <Col key={beast._id} xs={3}>
    //       <HornedBeast title={beast.title}
    //         description={beast.description}
    //         ImgLink={beast.image_url}
    //         handleShowModal={this.props.handleShowModal}
    //         beast={beast} />
    //     </Col>
    //   );
    // });
    return (
      <div>
        <HornedBeast title="rhino" imgURL="https://www.shopmascot.com/image/cache/mascotnew/new196-800x800.jpg" description="Mother (or father) rhino with two babies" />
        <HornedBeast title="Unicorn" imgURL="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" description="A unicorn and a narwhal nuzzling their horns" />
        <h2>Beasts:</h2>
        {beastComponents}
      </div>
    
    );
  }
}
  
// export default
export default Gallery