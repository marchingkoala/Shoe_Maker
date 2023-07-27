import './App.css';
import {  Routes, Route} from "react-router-dom";
import Tester from './Tester';
import Home from './Home';

  //run npx gltfjsx 'path' to convert file into a js file
 
function App() {

  return (
    <div className="home_container">
      <div className='nav_section'>
        <h1>United Footwear Group</h1>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/court" element={<Tester />} />
      </Routes>
    </div>
  );
}

export default App;
