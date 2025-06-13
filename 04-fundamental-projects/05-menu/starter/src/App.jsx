import { useState } from "react";
import Title from "./Title";
import Menu from "./Menu";
import Categories from "./Categories";
import data from "./data";

const App = () => {

  const [items, setItems] = useState(data);
  const selectCategory = (category) => {
    if (category === "all") {
      setItems(data);
    } else {
    const itemsToDisplay = data.filter((item) => item.category === category );
    setItems(itemsToDisplay);
    }
  }

  const categories = ["all", ...new Set(data.map((item)=>item.category))]
  return <section className="menu">
  <Title text="Our menu" />
  <div className="title-underline" />
  <Categories categories={categories} callback={selectCategory}/>
  <Menu items={items}/>
  </section>
  ;
};
export default App;
