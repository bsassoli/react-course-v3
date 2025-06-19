import { FaBars } from "react-icons/fa";
import { useState, useRef } from "react";
const Navbar = ({ logo, links, social }) => {
  
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef=useRef(null);
  const linksRef = useRef(null);

  const renderedSocialLinks = social.map((social) => {
    return <li key={social.id}>
      <a href={social.url}>
        {social.icon}
      </a>
    </li>;
  });

  const renderedLinks = links.map((link) =>
    <li key={link.id}>
      <a href={link.url}>{link.text}</a>
    </li>);
  
  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : '0px',
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img className="logo" src={logo} alt="logo" />
          <button className="btn nav-toggle" onClick={()=>setShowLinks(!showLinks)}><FaBars /></button>
        </div>
        <div 
          className="links-container"
          style={linkStyles}
          ref={linksContainerRef} >
          <ul className="links" ref={linksRef}>
            { renderedLinks }
          </ul>
        </div>
        <ul className="social-icons">{renderedSocialLinks}</ul>
        
      </div>
    </nav>
  );
};

export default Navbar;
