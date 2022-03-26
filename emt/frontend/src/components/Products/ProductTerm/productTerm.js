import React from "react";

const productTerm = (props) => {
    return (
        <tr>
            <td>{props.product.name}</td>
            <td>{props.product.price}</td>
            <td>{props.product.quantity}</td>
            <td>{props.product.category.name}</td>
            <td>{props.product.manufacturer.name}</td>
        </tr>
    )
}

export default productTerm;