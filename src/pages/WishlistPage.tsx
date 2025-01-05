import LeftNav from "../components/Navigation/leftNav.tsx";
import ListOfWishlistComp from "../components/Product/ListOfWishlistComp.tsx";
import "../css/App.css";
import "../css/LeftNav.css";
import "../css/WishCard.css"
import {useEffect, useState} from "react";
import {IWish} from "../components/Product/WishComp.tsx";
import ListOfWishComp from "../components/Product/ListOfWishComp.tsx";

interface Wishlist {
    id: number;
    name: string;
    wishResDtoList: IWish[];
}

export default function WishlistPag() {
    const [wishLists, setWishlists] = useState<Wishlist[]>([]);
    const [selectedItemId, setselectedItemId] = useState<number>(0);
    const [wishesToPass, setWishesToPass] = useState<any[]>([]);

    const userId = "1"; //TODO - Example user ID, replace with actual variable

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/wish-list/user/${userId}`, {method: "GET"});
                const data = await response.json();
                getSelectedId(data)
                // setWishlists(prevState => [...prevState, data])
                setWishlists(data)
                return data;
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData()

    }, []);

    useEffect(() => {
        wishLists.map((wl) => {
            if (wl.id === selectedItemId) {
                setWishesToPass(wl.wishResDtoList)
            }
        })
    }, [wishLists])

    function getSelectedId(wishLists:Wishlist[]){
        const selectedId = localStorage.getItem('selectedItemId');
        if (selectedId) setselectedItemId(Number(selectedId))
        else setselectedItemId(wishLists[0].id)

        return selectedItemId;
    }

    function displayWishes(id: number){
        wishLists.map((wl) => {
            if (wl.id === id) setWishesToPass(wl.wishResDtoList)
        })
    }

    const handleWishListClicked = (id: number) => {
        setselectedItemId(id);
        displayWishes(id);
        localStorage.setItem("selectedItemId", id.toString());
    };

    const handleWishClicked = (id: number) => {
        console.log('wishId ', id)
    }

    return (
        <>
            <div className="app-container">
                <LeftNav/>
                <div className="left-wishlist">
                    <ListOfWishlistComp wishLists={wishLists} onListSelected={handleWishListClicked}/>
                </div>
                <div >
                    <ListOfWishComp wishes={wishesToPass} onListSelected={handleWishClicked}/>
                </div>
            </div>
        </>
    );
}

