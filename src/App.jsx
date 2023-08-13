// import React
import React from 'react';

// All components are in component folder
import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import data from "./components/data.json";
// import NewForm from "./components/NewForm";

// import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';



// Step 2 create a component
class App extends React.Component {
  //handle for filter
  constructor(props) {
    super(props);
    this.state = {
      rawData: data,
      filterByBy: "all"
      
      // modalBeastName: "",
      // modalBeastImgUrl: "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
      // modalIsShowing: false
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

  handleOpenBeast = (beastTitle, beastImgUrl) => {
    console.log("open beast" + beastTitle, beastImgUrl);
    this.setState({
      modalIsShowing: true,
      modalBeastTitle: beastTitle,
      modalBeastImgUrl: beastImgUrl
    });
  }

  handleSelect = (event) => {
    let value = event.target.value;
    console.log(value); 
    this.setState({
      filterBy: value
    })
   
 }

  render() {
    let filteredTitles = this.state.rawData;
    let titleList = filteredTitles.map((title) => <li>{title}</li>);
    if (this.state.filterBy === "1") {
      filteredTitles = this.state.rawData.filter((title) => title[0] === "1");
    }

    return (
      <div>
        
        <Header />
        <h1>Filter Beasts</h1>
        <form>
        <select onChange={this.handleSelect} value={this.state.filterBy}>
          <option value="all">all</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="100">100</option>
          </select>
        </form>
        
        {/* <ul>
          {titleList}
        </ul> */}

        <Modal show={this.state.modalIsShowing} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Beast</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2>{this.state.modalBeastTitle}</h2>
            <img src={this.state.modalBeastImgUrl} />
          </Modal.Body>
        </Modal>

        <Gallery handleOpenBeast={this.handleOpenBeast} />
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
export default App;
