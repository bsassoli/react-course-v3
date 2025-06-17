import { useState } from "react";
import { toast } from 'react-toastify';
const Form = ({ addItem }) => {
  const [newItem, setNewItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) {
        toast.error("You must enter a value")
        return;
    };
    addItem(newItem);
    setNewItem("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
          <input
            type="text"
            className="form-input"
            onChange={(e) => setNewItem(e.target.value)}
            name="item"
            id="item"
            value={newItem}
          />
          <button className="btn">Add item</button>
        
      </div>
    </form>
  );
};

export default Form;
