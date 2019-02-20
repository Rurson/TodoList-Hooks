import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoItems from "./TodoItems";

function App() {
  const [items, setItems] = useState([]);
  const [currentItem, setcurrentItem] = useState({ text: "", key: "" });
  const inputElement = React.createRef();

  const addItem = e => {
    e.preventDefault();
    const newItem = currentItem;
    if (newItem.text !== "") {
      setItems([...items, newItem]);
      setcurrentItem({ text: "", key: "" });
    }
  };

  const handleInput = e => {
    const itemText = e.target.value;
    setcurrentItem({ text: itemText, key: Date.now() });
  };
  const deleteItem = key => {
    const filteredItems = items.filter(item => {
      return item.key !== key;
    });
    setItems(filteredItems);
  };
  return (
    <div className="App">
      <TodoList
        addItem={addItem}
        inputElement={inputElement}
        handleInput={handleInput}
        currentItem={currentItem}
      />
      <TodoItems entries={items} deleteItem={deleteItem} />
    </div>
  );
}
export default App;
