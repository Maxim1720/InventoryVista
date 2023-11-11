import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Navigation from "./Navigation";


class Header extends React.Component{

    constructor(props) {
        super(props);
    }
    render() {
        return(
             <Navigation/>
        );
    }
}


export default Header;
