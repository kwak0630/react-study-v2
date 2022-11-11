import React from "react";
import { Link } from "react-router-dom";
// import { Link,Routes,Route } from "react-router-dom";
// import UserDetail from "./UserDetail"
import  usersData  from "./data.json"

function UserList() {
// const { users } = usersData;
// const { url } = useRouteMatch();

// const { id } = useParams();
  return (
    <div>
      <ul className="user-list">
        {usersData.users.map(({ id, name }) => (
          <li key={id}>
            {/* {name} */}
            {/* <Link to={`UserDetail/${id}`}>{name}</Link> */}

            {/* <Link to={id}>{name}</Link> */}
            <Link to={`UserDetail/${id}`}>{name}</Link>
            {/* <Link to={`UserDetail/${id}`}>{name}</Link> */}
            {/* <Routes><Route path={`UserDetail/${id}`} element={<UserDetail />} /></Routes> */}
          </li>
        ))}
      </ul>

{/* <Outlet /> */}
    </div>
  );
}

export default UserList;