import LeftNav from "../components/Navigation/leftNav.tsx";
import WishlistListComp from "../components/Product/WishlistListComp.tsx";
import "../css/App.css";
import "../css/LeftNav.css";
import React, {useEffect, useState} from "react";
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

const WishlistPage: React.FC = () => {
    const [wishLists, setWishlists] = useState<Wishlist[]>([]);
    // const [selectedItemId, setSelectedItemId] = useState<number>();
    const [wishesToPass, setWishesToPass] = useState<any[]>([]);

    let counter = 0;

    let selectedItemId = 0;

    const userId = "1"; //TODO - Example user ID, replace with actual variable

    useEffect(() => {
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

        fetchData()

    }, []);

    function getSelectedId(wishLists:Wishlist[]){
        const selectedId = localStorage.getItem('selectedItemId');
        if (selectedId) selectedItemId = Number(selectedId)
        else selectedItemId = wishLists[0].id

        return selectedItemId;
    }

    // useEffect(() => {
    //     wishLists.map((wl) => {
    //         if(wl.id === selectedItemId){
    //             console.log("gotHere ", wl.wishResDtoList)
    //             setWishesToPass(wl.wishResDtoList)
    //         }
    //     } )
    //     // for(const wl of wishLists){
    //     //     console.log("wishList ", wl)
    //     //     if(wl.id === selectedItemId){
    //     //         console.log("gotHere ", wl.wishResDtoList)
    //     //         setWishesToPass(wl.wishResDtoList)
    //     //     }
    //     // }
    // }, [selectedItemId]);

    useEffect(() => {
        console.log('wisard counter '+counter++, wishLists)
        wishLists.map((wl) => {
            if (wl.id === selectedItemId) {
                console.log('wishesToPass', wishesToPass)
                setWishesToPass(wl.wishResDtoList)
            }
        })
    }, [wishLists])

    function displayWishes(id: number){
        console.log('wishlistssss', wishLists)
        wishLists.map((wl) => {
            console.log("why aren't we getting here")

            if (wl.id === id) {
                console.log('wishesToPass', wishesToPass)
                setWishesToPass(wl.wishResDtoList)
            }
        })
    }

    const handleItemClick = (id: number) => {
        selectedItemId = id;
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
                                <div><AddWish/></div>
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

export default WishlistPage;
