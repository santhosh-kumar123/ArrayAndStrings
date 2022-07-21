
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;




import React from 'react'
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from "./components/Home"
import Login from './components/Login'
import Contact from "./components/Contact"
import NotFound from './components/NotFound'
// import CustomRoutes from './routes/CustomRoutes'
const App = () => {
  return (
    <div>App
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={Home}/>
          <Route path="/login" element={Login}/>
          <Route path="/contact" element={Contact}/>
          <Route path="*" elements={NotFound}/>
          </Routes>
      </BrowserRouter>
      </div>
  )
}
export default App