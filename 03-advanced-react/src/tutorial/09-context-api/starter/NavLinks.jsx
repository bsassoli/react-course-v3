import UserContainer from './UserContainer';

NavLinks = ({ user, logout }) => {
    return (
        <UserContainer user={user}logout={logout}/>
    )
};

export default NavLinks;
