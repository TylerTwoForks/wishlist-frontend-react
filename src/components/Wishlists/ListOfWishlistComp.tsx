// import Wish from "./Wish.tsx";
import "../../css/App.css";
import "../../css/WishlistCard.css"
import {useEffect, useState} from "react";
import WishlistComp, {IWishlist} from "./WishlistComp.tsx";
import {AddWishlistButton} from "./AddWishlistButton.tsx";


interface props {
    wishLists: IWishlist[]
    onListSelected: (newType: number) => void;
    onDeletedWishlist: (newType: number) => void;
}

export default function ListOfWishlistComp({wishLists, onListSelected, onDeletedWishlist}: props) {
    const [selectedWishlistId, setSelectedWishlistId] = useState<number>(0);
    /**
     * this is used to set the selectedWishlistId if there is one stored locally.
     * if we refresh the page while selecting something other than the default, we want to make sure it's selected after the refresh as well.
     */
    useEffect(() => {
        const selectedItemLocal = localStorage.getItem('selectedWishlistId');
        if (selectedItemLocal) setSelectedWishlistId(Number(selectedItemLocal))
    }, []);

    const handleItemClick = (id: number) => {
        setSelectedWishlistId(id);
        onListSelected(id);
    };

    const handleWishlistDeleted = (id: number)=> {
        onDeletedWishlist(id);
        setSelectedWishlistId(wishLists[0]?.id);
    }

    return (
        <>
            <>
                <AddWishlistButton/>
                <div className={"wishlist-list list-group"}>
                    {wishLists.map((wl) => (
                        <WishlistComp wishlist={wl}
                                      onListSelected={handleItemClick}
                                      selected={selectedWishlistId}
                                      key={wl.id}
                                      onDeletedWishlist={handleWishlistDeleted}
                        />
                    ))}
                </div>
            </>
        </>
    );
}
