import { useState } from "react";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import GroceryItemList from "./GroceryItemList";
import Form from "./Form";

const App = () => {
  const storedItems = localStorage.getItem("groceryList");
  const currenItems = storedItems? JSON.parse(storedItems) : [];
  const [items, setItems] = useState(currenItems);
  const addItem = (itemToAdd) => {
    const newItem = {id: nanoid(), name: itemToAdd};
    const newItems = [newItem, ...items];
    setItems(newItems);
    localStorage.setItem("groceryList", JSON.stringify(newItems));
    toast.success("Item added!");
  }
  const deleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    localStorage.setItem("groceryList", JSON.stringify(newItems));
    toast.success("Item deleted!");
  };
  return (
    <section className="section-center">
      <h4 className="title">Grocery Bud</h4>
      <ToastContainer 
        position="top-center"
        autoClose={1000}
      />
      <Form addItem={addItem}/>
      <GroceryItemList items={items} onDelete={deleteItem} />
    </section>
  );
};

export default App;
