import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./home.css"

const Home = () => {

let navigate = useNavigate();
  const navigator = () =>{
    navigate("/court")
  }

    return (
        <div id="playground_container">
        <div className='playground_box'>
            <h2>Welcome to the Playground</h2>
            <p>Let your inspiration soar.<br />
            Try your hands at making your custom colored styles.</p>
            <button onClick={navigator}>Customize</button>
      </div>    
        </div>
    );
};

export default Home;