import LeftNav from "../components/Navigation/leftNav.tsx";
import WishlistListComp from "../components/Product/WishlistListComp.tsx";
import "../css/App.css";
import "../css/LeftNav.css";
import {useEffect, useState} from "react";
import AddWish from "../components/Product/AddWish.tsx";
import WishComp from "../components/Product/WishComp.tsx";

interface Wishlist {
    id: number;
    name: string;
    wishResDtoList: Wish[];
}

interface Wish {
    externalUrl: string;
    notes: string;
    qtyRequested: number;
    purchased: boolean;
}

export default function WishlistPag() {
    const [wishLists, setWishlists] = useState<Wishlist[]>([]);
    const [selectedItemId, setSelectedItemId] = useState<number>(0);
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
        if (selectedId) setSelectedItemId(Number(selectedId))
        else setSelectedItemId(wishLists[0].id)

        return selectedItemId;
    }

    function displayWishes(id: number){
        wishLists.map((wl) => {
            if (wl.id === id) setWishesToPass(wl.wishResDtoList)
        })
    }

    const handleItemClick = (id: number) => {
        setSelectedItemId(id);
        displayWishes(id);
        localStorage.setItem("selectedItemId", id.toString());
    };

    return (
        <>
            <div className="app-container">
                <LeftNav/>
                <div className="left-wishlist">
                    <WishlistListComp wishLists={wishLists} onListSelected={handleItemClick}/>
                </div>
                <div className="right-content">
                    <>
                        {
                            wishesToPass.length === 0 ? (
                            <>
                                <p>No Items Found</p>
                                <div><AddWish wishlistId={selectedItemId}/></div>
                            </>
                        ) : (
                            <div>
                                <ul className="list-group left-wishlist" key={wishesToPass.length}>
                                    {wishesToPass.map((wish) => (
                                        <li key={wish.id} className={`list-group-item`}>
                                            <WishComp wish={wish} key={wish.id + 1}/>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </>
                </div>
            </div>
        </>
    );
}

