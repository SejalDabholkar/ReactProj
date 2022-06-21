import React from 'react';
import Header from './Header';
import Lable from './Lable';
import Input from './Input';
import Footer from './Footer';
export const Loginform = () => {
  return (
    <div className='Loginform'>
      <Header form={"Login Page"}/>
      <form>
        <Lable for="Userename" />
        <Input type="Username" />
        <br/>
        <br/>
        <Lable for="Password" />
        <Input type="Password" />
        <br/>
        <br/>
        <button>Login</button>
        <Footer/>
        
      </form>
    </div>
  )
}
 export default Loginform;