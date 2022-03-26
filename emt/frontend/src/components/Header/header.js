import React from "react";
import {Link} from "react-router-dom";

const header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark navbar-fixed bg-dark">
                <Link className="navbar-brand" to={"/products"}>E-Shop Application</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link active" to={"/products"}>Products</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link active" to={"/categories"}>Categories</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link active" to={"/manufacturers"}>Manufacturers</Link>
                        </li>
                    </ul>
                </div>

                <form className="form-inline mt-2 mt-md-0 ml-3">
                    <Link className="btn btn-outline-info my-2 my-sm-0" to={"/login"}>Login</Link>
                </form>
            </nav>
        </header>
    )
}

export default header;