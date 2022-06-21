import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Welcome = () =>
{
    return(
        <div className="Welcome">
        <Header form = {"Welcome To My WebSite"}/>
        <div className="Button">
        <button id="Login">Login</button>
        <button id="SignUp">SignUp</button>
        </div>
        <div className="Wfooter" >
        <Footer/>
        </div>
        </div>
    )
}
export default Welcome;