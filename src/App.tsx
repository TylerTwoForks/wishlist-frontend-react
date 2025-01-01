import UserList from "./components/User/UserList.tsx";
import AddProduct from "./components/Product/AddWish.tsx";
import WishList from "./components/Product/WishList.tsx";
import WishLists from "./pages/WishLists.tsx";
import HomePage from "./pages/HomePage.tsx";
import {BrowserRouter, Route, Routes} from "react-router";

function App() {
    return (
        <>
            <BrowserRouter>
                <div >
                    <div className="main-content">
                        <Routes>
                            <Route index element={<HomePage />} />
                            <Route path="/add-product" element={<AddProduct />} />
                            <Route path="/wish-list" element={<WishList />} />
                            <Route path="/user-list" element={<UserList />} />
                            <Route path="/wishlists" element={<WishLists/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
