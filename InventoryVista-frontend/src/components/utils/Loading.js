import React from "react";
import PageWithHeaderAndFooter from "../PageWithHeaderAndFooter";


function Loading(){
    return(
        // <PageWithHeaderAndFooter content={
            <div className="h-100 w-100 d-flex justify-content-center align-items-center">
                <div className="spinner-border text-success"></div>
            </div>
        // }/>
    );
}

export default Loading;