import { useState } from "react";

function AmazonProductSubmit() {
    const [productUrl, setProductUrl] = useState("");
    const [notes, setNotes] = useState("");
    const [quantity, setQuantity] = useState(1);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/wish", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                //todo - update the wishListId to be not hard coded...
                body: JSON.stringify({ externalUrl: productUrl, notes, qtyRequested: quantity, wishListId:1 }),
            });
            if (response.ok) {
                alert("Product URL saved successfully!");
                setProductUrl("");
                setNotes("");
                setQuantity(1);
            } else {
                alert("Failed to save product URL.");
            }
        } catch (error) {
            console.error("Error saving product URL:", error);
            alert("An error occurred while saving the product URL.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="center-content my-border" style={{paddingBottom: 10, paddingTop: 10}}>
            <label className="form-box-spacing center-left-align">
                Amazon Product URL: &nbsp;
                <input className="input-box-right"
                    type="text"
                    value={productUrl}
                    onChange={(e) => setProductUrl(e.target.value)}
                    required
                />
            </label>
            <br/>
            <label className="form-box-spacing center-left-align">
                Notes: &nbsp;
                <input className="input-box-right"
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                />
            </label>
            <br/>
            <label className="form-box-spacing center-left-align">
                Quantity: &nbsp;
                <input className="input-box-right"
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    min="1"
                    required
                />
            </label>
            <br/><br/>
            <button type="submit" >Submit</button>
        </form>
    );
}

export default AmazonProductSubmit;