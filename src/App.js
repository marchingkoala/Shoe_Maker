import './App.css';
import { Link, Routes, Route } from "react-router-dom";
import Tester from './Tester';
import Model from './Model';

  //run npx gltfjsx 'path' to convert file into a js file
 
function App() {


  return (
    <div className="app_container">
      <nav>
        <Link to="/">Test</Link>
        <Link to="/court">Jogger</Link>
        <Link to="/">Sample</Link>
        <Link to="/">Sample</Link>
        <Link to="/">Sample</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Model />} />
        <Route path="/court" element={<Tester />} />
      </Routes>
    </div>
  );
}

export default App;
