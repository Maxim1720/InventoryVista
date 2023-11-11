// SupplyUpdater.js
import React from 'react';
import SupplyForm from './SupplyForm';
import PageWithHeaderAndFooter from "../PageWithHeaderAndFooter";
import Getter from "../../logic/Getter";
import api from '../../env.json';
import {useParams} from "react-router-dom";
import Loading from "../utils/Loading";
import Error from "../utils/Error";

function SupplyUpdaterWrapper() {
  const {id} = useParams();
  return <SupplyUpdaterWrapper id={id}/>
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
      url: api.api.baseUrl + `/supplies/`
    })
        .getById(this.props.id)
        .then(resp=> {
          this.setState(prev => ({
            ...prev,
            formData: {
              ...resp.body
            },
            isLoaded: true
          }))
        })
        .catch(error=>{this.setState({error})})

  }

  // Функция обновления поставки
  updateSupply = (data) => {
    // Логика для обновления поставки на сервере
    console.log('Updating supply:', data);
  };

  render() {

    if (this.state.isLoaded) {
      return <Loading/>
    } else if (this.state.error) {
      return <Error message={this.state.error.message}/>
    }
    return <PageWithHeaderAndFooter content={
      <SupplyForm initFormData={this.state.formData} onSubmit={this.updateSupply}/>
    }/>
  }
}

export default SupplyUpdaterWrapper;
