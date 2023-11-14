// SupplyForm.js
import React from 'react';
import Getter from "../../logic/Getter";
import api from '../../env.json';
import Error from "../utils/Error";
import Loading from "../utils/Loading";
import {Calendar} from "react-bootstrap-icons";

class SupplyForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData:{
      },
      suppliers:[],
      products:[],
      isLoaded: false
    };
  }

  componentDidMount() {
    const products = []
    const suppliers = [];
    Promise.all([
      new Getter({
        url: api.api.baseUrl + "/products"
      }).getAll().then(resp => products.push(...resp.body)),
      new Getter({
        url: api.api.baseUrl + "/suppliers"
      }).getAll().then(resp => suppliers.push(...resp.body))
    ])
        .then(() => {
          this.setState(prev => ({
            ...prev,
            formData: {
              ...prev.formData,
              supplierId: suppliers.length > 0 ? suppliers[0].id : null,
              productId: products.length > 0 ? products[0].id : null,
            },
            isLoaded: true,
            suppliers: [...suppliers],
            products: [...products]
          }), ()=>console.log(JSON.stringify(this.state)));
        })
        .catch(error => {
          this.setState({error})
        });

    if(this.props.initFormData){
      this.setState(prev=>({
        ...prev,
        formData:{
          ...prev.formData,
          ...this.props.initFormData,
          supplyDate: new Date(Date.parse(this.props.initFormData.supplyDate)).toISOString().split("T")[0]
        }
      }), ()=>{

      });
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState(prev=>({
      ...prev,
      formData: {
        ...prev.formData,
        [name]: value
      },
    }), ()=>console.log(JSON.stringify(this.state)));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({...this.state.formData}, e);
  };

  render() {

    if(this.state.error){
      return <Error content={this.state.error.message}/>
    }
    else if(!this.state.isLoaded){
      return <Loading/>
    }

    return (
        <div className="container h-100 d-flex flex-column justify-content-center fs-5">
          <form className="p-2 rounded-4 w-100 bg-body" onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="supplierId" className="form-label">
                Поставщик
              </label>

              <select className="form-select" name="supplierId" onChange={this.handleInputChange} required>
                {
                  this.state.suppliers.map(
                      s=> (
                          <option key={s.id} name={s.name} value={s.id}>
                            {s.name}
                          </option>
                      )
                  )
                }
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="productId" className="form-label">
                Продукт
              </label>
              <select className="form-select" name="productId" onChange={this.handleInputChange} required>
                {
                  this.state.products.map(
                      p=> (
                          <option key={p.id} name={p.name} value={p.id}>
                            {p.name}
                          </option>
                      )
                  )
                }
              </select>

            </div>
            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">
                Количество
              </label>
              <input
                  type="number"
                  className="form-control"
                  id="quantity"
                  name="quantity"
                  value={this.state.formData.quantity}
                  onChange={this.handleInputChange}
                  required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="supplyDate" className="form-label">
                Дата поставки
              </label>
              <input
                  type="date"
                  className="form-control"
                  id="supplyDate"
                  name="supplyDate"
                  value={this.state.formData.supplyDate}
                  onChange={this.handleInputChange}
                  required
              />
            </div>
            <button type="submit" className="btn btn-success w-100">
              {this.state.formData.id ? 'Обновить' : 'Создать'}
            </button>
          </form>
        </div>
    );
  }
}

export default SupplyForm;
