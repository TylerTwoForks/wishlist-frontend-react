import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

export interface IWishlist {
    id: number;
    name: string;
}

interface props {
    wishlist: IWishlist
    onListSelected: (newType: number) => void;
    selected: number
}

function WishlistComp({wishlist, onListSelected, selected}:props){

    const handleItemClick = (id: number) => {
        console.log('handleItemClick ', id)
        onListSelected(id);
    };

    const deleteWishlist = async (event: React.FormEvent) => {
        // event.preventDefault()
        console.log("wishlistId: ",wishlist.id)
        await fetch(`http://localhost:8080/wish-list/${wishlist.id}`, {
            method: "DELETE",
            headers: {"Content-Type":"application/json"}
        }).then(res => {
            console.log('res', res)
        })
        onListSelected(wishlist.id)
    }


    return (
        <div className={`wishlist-comp list-group-item ${selected === wishlist.id ? 'active' : ''}`}
             onClick={() => handleItemClick(wishlist.id)}>
            Name: {wishlist.name}
            <DeleteIcon className={"delete-icon"} onClick={() => deleteWishlist()}/>
        </div>
    );



}

export default WishlistComp;