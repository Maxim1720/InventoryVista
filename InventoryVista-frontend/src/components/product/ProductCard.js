import React from "react";
import {Link} from "react-router-dom";

class ProductCard extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Link className="card-body
            d-flex flex-column
            justify-content-between
            text-wrap
            text-decoration-none
            "
                  to={String(this.props.item.id)}
            >
                <div>
                    <h3 className="card-title text-wrap text-break">{this.props.item.name}</h3>
                </div>
                <div>
                    <p className="card-text">
                        <span className="">Количество:</span>
                        <span className={"fw-bold"}>{this.props.item.quantity}</span>
                    </p>
                    <p className="card-text">{this.#getDateExpiration(this.props.item.expirationDate)}</p>
                </div>
            </Link>
        );
    }

    #getDateExpiration(date) {
        return (
            <span className={
                new Date(Date.parse(date) - Date.now()).getDate() <= 7
                    ? "text-danger"
                    : "text-success"
            }>
                {new Date(Date.parse(date)).toDateString()}
            </span>
        );

    }
}

export default ProductCard;