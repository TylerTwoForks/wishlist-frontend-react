import LeftNav from "../components/Navigation/leftNav.tsx";
import WishlistListComp from "../components/Product/WishlistListComp.tsx";

export default function Wishlists() {
  return (
      <>
          <div className="app-container">
              <LeftNav/>
              <div className="main-content">
                  <h1>Home Page</h1>
              </div>
          </div>
      </>
  );
}
