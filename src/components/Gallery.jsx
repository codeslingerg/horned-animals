// import React
import React from 'react';

//import other components
import HornedBeast from './HornedBeast.jsx';
import data from './data.json';

let namedata = [];


// Create Component
class Gallery extends React.Component {

  render() {
    let beastComponents = [];
    namedata.forEach((title) => {
    //   // arr2
        beastComponents.push(title);
          // <HornedBeast
          //   title={HornedBeast.title}
          //   imgURL={HornedBeast.imgURL} />
    // //     <Col>
    // //       <HornedBeast title={beast.title}
    // //         description={beast.description}
    // //         ImgLink={beast.image_url}
    // //         handleShowModal={this.props.handleShowModal}
    // //         beast={beast} />
    // //     </Col>
    
    });


    return (
      <div>
        <h2>Beasts:</h2>
        { beastComponents }
      </div>
    
    );
  }
}
  
// export default
export default Gallery