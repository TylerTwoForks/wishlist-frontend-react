import WishComp, {IWish} from "./WishComp.tsx";
import {useEffect, useState} from "react";


interface props {
    wishes: IWish[]
}

export default function ListOfWishComp({wishes}: props) {

    const [selectedWishId, setSelectedWishId] = useState<number>(0);

    const handleItemClick = (id: number) => {
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
                    <div className={"list-group wish-comp"}>
                        {wishes.map((wish) => (
                            <WishComp
                                key={wish.id}
                                wish={wish}
                                onWishSelected={handleItemClick}
                                selectedId={selectedWishId}
                                className
                            />

                            // <div key={wish.id} className={`list-group-item ${selectedWishId === wish.id ? 'active' : ''}`}>
                            //     <WishComp wish={wish} onListSelected={handleItemClick}/>
                            // </div>
                        ))}
                    </div>
                )}
        </>
    );
}