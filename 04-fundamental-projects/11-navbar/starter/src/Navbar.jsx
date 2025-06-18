const Navbar = ({ logo, links, social }) => {
  const renderedSocialLinks = social.map((social) => {
    return <li key={social.id}>
      <a href={social.url}>
        {social.icon}
      </a>
    </li>;
  });
  console.log(renderedSocialLinks);
  const renderedLinks = links.map((link) =>
    <li key={link.id}>
      <a href={link.url}>{link.text}</a>
    </li>);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="links-container">
          <ul className="links">{renderedLinks}</ul>
        </div>
        <ul className="social-icons">{renderedSocialLinks}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
