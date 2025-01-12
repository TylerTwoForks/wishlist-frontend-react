import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import React from "react";
import "../../css/Modals.css"
import {AddWishlistComp} from "./AddWishlistComp.tsx";


export function AddWishlistModal() {
    const [open, setOpen] = React.useState(false);

    const handleAddWishlist = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <>
            <div className={"center-content"}>
                <button className={"new-wishlist-button"} onClick={handleAddWishlist}>
                    Add Wishlist
                    <AddIcon className={"add-button"}/>
                </button>
            </div>
            <Modal open={open} onClose={handleClose}>
                <Box className={"base-modal"}>
                    <AddWishlistComp/>
                </Box>
            </Modal>
        </>
    );
}