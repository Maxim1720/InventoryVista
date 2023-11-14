import React from "react";
import Getter from "../../logic/Getter";
import api from '../../env.json';
import {useParams} from "react-router-dom";
import Error from "../utils/Error";
import Updater from "../../logic/Updater";
import WareHouseForm from "./WareHouseForm";
import PageWithHeaderAndFooter from "../PageWithHeaderAndFooter";
import Loading from "../utils/Loading";

function WareHouseUpdaterWrapper(){
    const {id} = useParams();
    return(
        <PageWithHeaderAndFooter content={
            <WareHouseUpdater id={id}/>
        }/>
    );
}


class WareHouseUpdater extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            formData:{

            },
            isLoaded: false
        }
    }

    componentDidMount() {

        new Getter({
            url: api.api.baseUrl + "/ware-houses"
        }).getById(this.props.id)
            .then(resp=>{
                this.setState({
                    formData:{
                        ...resp.body
                    },
                    isLoaded: true
                },()=>{
                    console.log(JSON.stringify(this.state));
                });

            })
            .catch(error=>{
                this.setState({error});
            })
    }

    onSubmit = (data)=>{
        new Updater({
            url: api.api.baseUrl+"/ware-houses"
        })
            .updateById({
                id: this.props.id,
                data: {
                    ...data
                }
            })
            .then(()=>window.location.replace("/warehouses"))
            .catch(error=>this.setState({error}))
    }

    render() {
        if(this.state.error){
            return(
              <Error message={this.state.error.message}/>
            );
        }
        else if(!this.state.isLoaded){
            return (
                <Loading/>
            );
        }
        else {
            return (
                <div className="border h-100 d-flex justify-content-center align-items-center w-100">
                    <WareHouseForm initFormData={this.state.formData} onSubmit={this.onSubmit}/>
                </div>
            );
        }

    }

}

export default WareHouseUpdaterWrapper;