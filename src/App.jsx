// Step 1 Make sure to import React
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// Step 2 create a component
render() {
  return (
    <Container>
      <Header />
      <Modal show={this.state.modalIsShowing} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Animal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>{this.state.modalHornedBeastName}</h1>
          <img src={this.state.modalImgUrl} />
        </Modal.Body>
      
      </Modal>
      <Main handleOpenAnimal={this.handleOpenAnimal} />
      <Footer />
    </Container>
  );
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
