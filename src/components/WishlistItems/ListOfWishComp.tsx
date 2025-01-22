import WishComp, {IWish} from "./WishComp.tsx";
import {useEffect, useState} from "react";


interface props {
    wishes: IWish[];
    handleWishDeleted: (newType: number) => void;
}

export default function ListOfWishComp({wishes, handleWishDeleted}: props) {

    const [selectedWishId, setSelectedWishId] = useState<number>(0);

    const handleItemClick = (id: number) => {
        if(selectedWishId === id){
            setSelectedWishId(null);
            localStorage.removeItem('selectedWishId');
            return;
        }
        setSelectedWishId(id);
        localStorage.setItem('selectedWishId', id.toString())
    };

    useEffect(() => {
        const selectedItemLocal = localStorage.getItem('selectedWishId');
        if (selectedItemLocal) setSelectedWishId(Number(selectedItemLocal));
    }, [])

    return (
        <>
            {wishes.length === 0 ? (
                    <p>No Items Found</p>
                ) :
                (
                    <div>
                        {wishes.map((wish) => (
                            <WishComp
                                key={wish.id}
                                wish={wish}
                                onWishSelected={handleItemClick}
                                selectedId={selectedWishId}
                                onWishSDeleted={handleWishDeleted}
                            />
                        ))}
                    </div>
                )}
        </>
    );
}