import {DeleteComp} from "../DeleteComp.tsx";

export interface IWishlist {
    id: number;
    name: string;
}

interface props {
    wishlist: IWishlist
    selected: number
    onListSelected: (newType: number) => void;
    onDeletedWishlist: (newType: number) => void;

}

function WishlistComp({wishlist, onListSelected, selected, onDeletedWishlist}:props){

    const handleItemClick = (id: number) => {
        onListSelected(id);
    };

    const deleteWishlist = async (id: number) => {
        await fetch(`http://localhost:8080/wish-list/${wishlist.id}`, {
            method: "DELETE",
            headers: {"Content-Type":"application/json"}
        })
        onDeletedWishlist(id);
    }

    return (
        <div className={`wishlist-comp list-group-item ${selected === wishlist.id ? 'active' : ''}`}
             onClick={() => handleItemClick(wishlist.id)}>
            {wishlist.name}
            <DeleteComp id={wishlist.id} handleDelete={deleteWishlist}/>
        </div>
    );



}

export default WishlistComp;