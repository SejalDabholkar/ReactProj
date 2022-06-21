import React from 'react';
import "./style.css";
const Header= (props) => {
  return (
    <div className='Header'>
        <h1>{props.form}</h1>
        </div>
  )
}

export default Header