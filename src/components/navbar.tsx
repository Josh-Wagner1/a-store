import React from "react";
import {useNavigate} from "react-router-dom";
import "../App.css";
import "./navbar.css";
import Button from "./button";

interface NavProps {
    cart?: number;
}

const NavBar: React.FC<NavProps> = ({cart=0}) => {
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <div className="left">
                <span className="material-symbols-outlined">slab_serif</span>
                <h2>-Store</h2>
            </div>

            <div className="centre">
                <Button className="navButton" label="Home" onClick={() => navigate("/")}/>
                <Button className="navButton" label="Products" onClick={() => navigate("/products")}/>
                <Button className="navButton" label="About" onClick={() => navigate("/about")}/>
                <Button className="navButton" label="Contact" onClick={() => navigate("/contact")}/>
            </div>
            
            <div className="right">
                <span className="material-symbols-outlined">shopping_cart</span>
                <h2>{cart}</h2>
                <h2>Cart</h2>
            </div>
        </div>
    );
}

export default NavBar;