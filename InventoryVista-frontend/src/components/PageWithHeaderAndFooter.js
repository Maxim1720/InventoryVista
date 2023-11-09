import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import 'bootstrap';
import 'cssstyle';

class PageWithHeaderAndFooter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isAuthorized: false
        }
    }


    render() {
        return (
            <div className="d-flex flex-column h-100">
                <Header isAuthorized={this.state.isAuthorized} />
                <div className="flex-grow-1">
                        {this.props.content}
                </div>
                {/*<div className="flex-shrink-1">*/}
                    <Footer />
                {/*</div>*/}
            </div>
        );
    }
}

export default PageWithHeaderAndFooter;