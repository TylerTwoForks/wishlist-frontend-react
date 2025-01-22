import ListOfWishlistComp from "../components/Wishlists/ListOfWishlistComp.tsx";
import "../css/App.css";
import "../css/LeftNav.css";
import "../css/WishCard.css";
import {useEffect, useState} from "react";
import {IWish} from "../components/WishlistItems/WishComp.tsx";
import ListOfWishComp from "../components/WishlistItems/ListOfWishComp.tsx";
import AddWish from "../components/WishlistItems/AddWish.tsx";

interface Wishlist {
    id: number;
    name: string;
    wishResDtoList: IWish[];
}

export default function WishlistPage() {
    const [isSlideOut, setIsSlideOut] = useState<boolean>(false);
    const [wishLists, setWishlists] = useState<Wishlist[]>([]);
    const [selectedWishlist, setSelectedWishlist] = useState<number>(0);
    const [wishesToDisplay, setWishesToDisplay] = useState<any[]>([]);

    const userId = "4"; //TODO - Example user ID, replace with actual variable

    useEffect(() => {
        fetchData().then(() => {
            if(!isSlideOut){
                setIsSlideOut(true);
            }
        })
    }, []);

    useEffect(() => {
        if(wishLists.length === 1) {
            handleWishlistClicked(wishLists[0].id)
        }else{
            wishLists.map((wl) => {
                if (wl.id === selectedWishlist) {
                    setWishesToDisplay(wl.wishResDtoList)
                }
            })
        }

    }, [wishLists])

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:8080/wish-list/user/${userId}`, {method: "GET"});
            const data = await response.json();
            getSelectedIdForRefresh(data)
            setWishlists(data)
            return data;
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleWishlistClicked = (id: number) => {
        setSelectedWishlist(id);
        displayWishes(id);
        localStorage.setItem("selectedWishlistId", id.toString());
    };

    function getSelectedIdForRefresh(wishLists: Wishlist[]) {
        const selectedId = localStorage.getItem("selectedWishlistId");
        if (selectedId) setSelectedWishlist(Number(selectedId))
        else setSelectedWishlist(wishLists[0].id)

        return selectedWishlist;
    }

    function displayWishes(id: number) {
        wishLists.map((wl) => {
            if (wl.id === id) setWishesToDisplay(wl.wishResDtoList)
        })
    }

    function removeDeletedWishlist(id: number){
        const wishlistsWithRemovedId = wishLists.filter((wl) => wl.id !== id);
        setWishlists(wishlistsWithRemovedId);
    }

    function removeDeletedWish(id: number){
        const wishesWithRemovedId = wishesToDisplay.filter((w) => w.id !== id);
        setWishesToDisplay(wishesWithRemovedId);
    }

    return (
        <>
            <div className="app-container">
                <div className={`left-wishlist ${isSlideOut ? "slide-out" : ""}`}>
                    <ListOfWishlistComp wishLists={wishLists} onListSelected={handleWishlistClicked}
                                        onDeletedWishlist={removeDeletedWishlist}/>
                </div>
                <div id={"list-of-wishes"} className={"list-of-wishes"}>
                    <AddWish wishlistId={selectedWishlist}/>
                    <ListOfWishComp wishes={wishesToDisplay} handleWishDeleted={removeDeletedWish}/>
                </div>

            </div>
        </>
    );
}

