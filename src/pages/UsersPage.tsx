import "../css/App.css";
import "../css/LeftNav.css";
import UserList from "../components/User/UserList.tsx";

export default function UsersPage() {
    return (
        <>
            <div className="app-container">
                <div className="main-content">
                    <UserList/>
                </div>
            </div>
        </>
    );
}
