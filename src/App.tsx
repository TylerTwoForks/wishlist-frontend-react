import WishlistPage from "./pages/WishlistPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import AddProductPage from "./pages/AddProductPage.tsx";
import UsersPage from "./pages/UsersPage.tsx";
import {HeaderComp} from "./components/Navigation/HeaderComp.tsx";

function App() {
  return (
    <>
      <HeaderComp/>
      <BrowserRouter>
        <div>
          <div className="main-content">
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="/add-product" element={<AddProductPage />} />
              <Route path="/user-list" element={<UsersPage />} />
              <Route path="/wishlists" element={<WishlistPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
