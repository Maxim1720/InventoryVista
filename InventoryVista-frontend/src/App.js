import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import AboutPage from './pages/AboutPage';
import ProductsPage from "./pages/products/ProductsPage";
import ProductPageWrapper from "./pages/products/ProductPage";
import WareHousesPage from "./pages/wareHouse/WareHousesPage";
import ProductUpdaterWrapper from "./components/product/ProductUpdater";
import ExpirationHistoryWrapper from "./components/expiration-date-story/ExpirationHistory";
import SuppliersTabs from "./components/supplier/SuppliersTabs";
import SupplierUpdaterWrapper from "./components/supplier/SupplierUpdater";
import SupplyUpdaterWrapper from "./components/supplies/SupplyUpdater";
import SuppliesPage from "./components/supplies/SuppliesPage";


function App() {
    return (

        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/registration" element={<RegistrationPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/products" element={<ProductsPage/>}></Route>
                    <Route path="/products/:id/update" element={<ProductUpdaterWrapper/>}/>
                    <Route path="/products/:id/history" element={<ExpirationHistoryWrapper/>}/>
                    <Route path="/products/:id" element={<ProductPageWrapper/>}/>
                    <Route path="/warehouses" element={<WareHousesPage/>}/>
                    <Route path="/suppliers" element={<SuppliersTabs/>}/>
                    <Route path="/suppliers/:id/update" element={<SupplierUpdaterWrapper/>}/>

                    <Route path="/supplies/:id/update" element={<SupplyUpdaterWrapper/>}/>
                    <Route path="/supplies/" element={<SuppliesPage/>}/>


                </Routes>
            </BrowserRouter>
        </>

    );
}

export default App;
