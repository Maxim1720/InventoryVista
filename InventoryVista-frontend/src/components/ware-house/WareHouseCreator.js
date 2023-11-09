import React, {Component} from 'react';
import apiConfig from '../../env.json';
import Saver from "../../logic/Saver";
class WareHouseCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: ''
        };
    }

    handleLocationChange = (event) => {
        this.setState({ location: event.target.value });
    };

    handleSubmit = (event) => {
        // event.preventDefault();

        // Здесь вы можете использовать запрос к вашему API для создания склада
        // Например, используя fetch или axios

        const saver = new Saver({
            url: apiConfig.api.baseUrl + '/ware-houses'
        });

        saver.save({
            location: this.state.location
        })
            .then((data) => {
                // Перенаправление на страницу с информацией о новом складе
                this.props.history.push(`/warehouses/${data.body.id}`);
            })
            .catch((error) => {
                console.error('Error:', error);
                // Обработка ошибок
            });
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="card mt-5">
                            <div className="card-body">
                                <h2 className="card-title text-center">Create Warehouse</h2>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="location" className="form-label">
                                            Location:
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="location"
                                            required={true}
                                            value={this.state.location}
                                            onChange={this.handleLocationChange}
                                        />
                                    </div>
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary">
                                            Создать
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WareHouseCreator;
