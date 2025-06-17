import { useState } from "react";
const GroceryItem = ({ name, id, deleteItem }) => {
    const [isChecked, setIsChecked] = useState(false)
    return (
    <article className="single-item">

            <input
            type="checkbox"
            onChange={()=> setIsChecked(!isChecked)}
            checked={isChecked}
            />
        <p style={{textDecoration : isChecked && "line-through"}}>{name}</p>
        <button className="btn remove-btn" onClick={() => deleteItem(id)}>delete</button>
    </article>
    )
}
export default GroceryItem;