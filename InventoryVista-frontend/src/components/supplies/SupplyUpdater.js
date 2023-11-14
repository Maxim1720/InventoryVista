// SupplyUpdater.js
import React from 'react';
import SupplyForm from './SupplyForm';
import PageWithHeaderAndFooter from "../PageWithHeaderAndFooter";
import Getter from "../../logic/Getter";
import api from '../../env.json';
import {useParams} from "react-router-dom";
import Loading from "../utils/Loading";
import Error from "../utils/Error";
import Updater from "../../logic/Updater";

function SupplyUpdaterWrapper() {
  const {id} = useParams();
  return <SupplyUpdater id={id}/>
}

class SupplyUpdater extends React.Component {

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
      url: api.api.baseUrl + `/supplies`
    })
        .getById(this.props.id)
        .then(resp=> {
          this.setState({
            formData: {
              ...resp.body,
            },
            isLoaded: true
          },()=>console.log("in updater: " + JSON.stringify(this.state.formData)))
        })
        .catch(error=>{this.setState({error})})

  }
  updateSupply = (data) => {
    new Updater({url:api.api.baseUrl+"/supplies"})
        .updateById({
          id: this.props.id,
          data:{
            ...data
          }
        })
        .then(resp=>{
            console.log("UPDATED ID: " + resp.body.id);
            window.location.replace("/supplies");
        })
        .catch(error=>this.setState({error}));

  };

  render() {

    if (this.state.error) {
      return (
          <div className="h-100">
            <Error message={this.state.error.message}/>
          </div>
      );
    } else if (!this.state.isLoaded) {
      return <Loading/>
    }
    else {
      return <PageWithHeaderAndFooter content={
        <SupplyForm initFormData={this.state.formData} onSubmit={this.updateSupply}/>
      }/>
    }
  }
}

export default SupplyUpdaterWrapper;
