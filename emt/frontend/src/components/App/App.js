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
import ProductAdd from "../Products/ProductAdd/addProduct";
import ProductEdit from "../Products/ProductEdit/productEdit";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            manufacturers: [],
            categories: [],
            products: [],
            selectedProduct: {}
        }
    }

    render() {
        return (
            <Router>
                <Header/>
                <main>
                    <div className="container">
                        <Routes>
                            <Route path={'/categories'} exact
                                   element={<Categories categories={this.state.categories}/>}/>
                            <Route path={'/manufacturers'} exact
                                   element={<Manufacturers manufacturers={this.state.manufacturers}/>}/>
                            <Route path={'/products/edit/:id'} exact
                                   element={<ProductEdit manufacturers={this.state.manufacturers}
                                                         categories={this.state.categories}
                                                         onEditProduct={this.editProduct}
                                                         selectedProduct={this.state.selectedProduct}/>}/>
                            <Route path={'/products/add'} exact
                                   element={<ProductAdd manufacturers={this.state.manufacturers}
                                                        categories={this.state.categories}
                                                        onAddProduct={this.addProduct}/>}/>
                            <Route path={'/products'} exact
                                   element={<Products products={this.state.products}
                                                      onDelete={this.deleteProduct}
                                                      onEdit={this.getProduct}/>}/>
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
    deleteProduct = (id) => {
        EShopService.deleteProduct(id)
            .then(() => {
                this.loadProducts();
            })
    }
    addProduct = (name, price, quantity, category, manufacturer) => {
        EShopService.addProduct(name, price, quantity, category, manufacturer)
            .then(() => {
                this.loadProducts();
            })
    }
    editProduct = (id, name, price, quantity, category, manufacturer) => {
        EShopService.editProduct(id, name, price, quantity, category, manufacturer)
            .then(() => {
                this.loadProducts();
            })
    }
    getProduct = (id) => {
        EShopService.getProduct(id)
            .then((data) => {
                this.setState({
                    selectedProduct: data.data
                })
            })
    }
}

export default App;
