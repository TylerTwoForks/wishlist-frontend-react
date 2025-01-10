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
        //todo - this is only here so we dont' get an error with this variable.
        // leaving it in case we need it in the future, it's already here to pass on.
        console.log("setting selected wish id:", selectedWishId)
    }, [selectedWishId])

    return (
        <>
            {wishes.length === 0 ? (
                    <p>No Items Found</p>
                ) :
                (
                    <div className={"list-group wish-comp"}>

                        {wishes.map((wish) => (
                            <div key={wish.id}
                               className={`list-group-item ${selectedWishId === wish.id ? 'active' : ''}`}>
                                <WishComp wish={wish} onListSelected={handleItemClick}/>
                            </div>
                        ))}

                    </div>
                )}
        </>
    );
}