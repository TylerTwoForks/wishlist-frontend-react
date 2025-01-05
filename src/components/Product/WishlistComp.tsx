import DeleteIcon from "@mui/icons-material/Delete";

export interface IWishlist {
    id: number;
    name: string;
}

interface props {
    wishlist: IWishlist
    onListSelected: (newType: number) => void;

}

function WishlistComp({wishlist, onListSelected}:props){

    const handleItemClick = (id: number) => {
        onListSelected(id);
    };

    return (
        <div className={"wishlist-comp"} onClick={() => handleItemClick(wishlist.id)}>
            Name: {wishlist.name}
            <DeleteIcon className={"delete-icon"}/>
        </div>
    );



}

export default WishlistComp;