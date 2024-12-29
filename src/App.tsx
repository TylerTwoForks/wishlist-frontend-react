import UserList from "./components/User/UserList.tsx";
import AddProduct from "./components/Product/AddWish.tsx";
import WishList from "./components/Product/WishList.tsx";

function App() {
    return (
        <>
            <div>
                <UserList></UserList>
            </div>
            <br/>
            <div>
                <AddProduct></AddProduct>
            </div>
            <br/>
            <div>
                <WishList></WishList>
            </div>
        </>

    );
}

export default App;
