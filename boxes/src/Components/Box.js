import React from 'react';
import '../Box.css';

const Box = (props) => {
    
    const handleClick = () => {
        console.log("wow");
    }

    return (
      <div className="box">
        <h2>Name: {props.name}</h2>
        <p>Age: {props.age}</p>
        <p>Title: {props.title}</p>
        <button onClick={handleClick}> Click here </button>
      </div>
    );
  };

  export default Box;