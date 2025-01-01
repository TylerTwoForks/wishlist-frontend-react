import {useState, useEffect} from "react";
// import Wish from "./Wish.tsx";
import "../../css/App.css";

function WishList() {
    const [wishListItems, setWishListItems] = useState<any[]>([]);
    const userId = "1"; //TODO - Example user ID, replace with actual variable
    // let counter = 99999;


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
            <div className="main-content">
                {wishListItems.length === 0 ? (
                    <p>No Items Found</p>
                ) : (
                    wishListItems.map((wishList) => (
                        <div key={wishList.id} >
                            <h2>Wish List {wishList.name}</h2>
                            <br/>
                        </div>
                    ))
                )}
            </div>

            {/*{wishListItems.map((wishList) => {*/}
            {/*    return (<>*/}

            {/*        /!*<h2 className="center-content app-container"> Wish List {wishList.name} </h2>*!/*/}

            {/*        /!*this is a block of code that loops through the response and gets all the wishes for the wishlist*!/*/}
            {/*        /!*<ul className="list-group center-left-align" key={wishList.id}>*!/*/}
            {/*        /!*    {wishList.wishResDtoList.map((wish: Record<string, any>) => {*!/*/}
            {/*        /!*        return (*!/*/}
            {/*        /!*            <li key={wish.wishId} className={"list-group-item"}>*!/*/}
            {/*        /!*                <Wish wish={wish}/>*!/*/}
            {/*        /!*            </li>*!/*/}
            {/*        /!*        );*!/*/}
            {/*        /!*    })}*!/*/}
            {/*        /!*</ul>*!/*/}
            {/*        <br/>*/}
            {/*    </>)*/}
            {/*})}*/}

        </>
    );
}

export default WishList;
