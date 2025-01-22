import { DeleteComp } from "../DeleteComp.tsx";
import {Card, CardContent, CardMedia, Typography, IconButton, Divider, CardActionArea} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';


export interface IWish {
    id: number;
    externalUrl: string;
    notes: string;
    qtyRequested: number;
    purchased: boolean;
    defaultImageUrl: string;
    price: number;
    title: string;
}

interface props {
    wish: IWish;
    selectedId: number;
    onWishSelected: (newType: number) => void;
    onWishSDeleted: (newType: number) => void;
}

function WishComp({ wish, onWishSelected, selectedId, onWishSDeleted }: props) {

    const handleItemClick = (id: number) => {
        onWishSelected(id);
        console.log("wish:: ", wish);
    };

    const handleDelete = async () => {
        await fetch(`http://localhost:8080/wish/delete/${wish.id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        });
        onWishSDeleted(wish.id);
    };

    return (

        <Card className={`wish-card ${selectedId === wish.id ? 'card-active' : ''} center-horizon`} onClick={() => handleItemClick(wish.id)}>
            <CardActionArea className={"wish-card-media-action-area center-horizon"} href={wish.externalUrl} target={"_blank"} rel={"noopener noreferrer"}>
                <CardMedia
                    component="img"
                    image={wish.defaultImageUrl}
                    alt="image"
                    className="wish-card-media"
                />
            </CardActionArea>
            <CardContent className="wish-card-content">
                <Typography variant="h5" component="div">
                    <a href={wish.externalUrl} target="_blank" rel="noopener noreferrer">{wish.title ?? "No Title Found"}</a>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Notes: {wish.notes}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Quantity: {wish.qtyRequested} | Price: ${wish.price}
                </Typography>
                <br/>
                <Divider className="wish-card-divider" />

                <div className="wish-card-actions">
                    <IconButton>
                        <EditIcon />
                    </IconButton>
                    <IconButton>
                        <DeleteComp id={wish.id} handleDelete={() => handleDelete()}/>
                    </IconButton>
                </div>
            </CardContent>
            <CardContent>
                <DragIndicatorIcon  className={"wish-card-drag-icon"}/>
            </CardContent>
        </Card>
    );
}

export default WishComp;