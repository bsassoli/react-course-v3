import NavLinks from './UserContainer';
import { useState } from 'react';
const Navbar = () => {

    const [user, setUser] = useState({name: "bernie"});
    const logout = () => { setUser(null)};
    return (
        <nav>
            <NavLinks user={user}logout={logout}/>
        </nav>
    )
};

export default Navbar;
