import React from "react";
import Getter from "../../logic/Getter";
import Loading from "../utils/Loading";
import Error from "../utils/Error";

class ChangedExpirationDates extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: []
        }
    }

    componentDidMount() {
        const getter = new Getter();
    }



    render() {

        const {isLoaded, error, items} = this.state;

        if(!isLoaded){
            return <Loading />
        }
        else if(error){
            return <Error message={error.message}/>
        }

        return(
            <>
                <table className="table">

                </table>
            </>
        );
    }
}