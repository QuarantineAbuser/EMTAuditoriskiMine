import React from "react";
import {useNavigate} from "react-router-dom";

const ProductEdit = (props) => {

    const navigate = useNavigate();
    const [formData, updateFormData] = React.useState({
        name: "",
        price: 0,
        quantity: 0,
        category: 0,
        manufacturer: 0
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name !== "" ? formData.name : props.selectedProduct.name;
        const price = formData.price !== 0 ? formData.price : props.selectedProduct.price;
        const quantity = formData.quantity !== 0 ? formData.quantity : props.selectedProduct.quantity;
        const category = formData.category !== 0 ? formData.category : props.selectedProduct.category.id;
        const manufacturer = formData.manufacturer !== 0 ? formData.manufacturer : props.selectedProduct.manufacturer.id;

        props.onEditProduct(props.selectedProduct.id, name, price, quantity, category, manufacturer);
        navigate("/products");
    }

    return (
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Product name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder={props.selectedProduct.name}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input type="text"
                               className="form-control"
                               id="price"
                               name="price"
                               placeholder={props.selectedProduct.price}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="quantity">Quantity</label>
                        <input type="text"
                               className="form-control"
                               id="quantity"
                               name="quantity"
                               placeholder={props.selectedProduct.quantity}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" className="form-control" onChange={handleChange}>
                            {props.categories.map((category) => {
                                if(props.selectedProduct.category !== undefined &&
                                    props.selectedProduct.category.id === category.id)
                                    return <option selected={props.selectedProduct.category.id} value={category.id}>{category.name}</option>
                                else
                                    return <option value={category.id}>{category.name}</option>
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Manufacturer</label>
                        <select name="manufacturer" className="form-control" onChange={handleChange}>
                            {props.manufacturers.map((manufacturer) =>{
                                if(props.selectedProduct.manufacturer !== undefined &&
                                    props.selectedProduct.manufacturer.id === manufacturer.id)
                                    return <option selected={props.selectedProduct.manufacturer.id} value={manufacturer.id}>{manufacturer.name}</option>
                                else
                                    return <option value={manufacturer.id}>{manufacturer.name}</option>
                            })}
                        </select>
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ProductEdit;