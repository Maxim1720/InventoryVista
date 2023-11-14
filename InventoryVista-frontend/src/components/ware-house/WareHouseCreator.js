import React, {Component} from 'react';
import apiConfig from '../../env.json';
import Saver from "../../logic/Saver";
import Error from "../utils/Error";
import WareHousesPage from "../../pages/wareHouse/WareHousesPage";
import WareHouseForm from "./WareHouseForm";
class WareHouseCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData:{

            }
        };
    }

    handleOnChange = (event) => {
        this.setState(prev=>({
            ...prev,
            formData:{
                ...prev.formData,
                [event.target.name]: event.target.value
            },
        }), ()=>{
            console.log(JSON.stringify(this.state));
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const saver = new Saver({
            url: apiConfig.api.baseUrl + '/ware-houses'
        });

        saver.save({...this.state.formData})
            .then((data) => {
                // Перенаправление на страницу с информацией о новом складе
                // this.props.history.push(`/warehouses/${data.body.id}`);
                window.location.replace("/warehouses");
            })
            .catch((error) => {
                this.setState({
                    error
                })
            });
    };

    onSubmit = (data)=>{
        const saver = new Saver({
            url: apiConfig.api.baseUrl + '/ware-houses'
        });

        saver.save({...data})
            .then((data) => {
                // Перенаправление на страницу с информацией о новом складе
                // this.props.history.push(`/warehouses/${data.body.id}`);
                window.location.replace("/warehouses");
            })
            .catch((error) => {
                this.setState({
                    error
                })
            });
    }

    render() {

        return (
            <div className="container">
                {this.state.error
                    ?(
                        <Error message={this.state.error.message}/>
                    )
                    :<></>
                }
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="card mt-5">
                            <div className="card-body">
                                <h2 className="card-title text-center">Создайте склад</h2>
                                <WareHouseForm onSubmit={this.onSubmit}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WareHouseCreator;
