const url = 'https://api.github.com/users';
import { use } from 'react';
import { useState, useEffect } from 'react';
const User = (user) => {
  return <div className='user'>
    <img src={user.avatar_url} alt={user.login} />
    <h4>{user.login}</h4>
  </div>
};
const FetchData = () => {
  const retrieveData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    }
    catch (error) {
      console.log(error);
    };
};

const [users, setUsers] = useState([]);
useEffect(() => {
  const usersArray = retrieveData(); 
  setUsers(usersArray)
}, [])


const renderedUsers = users.map((user) => {
  return <User key={user.id} {...user} />;
}
);

return  <div className='users'>
  <h2>github users</h2>
  {renderedUsers} 
</div>
};
export default FetchData;
