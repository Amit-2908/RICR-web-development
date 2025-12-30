import React from "react";
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <div className=" d-flex justify-content-between align-items-center p-2 bg-primary position-sticky top-0 ">
                <h3 className="bg-primary text-light ms-5">Makeup Store</h3>
                <div className="d-flex gap-3 bg-primary me-5">
                    <Link to={"/"} className="text-decoration-none text-light bg-primary">Home</Link>
                    <Link to={"/about"} className="text-decoration-none text-light bg-primary">About</Link>
                    <Link to={"/product"} className="text-decoration-none text-light bg-primary">Product</Link>
                    <Link to={"/contact"} className="text-decoration-none text-light bg-primary">Contact</Link>
                </div>
            </div>
        </>
    )
}
export default Header;
