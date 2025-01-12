import React, {useState} from "react";
import {Link} from "react-router";
import "../../css/LeftNav.css";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

function LeftNav() {
    const [width, setWidth] = useState(200);
    const [activeKey, setActiveKey] = useState<string>("");
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
            document.querySelector(".resize-handle")?.classList.remove("active");
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
        document.querySelector(".resize-handle")?.classList.add("active");
    };

    const handleClick = (key: string) => {
        setActiveKey(key);
    };

    /*
    Links added here will show up in the LeftNav component.
    The KEY entry will be the route that we use in the "to" entry for the <Link> tag.
    The VALUE entry wil be used for the text that shows for the link.
     */
    const links = new Map<String, String>([
        ["/", "Home"],
        ["/add-product", "Add Product"],
        ["/user-list", "User List"],
        ["/wishlists", "Wish Lists"]
    ])

    return (
        <>
            <nav className="left-nav list-group" style={{width: `${width}px`}}>
                <div className="resize-handle" onMouseDown={handleMouseDown}>
                    <SwapHorizIcon className="resize-icon" onMouseDown={handleMouseDown} sx={{color: "white"}}/>
                </div>

                <div className={" left-nav-top-margin"}>
                    {
                        Array.from(links.entries()).map(([key, value]) => (
                            <Link className={`list-group-item ${activeKey === key ? "active": ""}`}
                                  to={key.toString()}
                                  key={key.toString()}
                                  onClick={() => handleClick(key.toString())}
                            >
                                {value.toString()}
                            </Link>
                        ))
                    }
                </div>
            </nav>
        </>
    );
}

export default LeftNav;
