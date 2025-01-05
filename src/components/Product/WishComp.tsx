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


function Wish({ wish, onListSelected}: props) {

    const handleItemClick = (id: number) => {
        onListSelected(id);
    };

    return (
        <div className={"wish-comp"} onClick={() => handleItemClick(wish.id)}>
            URL: <a href={wish.externalUrl} target="_blank" rel="noopener noreferrer">{wish.externalUrl}</a> <br />
            Notes: {wish.notes}<br/>
            Quantity: {wish.qtyRequested}
            <DeleteIcon className={"delete-icon"}/>
        </div>
    );
}

export default Wish;