// import Wish from "./Wish.tsx";
import "../../css/App.css";
import "../../css/WishlistCard.css"
import {useEffect, useState} from "react";
import WishlistComp, {IWishlist} from "./WishlistComp.tsx";


interface props {
    wishLists: IWishlist[]
    onListSelected: (newType: number) => void;
}

export default function ListOfWishlistComp({wishLists, onListSelected}: props) {
    const [selectedItemId, setSelectedItemId] = useState(1);

    /**
     * this is used to set the selectedItemId if there is one stored locally.
     * if we refresh the page while selecting something other than the default, we want to make sure it's selected after the refresh as well.
     */
    useEffect(() => {
        const selectedItemLocal = localStorage.getItem('selectedItemId');
        console.log('selectedItemLocal:', selectedItemLocal)
        if (selectedItemLocal) setSelectedItemId(Number(selectedItemLocal))
    }, []);

    const handleItemClick = (id: number) => {
        setSelectedItemId(id);
        onListSelected(id);
    };

    return (
        <>
            {wishLists.length === 0 ? (
                    <p>No Items Found</p>
                ) :
                (
                    <>
                    <div className={"list-group wishlist-list"}>
                        {wishLists.map((wl) => (
                            <a key={wl.id}
                                className={`list-group-item ${selectedItemId === wl.id ? 'active' : ''}`}>
                                <WishlistComp wishlist={wl} onListSelected={handleItemClick}/>
                            </a>
                        ))}
                    </div>
                    {/*<div>*/}
                    {/*    <ul className="list-group left-wishlist">*/}
                    {/*        {wishLists.map((wl) => (*/}
                    {/*            <li key={wl.id}*/}
                    {/*                className={`wishlist-comp list-group-item ${selectedItemId === wl.id ? 'active' : ''}`}>*/}
                    {/*                <WishlistComp wishlist={wl} onListSelected={handleItemClick}/>*/}
                    {/*            </li>*/}
                    {/*        ))}*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                    </>
                )}
        </>
    );
}
