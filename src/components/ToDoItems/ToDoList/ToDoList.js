import React from 'react';

import ToDoItem from '../ToDoItem/ToDoItem';
import styles from "./ToDoList.module.css";

/* Initializing `ToDoList()` function, which builds `<ToDoList />` component; note passage 
of "props" as function parameter, which allows function/component to make use of value(s), 
function(s), etc. passed as prop value(s) into `<ToDoList />` invocation in "App.js": */
const ToDoList = props => {
  /* If any `<ToDoList />` invocation's associated state variable (containing "to-do items" 
  for a particular quadrant) has `.length` value of 0, then message indicating such is 
  rendered on front-end while leaving other "to-do item"-containing quadrants "intact": */
  if(props.items.length === 0) {
    return (
      <ul className={styles["empty-task-list"]}>
        No outstanding tasks for this section!
      </ul>
    )
  }else{
    return (
      /* Note how `<ToDoList />` is structured as unordered list: */
      <ul className={styles["task-list"]}>
        {/* Map each "to-do" item in arrays contained in state variables in "App.js" to an 
        individual `<ToDoItem>` instance (additionally, pass `deleteItemHandler()` function - 
        defined in "App.js" - as value for `onDelete` prop within all `<ToDoItem>` instances): */}
        {props.items.map(task => (
          /* Note necessity of `{task.task}`, which ensures that text/content for each "to-do item" 
          does render on front-end: */
          <ToDoItem
            key={task.id}
            id={task.id}
            category={task.category}
            onDelete={props.onDeleteItem}
          >
            {task.task}
          </ToDoItem>
        ))}
      </ul>
  );
}};

export default ToDoList;
