import endpointUrls from "../endopintUrls.tsx";
import {useEffect} from "react";
import DeleteIcon from "@mui/icons-material/Delete";



export function DeleteWishComp() {

    useEffect(() => {
        const deleteWish = async () => {
            await fetch(endpointUrls.deleteWish

            )
                .then(res => {
                if(res.ok){

                }})
                .catch(error => {
                    console.log("error deleting data: ", error)
                    alert("Error deleting data: " + error)
                })

        }
        deleteWish();
    }, []);

    return (
        <><DeleteIcon className={"delete-icon"}/></>
    );
}