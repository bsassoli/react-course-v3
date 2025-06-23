import { useAppContext } from "./context";
import { FaBars } from "react-icons/fa";
import Navlinks from "./Navlinks";
const Navbar = () => {
  const { openSidebar } = useAppContext();
  return (
    <nav>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <Navlinks />
        <button
            onClick={openSidebar}
            className="toggle-btn">
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
