import React from "react";
import { Link } from "react-router";
import "../../App.css";

function LeftNav() {
    return (
        <nav className="left-nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/wish-list">Wish List</Link></li>
                <li><Link to="/user-list">User List</Link></li>
            </ul>
        </nav>
    );
}

export default LeftNav;