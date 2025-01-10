import React, {useState} from "react";

export function AddWishlistComp() {
    const[listName, setListName] = useState("");


    const handleSubmit = async (event: React.FormEvent) => {
        await fetch("http://localhost:8080/wish-list", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name:listName,
                userId:1
            }),
        }).then(res => {
            if(res.ok){
                alert("Wishlist saved successfully!");
                setListName("")
            }else{
                alert('blarg')
            }
        })
    }

    return (
        <>
            <form className="center-content my-border main-content" style={{borderRadius: "8px"}}>
                <label>
                    List Name: &nbsp;
                    <input className="" type="text" value={listName}
                           onChange={(e) => setListName(e.target.value)}
                           required/>
                </label>
                <br/>
                <br/>
                <button type="submit" className={"button2"} onClick={handleSubmit}>Create!</button>
            </form>
        </>
    );
}