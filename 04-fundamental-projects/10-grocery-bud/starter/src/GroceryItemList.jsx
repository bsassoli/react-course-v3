import GroceryItem from "./GroceryItem";

const GroceryItemList =  ({ items, onDelete } ) => {
    const renderedItems = items.map((item) =>
        <GroceryItem
            name={item.name}
            deleteItem={onDelete}
            key={item.id}
            id={item.id}
            />)
    return <div className="items">{renderedItems}</div>
}

export default GroceryItemList;