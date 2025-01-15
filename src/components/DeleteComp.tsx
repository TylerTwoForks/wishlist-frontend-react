
import { Modal, Box, Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {useState} from "react";

interface props {
    id:number; //id of the item you want to delete.
    handleDelete: (newType: number) => void; //function to pass in from the parent component that handles the result of deleting.
}

export function DeleteComp({handleDelete, id}:props) {
    const [showModal, setShowModal] = useState(false);

    const handleDeleteClick = () => {
        setShowModal(true);
    };
    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <>
            <DeleteIcon className={"delete-icon"} onClick={() => handleDeleteClick()}/>

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
                        <Button variant="contained" className={"delete-modal-button"} onClick={() => handleDelete(id)}>
                            Delete
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
}