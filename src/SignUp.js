import React from "react";
import Header from "./Header";
import Lable from "./Lable";
import Input from "./Input";
import Footer from "./Footer";
const SignUp = (props) =>{
    return(
        <div className="SignUp">
            <Header form = {"Registration Form"}/>
            <form>
            <Lable for="Name" />
            <Input type="Name" />
            <br/>
            <br/>
            <Lable for="Surname" />
            <Input type="text"/>
            <br/>
            <br/>
            <Lable for="Email" />
            <Input type="Email" />
            <br/>
            <br/>
            <Lable for="Password" />
            <Input type="Password" />
            <br/>
            <br/>
            <button>SignUp</button>
            <h5>Already Have a Account?</h5>
            <button onClick="D:\form\src\Loginform.js">Login</button>
            </form>
            <div className="SFooter"><Footer/></div>
            
        </div>
    )
} 
export default SignUp;