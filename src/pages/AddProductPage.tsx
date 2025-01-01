import LeftNav from "../components/Navigation/leftNav.tsx";
import "../css/App.css";
import "../css/LeftNav.css";
import AddWish from "../components/Product/AddWish.tsx";

export default function AddProductPage() {
    return (
        <>
            <div className="app-container">
                <LeftNav/>
                <div className="main-content">
                    <AddWish/>
                </div>
            </div>
        </>
    );
}
