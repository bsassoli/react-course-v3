import { data } from '../../../data';
import { useState } from "react";

const UserChallenge = () => {
  console.log(data);
  const [users, setUsers] = useState(data);
  const [userName, setUserName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userName) return;
    const newUser = {id: Date.now(), name: userName.trim()};

    setUsers([newUser, ...users])
  };
  const renderedUsers = users.map((user, id) => {
    return <div key={id}>
    <h3 >{user.name}</h3>
    <button
      className="btn"
      onClick={()=>setUsers(users.filter((u) => u.id !== user.id))}>
      remove
    </button>
    </div>

  })
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='userName' className='form-label'>
            userName
          </label>
          <input
            type='text'
            className='form-input'
            id='userName'
            value={userName}
            onChange={(e)=>setUserName(e.target.value)} />
        </div>

        <button
          type='submit'
          className='btn btn-block'>
          submit
        </button>
      </form>
      <div>{renderedUsers}</div>
    </div>
  );
};
export default UserChallenge;
