
import { Modal, Box, Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {useState} from "react";

interface props {
    id:number;
    deleteWishlist: (newType: number) => void;
}

export function DeleteComp({deleteWishlist, id}:props) {
    const [showModal, setShowModal] = useState(false);

    const handleDeleteClick = () => {
        setShowModal(true);
    };
    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <>
            <DeleteIcon className={"delete-icon"} onClick={() => {
                handleDeleteClick();
            }}/>

            <Modal open={showModal} onClose={handleClose}>
                <Box className={"base-modal"}>
                    <Typography variant="h6" component="h2">
                        Confirm Delete
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        Are you sure? This cannot be undone.
                    </Typography>
                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                        <Button variant="contained"  onClick={handleClose} className={"cancel-modal-button"}>
                            Cancel
                        </Button>
                        <Button variant="contained" className={"delete-modal-button"} onClick={() => deleteWishlist(id)}>
                            Delete
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
}