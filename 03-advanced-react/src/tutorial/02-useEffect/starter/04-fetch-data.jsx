const url = "https://api.github.com/users";
import { useState, useEffect } from "react";
const User = ({id, avatar_url, login, html_url }) => {
  return (
  <li key={id}>
    <img src={avatar_url} alt={login} />
    <div>
      <h5>{login}</h5>
      <a href={html_url}>profile</a>
    </div>
  </li>
  )};

const FetchData = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const retrieveData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    retrieveData();
  }, []);

  const renderedUsers = users.map((user) => {
    return <User key={user.id} {...user} />;
  });

  return (
    <div className="users">
      <h2>github users</h2>
      <div className="users">{renderedUsers}</div>
    </div>
  );
};
export default FetchData;
