import MenuItem from "./MenuItem";
const Menu = ({ items }) => {
    const renderedItems = items.map(
        (item) => <MenuItem key={item.id} item={item} />
    )

return <div className="section-center">{renderedItems}</div>
};
export default Menu;