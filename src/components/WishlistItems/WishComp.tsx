import DeleteIcon from '@mui/icons-material/Delete';

export interface IWish {
    id: number
    externalUrl: string;
    notes: string;
    qtyRequested: number;
    purchased: boolean;
}

interface props{
    wish:IWish
    onListSelected: (newType: number) => void;
}


function WishComp({ wish, onListSelected}: props) {

    const handleItemClick = (id: number) => {
        onListSelected(id);
    };

    //TODO - for this one and wishlist. The div here is smaller than the list-item display so you have to click this div to select.
    // need to make it so it can click the entire list-item area.
    return (
        <div onClick={() => handleItemClick(wish.id)}>
            URL: <a href={wish.externalUrl} target="_blank" rel="noopener noreferrer">{wish.externalUrl}</a> <br />
            Notes: {wish.notes}<br/>
            Quantity: {wish.qtyRequested}
            <DeleteIcon className={"delete-icon"}/>
        </div>
    );
}

export default WishComp;