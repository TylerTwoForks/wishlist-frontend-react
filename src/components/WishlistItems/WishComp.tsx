import {DeleteComp} from "../DeleteComp.tsx";

export interface IWish {
    id: number
    externalUrl: string;
    notes: string;
    qtyRequested: number;
    purchased: boolean;
    imageUrl: string;
    price: number;
    title: string;
}

interface props {
    wish: IWish
    selectedId: number
    onWishSelected: (newType: number) => void;
    onWishSDeleted: (newType: number) => void;
}


function WishComp({wish, onWishSelected, selectedId, onWishSDeleted}: props) {

    //TODO - don't delete the below code yet. This idea can be used when we get Amazon API Access.
    // I may end up storing this information in the backend on the actual Wish object and just sending it up to be used here.

    // const [wishPreview, setWishPreview] = useState<Map<String, String>>();

    // const buildWishPreview = async (wishUrl:string) =>{
    //     FetchUrlTitle(wishUrl).then(res => {
    //         setWishPreview(res);
    //     })
    //
    // }
    // useEffect(() => {
    //     buildWishPreview(wish.externalUrl).then()
    // }, []);

    const handleItemClick = (id: number) => {
        onWishSelected(id);
        console.log("wish:: ", wish)
    };
    const handleDelete = async () => {
        await fetch(`http://localhost:8080/wish/delete/${wish.id}`, {
            method: "DELETE",
            headers: {"Content-Type":"application/json"}
        })
        onWishSDeleted(wish.id);
        // onDeletedWishlist(id);
    }

    return (
        <>
            <div className={`list-group-item ${selectedId === wish.id ? 'active' : ''}`}
                 onClick={() => handleItemClick(wish.id)} >
                <a href={wish.externalUrl} target="_blank" rel="noopener noreferrer">{wish.title ?? "No Title Found"}</a><br/>
                {/*URL: <a href={wish.externalUrl} target={"_blank"} rel="noopener noreferrer">{wish.externalUrl}</a><br/>*/}
                Notes: {wish.notes}<br/>
                Quantity: {wish.qtyRequested}<br/>
                <img src={wish.imageUrl} alt="image" style={{width: '500px', height: 'auto'}}/>
                <DeleteComp id={wish.id} handleDelete={() => handleDelete()}/>
            </div>
        </>
    );
}

export default WishComp;