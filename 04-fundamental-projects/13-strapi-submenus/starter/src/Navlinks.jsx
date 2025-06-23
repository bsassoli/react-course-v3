import sublinks from "./data";
import { useAppContext } from "./context";

const Navlinks = () => {
    const {setPageId} = useAppContext();
    const renderedSublinks = sublinks.map((link) => {
        const { pageId, page } = link;
        return <button key={pageId} className="nav-link" onMouseEnter={()=>setPageId(pageId)}>{page}</button>
})
console.log(renderedSublinks);
return <div className="nav-links">{renderedSublinks}</div>
}

export default Navlinks;
