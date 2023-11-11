import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import 'bootstrap';
import 'cssstyle';

class PageWithHeaderAndFooter extends React.Component{
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="d-flex flex-column h-100">
                <Header/>
                <div className="flex-grow-1">
                        {this.props.content}
                </div>
                    <Footer />
            </div>
        );
    }
}

export default PageWithHeaderAndFooter;