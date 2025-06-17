import { nanoid } from "nanoid";
const Navbar = ({ logo, links }) => {
  const renderedLinks = links.map((link) => <li key={link.id}>{link.text}</li>);
  return (
    <nav>
      <div className="nav-header">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="link-container">
        <ul className="links">{renderedLinks}</ul>
    </div>
    </nav>
  );
};

export default Navbar;
