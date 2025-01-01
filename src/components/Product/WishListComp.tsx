import {useState, useEffect} from "react";
// import Wish from "./Wish.tsx";
import "../../css/App.css";

function WishList() {
    const [wishLists, setWishLists] = useState<any[]>([]);
    const [selectedItemId, setSelectedItemId] = useState<number | 0>(1);
    const [defaultSelect, setDefaultSelect] = useState<boolean | true>(true);
    const userId = "1"; //TODO - Example user ID, replace with actual variable
    // let counter = 99999;


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/wish-list/user/${userId}`, {method: "GET"});
                console.log('data ', response)

                const data = await response.json();
                setWishLists(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();

    }, []);

    const handleItemClick = (id: number) => {
        setDefaultSelect(false)
        setSelectedItemId(id);
    };

    return (
        <>
            {wishLists.length === 0 ? (
                <p>No Items Found</p>
            ) : (
                <div>
                    <ul className="list-group left-wishlist">
                        {wishLists.map((wishList, index) => (
                            <li
                                key={wishList.id}
                                className={`list-group-item ${ 
                                    defaultSelect && index === 0 ? 'active' : //on page load, nothing is selected so we default select the first list. 
                                        selectedItemId === wishList.id ? 'active' :  //if we select something though, we want to highlight that one
                                            '' //if we don't hit either of the above, don't add any other class names. 
                                }`}
                                onClick={() => handleItemClick(wishList.id)}
                            >
                                {wishList.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {selectedItemId && (
                <div className="selected-item-details">
                    <h2>Details for Item {selectedItemId}</h2>
                    {/* Render the component conditionally here */}
                </div>
            )}
        </>
    );
}


{/*{wishListItems.map((wishList) => {*/
}
{/*    return (<>*/
}

{/*        /!*<h2 className="center-content app-container"> Wish List {wishList.name} </h2>*!/*/
}

// ##########################################################################
{/*        /!*this is a block of code that loops through the response and gets all the wishes for the wishlist*!/*/
}

{/*        /!*<ul className="list-group center-left-align" key={wishList.id}>*!/*/
}
{/*        /!*    {wishList.wishResDtoList.map((wish: Record<string, any>) => {*!/*/
}
{/*        /!*        return (*!/*/
}
{/*        /!*            <li key={wish.wishId} className={"list-group-item"}>*!/*/
}
{/*        /!*                <Wish wish={wish}/>*!/*/
}
{/*        /!*            </li>*!/*/
}
{/*        /!*        );*!/*/
}
{/*        /!*    })}*!/*/
}
{/*        /!*</ul>*!/*/
}
{/*        <br/>*/
}
{/*    </>)*/
}
{/*})}*/
}

export default WishList;
