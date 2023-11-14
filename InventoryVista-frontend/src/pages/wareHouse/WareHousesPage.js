import React from "react";
import PageWithHeaderAndFooter from "../../components/PageWithHeaderAndFooter";
import {Link} from "react-router-dom";
import WareHouseCreatePage from "../../components/ware-house/WareHouseCreator";
import WareHouses from "../../components/ware-house/WareHouses";

class WareHousesPage extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <PageWithHeaderAndFooter content={
                <div className="h-100 d-flex flex-column">
                    <ul className="nav nav-tabs nav-fill mt-2 container nav-justified">
                        <li className="nav-item">
                            <Link className="nav-link bg-primary active text-light" to="#all-wareHouses" data-bs-toggle="tab">
                                Все
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link bg-success text-light" to="#create-wareHouse" data-bs-toggle="tab">
                                Добавить
                            </Link>
                        </li>
                    </ul>

                    <div className="tab-content h-100 bg-body-secondary">
                        <div className="tab-pane active h-100" id="all-wareHouses">
                            <WareHouses />
                        </div>
                        <div className="tab-pane fade  h-100" id="create-wareHouse">
                            <WareHouseCreatePage/>
                        </div>
                    </div>
                </div>
            }/>
        );
    }
}

export default WareHousesPage;