import React from "react";

const TodoItems = ({ deleteItem, entries }) => (
  <ul className="theList">
    {entries.map(item => (
      <Task item={item} deleteItem={deleteItem} />
    ))}
  </ul>
);

export default TodoItems;

const Task = ({ item, deleteItem }) => (
  <li key={item.key} onClick={() => deleteItem(item.key)}>
    {item.text}
  </li>
);
