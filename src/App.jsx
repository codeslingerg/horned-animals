// import React
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

// import 'bootstrap/dist/css/bootstrap.min.css';


// Step 2 create a component
class App extends React.Component {

  render() {

    return (
      <div>
        <Header />
        <Main />
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
