// import Wish from "./Wish.tsx";
import "../../css/App.css";
import {useEffect, useState} from "react";

interface Wishlist {
    id: number;
    name: string;
}

interface props {
    wishLists: Wishlist[]
    onListSelected: (newType: number) => void;
}

export default function WishlistListComp({wishLists, onListSelected}: props) {
    const [selectedItemId, setSelectedItemId] = useState(1);

    /**
     * this is used to set the selectedItemId if there is one stored locally.
     * if we refresh the page while selecting something other than the default, we want to make sure it's selected after the refresh as well.
     */
    useEffect(() => {
        const selectedItemLocal = localStorage.getItem('selectedItemId');
        console.log('selectedItemLocal:', selectedItemLocal)
        if (selectedItemLocal) {
            setSelectedItemId(Number(selectedItemLocal))
        }
    }, []);

    const handleItemClick = (id: number) => {
        setSelectedItemId(id);
        onListSelected(id);
    };

    return (
        <>
            {wishLists.length === 0 ? (
                <p>No Items Found</p>
            ) : (
                <div>
                    <ul className="list-group left-wishlist">
                        {wishLists.map((wl) => (
                            <li
                                key={wl.id}
                                className={`list-group-item ${selectedItemId === wl.id ? 'active' : ''}`} //if we select something though, we want to highlight that one. else, nothing
                                onClick={() => handleItemClick(wl.id)}
                            >
                                {wl.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
}
