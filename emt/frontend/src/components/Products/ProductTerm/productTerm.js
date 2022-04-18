import React from "react";
import {Link} from "react-router-dom";

const productTerm = (props) => {
    return (
        <tr>
            <td>{props.product.name}</td>
            <td>{props.product.price}</td>
            <td>{props.product.quantity}</td>
            <td>{props.product.category.name}</td>
            <td>{props.product.manufacturer.name}</td>
            <td>
                <a title={"Delete"} className="btn btn-sm btn-danger"
                      onClick={() => props.onDelete(props.product.id)}>Delete</a>
                <a title={"Edit"} className="btn btn-sm btn-primary ml-2"
                   href={`products/edit/${props.product.id}`}
                   onClick={() => props.onEdit(props.product.id)}>Edit</a>
                <Link className="btn btn-sm btn-info ml-2"
                      onClick={() => props.onEdit(props.product.id)}
                      to={`products/edit/${props.product.id}`}>Edit</Link>
            </td>
        </tr>
    )
}

export default productTerm;