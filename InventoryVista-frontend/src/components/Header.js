import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Navigation from "./Navigation";


const Header = (isAuthorized)=>{
    return (
        <Navigation isAuthorized={isAuthorized}/>
    );
}


export default Header;
