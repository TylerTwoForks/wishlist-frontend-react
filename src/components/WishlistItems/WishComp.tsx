import {DeleteComp} from "../DeleteComp.tsx";

export interface IWish {
    id: number
    externalUrl: string;
    notes: string;
    qtyRequested: number;
    purchased: boolean;
}

interface props {
    wish: IWish
    onWishSelected: (newType: number) => void;
    selectedId: number
}


function WishComp({wish, onWishSelected, selectedId}: props) {

    const handleItemClick = (id: number) => {
        onWishSelected(id);
    };
    const handleDelete = () => {

    }

    return (
        <>
            <div className={`list-group-item ${selectedId === wish.id ? 'active' : ''}`}
                 onClick={() => handleItemClick(wish.id)} >
                URL: <a href={wish.externalUrl} target="_blank" rel="noopener noreferrer">{wish.externalUrl}</a> <br/>
                Notes: {wish.notes}<br/>
                Quantity: {wish.qtyRequested}
                <DeleteComp id={wish.id} handleDelete={() => handleDelete()}/>
            </div>
        </>
    );
}

export default WishComp;