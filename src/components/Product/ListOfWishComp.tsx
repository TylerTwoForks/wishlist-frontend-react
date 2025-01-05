import WishComp, {IWish} from "./WishComp.tsx";
import {useEffect, useState} from "react";


interface props {
    wishes: IWish[]
    onListSelected: (newType: number) => void;
}

export default function ListOfWishComp({wishes, onListSelected}: props) {

    const [selectedWishId, setSelectedWishId] = useState<number>();

    const handleItemClick = (id: number) => {
        setSelectedWishId(id);

        onListSelected(id);
    };

    useEffect(() => {
        console.log("setting selected wish id:", selectedWishId)
        console.log("selectedWish:", wishes)

    }, [selectedWishId])

    return (
        <>
            {wishes.length === 0 ? (
                    <p>No Items Found</p>
                ) :
                (
                    <div>
                        <ul className="list-group">
                            {wishes.map((wish) => (
                                <li key={wish.id}
                                    className={`wish-comp list-group-item ${selectedWishId === wish.id ? 'active' : ''}`}>
                                    <WishComp wish={wish} onListSelected={handleItemClick}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
        </>
    );
}