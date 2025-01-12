import LeftNav from "../components/Navigation/leftNav.tsx";
import ListOfWishlistComp from "../components/Wishlists/ListOfWishlistComp.tsx";
import "../css/App.css";
import "../css/LeftNav.css";
import "../css/WishCard.css";
import {useEffect, useState} from "react";
import {IWish} from "../components/WishlistItems/WishComp.tsx";
import ListOfWishComp from "../components/WishlistItems/ListOfWishComp.tsx";

interface Wishlist {
    id: number;
    name: string;
    wishResDtoList: IWish[];
}

export default function WishlistPage() {
    const [isSlideOut, setIsSlideOut] = useState<boolean>(false);
    const [wishLists, setWishlists] = useState<Wishlist[]>([]);
    const [selectedItemId, setSelectedItemId] = useState<number>(0);
    const [wishesToPass, setWishesToPass] = useState<any[]>([]);

    const userId = "1"; //TODO - Example user ID, replace with actual variable

    useEffect(() => {
        fetchData().then(() => {
            if(!isSlideOut){
                setIsSlideOut(true);
            }

        })
    }, [isSlideOut]);

    useEffect(() => {
        wishLists.map((wl) => {
            if (wl.id === selectedItemId) {
                setWishesToPass(wl.wishResDtoList)
            }
        })
    }, [wishLists])

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:8080/wish-list/user/${userId}`, {method: "GET"});
            const data = await response.json();
            getSelectedId(data)
            setWishlists(data)
            return data;
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleWishlistClicked = (id: number) => {
        setSelectedItemId(id);
        displayWishes(id);
        localStorage.setItem("selectedItemId", id.toString());
    };

    function getSelectedId(wishLists: Wishlist[]) {
        const selectedId = localStorage.getItem('selectedItemId');
        if (selectedId) setSelectedItemId(Number(selectedId))
        else setSelectedItemId(wishLists[0].id)

        return selectedItemId;
    }

    function displayWishes(id: number) {
        wishLists.map((wl) => {
            if (wl.id === id) setWishesToPass(wl.wishResDtoList)
        })
    }

    function removeDeleted(id: number){
        const wishlistsWithRemovedId = wishLists.filter((wl) => wl.id !== id);
        setWishlists(wishlistsWithRemovedId);
    }

    return (
        <>
            <div className="app-container">
                <LeftNav/>
                <div className={`left-wishlist ${isSlideOut ? "slide-out" : ""}`}>
                    <ListOfWishlistComp wishLists={wishLists} onListSelected={handleWishlistClicked} onDeletedWishlist={removeDeleted}/>
                </div>
                <div id={"list-of-wishes"} className={"list-of-wishes"}>
                    <ListOfWishComp wishes={wishesToPass}/>
                </div>
            </div>
        </>
    );
}

