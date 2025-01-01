import LeftNav from "../components/Navigation/leftNav.tsx";
import WishListComp from "../components/Product/WishListComp.tsx";
import "../css/App.css";
import "../css/LeftNav.css";

export default function WishList() {
    return (
        <>
            <div className="app-container">
                <LeftNav/>
                <div className="main-content">
                    <WishListComp/>
                </div>
            </div>
        </>
    );
}
