import React from 'react';

import styles from "./ToDoItem.module.css";

/* Initializing `ToDoItem()` function, which builds `<ToDoItem>` component; note passage 
of "props" as function parameter, which allows function/component to make use of value(s), 
function(s), etc. passed as prop value(s) into `<ToDoItem>` invocation in "ToDoList.js": */
const ToDoItem = props => {

  /* `deleteHandler()` executes whenever "to-do item" on front-end is clicked: */
  const deleteHandler = () => {

    /* So as to ensure that correct "to-do" item is deleted/un-rendered upon user click, 
    passing JavaScript object containing "task category" and "task ID" to `deleteItemHandler()` 
    function in "App.js" by way of `onDelete` prop: */
    let toDoToBeDeleted = {category: props.category, id: props.id}
    props.onDelete(toDoToBeDeleted);
  };

  return (
    /* Whenever a `<ToDoItem>` instance rendered on front-end is clicked, `deleteHandler()` 
    function executes; using template literal-facilitated string interpolation to dynamically 
    change styling of each `<ToDoItem>` instance based on said item's `category` value: */
    <li className={`${styles["task-item"]} 
      ${props.category === "UrgentImportant" && styles["important-urgent"]} 
      ${props.category === "UrgentNotImportant" && styles["urgent-not-important"]}
      ${props.category === "NotUrgentButImportant" && styles["not-urgent-but-important"]}
      ${props.category === "NotUrgentNotImportant" && styles["not-urgent-not-important"]}`} 
      onClick={deleteHandler}>
        {/* Declaring `{props.children}` ensures that value assumed by `{task.task}` (passed 
        between opening and closing tags of `<ToDoItem>` invocation in "ToDoList.js") for a 
        given `<ToDoItem>` invocation will properly render on app's front-end: */}
        {props.children}
    </li>
  );
};

export default ToDoItem;
