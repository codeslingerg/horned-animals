// import React
import React from 'react';

// All components are in component folder
import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';


// Step 2 create a component
class App extends React.Component {
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
    return (
      <div>
        <Header />
        <Button variant="primary"
          onClick={this.handleShow}>
          Launch modal
        </Button>
        <Modal show={this.state.modalIsShowing} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Beast</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2>{this.state.modalBeastName}</h2>
            <img src={this.state.modalImgUrl} />
          </Modal.Body>
        </Modal>
        <Gallery />
        <Footer />
      </div>

    );
  }
}  
  




// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// Step 3 export your component
export default App
