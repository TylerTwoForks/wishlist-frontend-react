import {useState, useEffect} from "react";
import Wish from "./Wish.tsx";
import "../../App.css";

function WishList() {
    const [wishListItems, setWishListItems] = useState<any[]>([]);
    const userId = "1"; // Example user ID, replace with actual variable
    let counter = 99999;


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/wish-list/user/${userId}`, {method: "GET"});
                console.log('data ', response)

                const data = await response.json();
                setWishListItems(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();

    }, []);

    return (
        <>
            <h1 className="center-content" key={"test1"}>Wish Lists</h1><br/>
            {wishListItems.length === 0 ? (<p className="center-left-align">No Items Found</p>) : null}

            {wishListItems.map((wishList) => {
                return (<>
                    <h2 className="center-content" key={counter++}> Wish List {wishList.name} </h2>
                    <ul className="list-group center-left-align" key={wishList.id}>
                        {wishList.wishResDtoList.map((wish: Record<string, any>) => {
                            return (
                                <li key={wish.wishId} className={"list-group-item"}>
                                    <Wish wish={wish}/>
                                </li>
                            );
                        })}
                    </ul>
                    <br/>
                </>)
            })}


        </>
    );
}

export default WishList;
