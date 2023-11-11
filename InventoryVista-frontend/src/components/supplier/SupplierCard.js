import React from "react";
import { Link } from "react-router-dom";

class SupplierCard extends React.Component {
    constructor(props) {
        super(props);
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
                        <span className="">Контактное лицо:</span>
                        <span className={"fw-bold"}>{this.props.item.contacts}</span>
                    </p>
                    {/* Другие атрибуты поставщика */}
                </div>
            </Link>
        );
    }
}

export default SupplierCard;
