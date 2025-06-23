import sublinks from "./data";
import { FaTimes } from "react-icons/fa"
import { useAppContext } from "./context";
const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useAppContext();
    const renderedLinks = sublinks.map((page) => {
    const renderedSubLinks = page.links.map((link) => (
      <a key={link.id} href={link.url}>
        {link.icon}
        {link.label}
      </a>
    ));
    return (
      <div key={page.pageId} className="sidebar-links">
        <article>
          <h4>{page.page}</h4>
        </article>
        <div className="sidebar-sublinks">{renderedSubLinks}</div>
      </div>
    );
  });
  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-container">{renderedLinks}</div>
      <button className="close-btn" onClick={closeSidebar}><FaTimes /></button>
    </aside>
  );
};
export default Sidebar;
