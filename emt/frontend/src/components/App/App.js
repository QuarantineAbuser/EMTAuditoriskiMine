import './App.css';
import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import EShopService from "../../repository/eshopRepository";
import Header from "../Header/header";
import Manufacturers from "../Manufacturers/manufacturers";
import Products from "../Products/ProductList/products";
import Categories from "../Categories/categories";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            manufacturers: [],
            categories: [],
            products: []
        }
    }

    render() {
        return (
        <Router>
            <main>
                <Header/>
                <div className="container">
                    <Routes>
                        <Route path={'/manufacturers'} exact element={<Manufacturers manufacturers = {this.state.manufacturers}/>}/>
                        <Route path={'/products'} exact element={<Products products = {this.state.products}/>}/>
                        <Route path={'/categories'} exact element={<Categories categories = {this.state.categories}/>}/>
                        <Route path={'/'} element={<Navigate replace to='/products'/>}/>
                    </Routes>
                </div>
            </main>
        </Router>
        )
    }

    componentDidMount() {
        this.loadManufacturers();
        this.loadCategories();
        this.loadProducts();
    }

    loadManufacturers = () => {
        EShopService.fetchManufacturers()
            .then((data) => {
                this.setState({
                    manufacturers: data.data
                })
            })
    }

    loadCategories = () => {
        EShopService.fetchCategories()
            .then((data) => {
                this.setState({
                    categories: data.data
                })
            })
    }

    loadProducts = () => {
        EShopService.fetchProducts()
            .then((data) => {
                this.setState({
                    products: data.data
                })
            })
    }
}

export default App;
