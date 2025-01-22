import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter, Route, Routes} from "react-router";
import HomePage from "./pages/HomePage.tsx";
import AddProductPage from "./pages/AddProductPage.tsx";
import UsersPage from "./pages/UsersPage.tsx";
import WishlistPage from "./pages/WishlistPage.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <App/>
            <div>
                <div className="main-content">
                    <Routes>
                        <Route index element={<HomePage/>}/>
                        <Route path="/wishlists" element={<WishlistPage/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    </StrictMode>,
)
