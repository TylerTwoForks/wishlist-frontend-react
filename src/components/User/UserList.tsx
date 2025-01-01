import { useState, useEffect } from "react";
import User from "./User.tsx";
import "../../css/App.css";

function UserList() {
  const [listItems, setListItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/users/all", {method:"GET"});
        const data = await response.json();
        setListItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 className="center-content">Users</h1>
      {listItems.length === 0 ? (
        <p className="center-left-align">No Items Found</p>
      ) : null}
      <ul className="list-group center-left-align">
        {listItems.map((user, index) => {
          let className =
            index === 0 ? "list-group-item active" : "list-group-item";
          return (
            <li key={index} className={className}>
              <User user={user} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default UserList;
