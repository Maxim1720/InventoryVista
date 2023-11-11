// SupplyCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import Getter from "../../logic/Getter";
import api from '../../env.json';
import Loading from "../utils/Loading";
import Error from "../utils/Error";

class SupplyCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        }
    }

    componentDidMount() {

        let product, supplier;

        Promise.all(
            [
                new Getter({url: api.api.baseUrl + "/suppliers"}).getById(this.props.supplyData.supplierId)
                    .then(resp=>supplier = {...resp.body}),
                new Getter({url: api.api.baseUrl + "/products"}).getById(this.props.supplyData.productId)
                    .then(resp=>product = {...resp.body})
            ]
        )
            .then(res=>{
                console.log(JSON.stringify(res));
                this.setState(prev=>({
                    ...prev,
                    product: {
                        ...product
                    },
                    supplier: {
                        ...supplier
                    }
                    ,isLoaded: true
                }), ()=>console.log(JSON.stringify(this.state)));
            })
            .catch(error=>this.setState({error}));
    }

    render() {

        if(!this.state.isLoaded){
            return <Loading />
        }
        else if(this.state.error){
            return <Error message={this.state.error.message}/>
        }

        const {supplyData, onDelete} = this.props;

        return (
            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">Поставка #{supplyData.id}</h5>
                    <p className="card-text">Поставщик: {this.state.supplier.name}</p>
                    <p className="card-text">Продукт: {this.state.product.name}</p>
                    <p className="card-text">Количество: {supplyData.quantity}</p>
                    <p className="card-text">Дата поставки: {new Date(supplyData.supplyDate).toLocaleDateString()}</p>

                    {/* Кнопка для удаления */}
                    <a className="btn btn-danger" onClick={() => onDelete(supplyData.id)}>
                        Удалить
                    </a>

                    {/* Кнопка для перехода на страницу редактирования */}
                    <Link to={`/supplies/${supplyData.id}/update`} className="btn btn-primary ms-2">
                        Редактировать
                    </Link>
                </div>
            </div>
        );
    }
}

export default SupplyCard;
