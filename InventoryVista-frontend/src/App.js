import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import AboutPage from './pages/AboutPage';
import ProductsPage from "./pages/products/ProductsPage";
import ProductPageWrapper from "./pages/products/ProductPage";
import WareHousesPage from "./pages/wareHouse/WareHousesPage";
import ProductUpdater from "./components/product/ProductUpdater";
import ProductUpdaterWrapper from "./components/product/ProductUpdater";


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
                    <Route path="/products/:id" element={<ProductPageWrapper/>}/>
                    <Route path="/warehouses" element={<WareHousesPage/>}/>
                </Routes>
            </BrowserRouter>
        </>

    );
}

export default App;
