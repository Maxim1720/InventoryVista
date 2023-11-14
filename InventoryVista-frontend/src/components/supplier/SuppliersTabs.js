import React from "react";
import PageWithHeaderAndFooter from "../PageWithHeaderAndFooter";
import AllSuppliers from "./AllSuppliers";
import SupplierCreator from "./SupplierCreator";
class SuppliersTabs extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            currentTab: 'all',  // Начальная вкладка - "Все"
        };
    }

    changeTab = (event) => {
        const tabId = event.target.id;
        this.setState({ currentTab: tabId });
    };

    render() {
        return (

            <PageWithHeaderAndFooter content={
                <div className="h-100 d-flex flex-column">
                    <ul className="nav nav-tabs nav-fill">
                        <li className="nav-item">
                            <a
                                className={`nav-link ${this.state.currentTab === 'all' ? 'active bg-primary-subtle' : ''}`}
                                data-bs-toggle="tab"
                                href="#suppliers"
                                onClick={this.changeTab}
                                id="all"
                            >
                                Все
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className={`nav-link ${this.state.currentTab === 'create' ? 'active bg-success-subtle' : ''}`}
                                data-bs-toggle="tab"
                                href="#create"
                                onClick={this.changeTab}
                                id="create-tab"
                            >
                                Создать
                            </a>
                        </li>
                    </ul>

                    <div className="tab-content h-100">
                        <div className={`tab-pane ${this.state.currentTab === 'all' ? 'active bg-primary-subtle' : ''} h-100`}
                             id="suppliers">
                            <AllSuppliers kek={this.state.currentTab} />
                        </div>
                        <div
                            className={`tab-pane fade ${this.state.currentTab === 'create' ? 'active bg-success-subtle' : ''} h-100`}
                            id="create">
                            <SupplierCreator kek={this.state.currentTab} />
                        </div>
                    </div>
                </div>
            }/>
        );
    }
}

export default SuppliersTabs;