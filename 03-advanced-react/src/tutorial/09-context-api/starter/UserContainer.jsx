const UserContainer = ({ user, logout }) => {

    return <div>
        <p>{user ? user.name: "login please"}</p>
        <button type="button" onClick={logout}>logout</button>
    </div>
};
export default UserContainer;
