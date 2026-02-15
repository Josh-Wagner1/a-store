import React from "react";
import "../App.css";
import "./navbar.css";
import Button from "./button";

interface NavProps {
    cart?: number;
}

const handleClick = () => {
    alert("Button clicked!");
};

const NavBar: React.FC<NavProps> = ({cart=0}) => {
    return (
        <div className="navbar">
            <div className="left">
                <span className="material-symbols-outlined">slab_serif</span>
                <h2>-Store</h2>
            </div>

            <div className="centre">
                <Button className="navButton" label="Home" onClick={handleClick}/>
                <Button className="navButton" label="Products" onClick={handleClick}/>
                <Button className="navButton" label="About" onClick={handleClick}/>
                <Button className="navButton" label="Contact" onClick={handleClick}/>
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