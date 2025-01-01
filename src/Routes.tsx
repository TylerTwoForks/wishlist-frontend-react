
import {BrowserRouter, Route, Routes} from "react-router";
import AddProduct from "./components/Product/AddWish.tsx";
import WishList from "./components/Product/WishList.tsx";
import UserList from "./components/User/UserList.tsx";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AddProduct />} />
                <Route path="/wish-list" element={<WishList />} />
                <Route path="/user-list" element={<UserList />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
