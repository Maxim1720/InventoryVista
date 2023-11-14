import React from "react";
import { Link } from "react-router-dom";
import Remover from "../../logic/Remover";
import config from '../../env.json';

class SupplierCard extends React.Component {
    constructor(props) {
        super(props);
    }

    onRemove = ()=> {
        new Remover({url: config.api.baseUrl + "/suppliers"})
            .removeById(this.props.item.id)
            .then(resp => {
                console.log(JSON.stringify(resp));
            })
            .catch(error => this.setState({error}));
    }

    render() {
        return (
            <Link
                className="card-body d-flex flex-column justify-content-between text-wrap text-decoration-none"
                to={String(this.props.item.id)+'/update'}
            >
                <div>
                    <h3 className="card-title text-wrap text-break">{this.props.item.name}</h3>
                </div>
                <div>
                    <p className="card-text">
                        <span className="">Контакты: </span>
                        <span className={"fw-bold"}>{this.props.item.contacts}</span>
                    </p>
                    <div className="btn-group w-100">
                        <Link className="btn btn-danger" to="/suppliers" onClick={()=>{
                            this.onRemove();
                            window.location.reload();
                        }}>
                            Удалить
                        </Link>
                        <Link className="btn btn-primary" to={this.props.item.id+"/update"}>
                            Редактировать
                        </Link>
                    </div>

                </div>
            </Link>
        );
    }
}

export default SupplierCard;
