// SupplyCreator.js
import React from 'react';
import SupplyForm from './SupplyForm';
import Saver from "../../logic/Saver";
import api from '../../env.json';
import Error from "../utils/Error";

class SupplyCreator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

  // Функция создания новой поставки
  createSupply = (data) => {
    console.log('Creating supply:', data);
    const saver = new Saver({url: api.api.baseUrl+"/supplies"});
    saver
        .save(data)
        .then(json=>{
            if(json.code !== 200){
                throw new Error(json.message);
            }
            window.location.replace('/supplies')
        })
        .catch(error=>{
            this.setState({error})
        });
  };

  render() {

      if(this.state.error){
          return <Error message={this.state.error.message}/>
      }

    return (
        <div className="h-100 bg-body-secondary">
          <SupplyForm onSubmit={this.createSupply} initFormData={{}}/>
        </div>
    );
  }
}

export default SupplyCreator;
