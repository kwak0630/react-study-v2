import React from "react";
import { Link } from "react-router-dom";
import usersData from "./data.json"

function UserList() {
// const { users } = usersData;
// const { url } = useRouteMatch();
// const { id } = useParams();
  return (
    <div>
      <ul className="user-list">
        {usersData.users.map(({ id, name }) => (
          <li key={id}>
            <Link to={`UserDetail/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;