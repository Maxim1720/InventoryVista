// SuppliesPage.js
import React from 'react';
import AllSupplies from './AllSupplies';
import SupplyCreator from './SupplyCreator';
import PageWithHeaderAndFooter from "../PageWithHeaderAndFooter";

class SuppliesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'all', // или 'create' в зависимости от выбранной вкладки
    };
  }

  changeTab = (tab) => {
    this.setState({ currentTab: tab });
  };

  render() {
    return (

        <PageWithHeaderAndFooter content={
          <div className="h-100 d-flex flex-column">
            {/* Навигация по вкладкам */}
            <ul className="nav nav-tabs nav-fill">
              <li className="nav-item">
                <a
                    className={`nav-link ${this.state.currentTab === 'all' ? 'active' : ''}`}
                    data-bs-toggle="tab"
                    href="#all"
                    onClick={() => this.changeTab('all')}
                >
                  Все поставки
                </a>
              </li>
              <li className="nav-item">
                <a
                    className={`nav-link ${this.state.currentTab === 'create' ? 'active' : ''}`}
                    data-bs-toggle="tab"
                    href="#create"
                    onClick={() => this.changeTab('create')}
                >
                  Создать поставку
                </a>
              </li>
            </ul>

            {/* Содержимое в зависимости от выбранной вкладки */}
            <div className="tab-content h-100">
              <div className={`h-100 tab-pane ${this.state.currentTab === 'all' ? 'active' : ''}`} id="all">
                <AllSupplies/>
              </div>
              <div className={`h-100 tab-pane ${this.state.currentTab === 'create' ? 'active' : ''}`} id="create">
                <SupplyCreator/>
              </div>
            </div>
          </div>
        }/>
    );
  }
}

export default SuppliesPage;
