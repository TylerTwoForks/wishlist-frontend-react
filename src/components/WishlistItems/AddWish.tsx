import React, {useState} from "react";
import "../../css/AddWish.css";

interface props {
    wishlistId: number
}

function ProductSubmit({wishlistId}: props) {
    const [productUrl, setProductUrl] = useState("");
    const [notes, setNotes] = useState("");
    const [quantity, setQuantity] = useState(1);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        await fetch("http://localhost:8080/wish", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            //todo - update the wishListId to be not hard coded...
            body: JSON.stringify({
                externalUrl: productUrl,
                notes: notes,
                qtyRequested: quantity,
                wishListId: wishlistId,
            }),
        })
            .then(res => {
                if (res.ok) {
                    alert("Product URL saved successfully!");
                    setProductUrl("");
                    setNotes("");
                    setQuantity(1);
                } else {
                    alert("Failed to save product URL.");
                }
            })
            .catch(error => {
                console.error("Error saving product URL:", error);
                alert("An error occurred while saving the product URL.");
            });
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="form-container">
                <div className="form-row">
                    <label>
                        URL: &nbsp;
                        <input
                            type="text"
                            value={productUrl}
                            onChange={(e) => setProductUrl(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Quantity: &nbsp;
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            min="1"
                            required
                        />
                    </label>
                </div>
                <label className="notes-label">
                    Notes: &nbsp;
                    <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                    />
                </label>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </>
    );
}

export default ProductSubmit;
