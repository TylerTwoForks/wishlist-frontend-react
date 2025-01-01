import React, { useState } from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router";
import "../../css/LeftNav.css";
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import AppRoutes from "../../Routes.tsx";
import AddProduct from "../Product/AddWish.tsx";
import WishList from "../Product/WishList.tsx";
import UserList from "../User/UserList.tsx";

function LeftNav() {
    const [width, setWidth] = useState(200);
    const minWidth = 150; // Set the minimum width

    const handleMouseDown = (e: React.MouseEvent) => {
        const startX = e.clientX;
        const startWidth = width;

        const handleMouseMove = (e: MouseEvent) => {
            const newWidth = Math.max(minWidth, startWidth + (e.clientX - startX));
            setWidth(newWidth);
        };

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
            document.querySelector('.resize-handle')?.classList.remove('active');
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
        document.querySelector('.resize-handle')?.classList.add('active');
    };

    return (
        <>
            <nav className="left-nav" style={{width: `${width}px`}}>
                <SwapHorizIcon className="resize-icon" onMouseDown={handleMouseDown}/>
                <div className="resize-handle" onMouseDown={handleMouseDown}></div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/add-product">Add Product</Link></li>
                    <li><Link to="/wish-list">Wish List</Link></li>
                    <li><Link to="/user-list">User List</Link></li>
                    <li><Link to={"/wishlists"}>Wish List Page</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default LeftNav;