import React from "react";
import {Link} from "react-router-dom";

class ProductCard extends React.Component{
    constructor(props) {
        super(props);
        this.item = {
            id: this.props.item.id,
            name: this.props.item.name,
            description: this.props.item.description,
            quantity: this.props.item.quantity,
            expirationDate: this.props.item.expirationDate
        };
    }

    render() {
        return(
            <Link className="card-body
            d-flex flex-column
            justify-content-between
            text-wrap
            text-decoration-none
            "
                  to={String(this.item.id)}
            >
                <div>
                    <h3 className="card-title text-wrap text-break">{this.item.name}</h3>
                </div>
                <div>
                    <p className="card-text">
                        <span className="">Количество:</span>
                        <span className={"fw-bold"}>{this.item.quantity}</span>
                    </p>
                    <p className="card-text">{this.#getDateExpiration(this.item.expirationDate)}</p>
                </div>
            </Link>
        );
    }

    #getDateExpiration(date) {
        return (
            <span className={
                Date.parse(date) - Date.now() <= 7
                    ? "text-danger"
                    : "text-success"
            }>
                {new Date(Date.parse(date)).toDateString()}
            </span>
        );

    }
}

export default ProductCard;