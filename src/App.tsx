import UserList from "./components/User/UserList.tsx";
import AddProduct from "./components/Product/AddWish.tsx";
import WishList from "./components/Product/WishList.tsx";
import LeftNav from "./components/Navigation/leftNav.tsx";
import {BrowserRouter, Route, Routes} from "react-router";

function App() {
    return (
        <BrowserRouter>
            <div>
                <LeftNav />
                <div style={{ marginLeft: "220px", padding: "20px" }}>
                    <Routes>
                        <Route path="/" element={<AddProduct />} />
                        <Route path="/wish-list" element={<WishList />} />
                        <Route path="/user-list" element={<UserList />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
