import React, { useState } from 'react';

import QuadrantTitleAndTaskCount from './components/UI/Button/QuadrantTitleAndTaskCount';
import ToDoList from './components/ToDoItems/ToDoList/ToDoList';
import ToDoInput from './components/ToDoItems/ToDoInput/ToDoInput';
import styles from "./App.module.css";

const App = () => {
  /* Initializing state variables and "state-updating functions": */
  const [urgentAndImportantTasks, setUrgentAndImportantTasks] = useState([]);
  const [urgentNotImportantTasks, setUrgentNotImportantTasks] = useState([]);
  const [notUrgentButImportantTasks, setNotUrgentButImportantTasks] = useState([]);
  const [neitherUrgentNorImportantTasks, setNeitherUrgentNorImportantTasks] = useState([]);

  /* `addTaskHandler()` expects JavaScript object as input and "sorts" via `switch` statement 
  each user-submitted "to-do" item into its proper "quadrant": */
  const addTaskHandler = (taskData) => {
    switch(taskData.category){
      default:
        setUrgentAndImportantTasks(prevTasks => {
          const updatedTasks = [...prevTasks];
          updatedTasks.unshift({ 
            task: taskData.task, 
            category: taskData.category, 
            id: Math.random().toString() 
          });
          return updatedTasks;
        });
        break;
      case "UrgentNotImportant":
        setUrgentNotImportantTasks(prevTasks => {
          const updatedTasks = [...prevTasks];
          updatedTasks.unshift({ 
            task: taskData.task, 
            category: taskData.category, 
            id: Math.random().toString() 
          });
          return updatedTasks;
        });
        break;
      case "NotUrgentButImportant":
        setNotUrgentButImportantTasks(prevTasks => {
          const updatedTasks = [...prevTasks];
          updatedTasks.unshift({ 
            task: taskData.task, 
            category: taskData.category, 
            id: Math.random().toString() 
          });
          return updatedTasks;
        });
        break;
      case "NotUrgentNotImportant":
        setNeitherUrgentNorImportantTasks(prevTasks => {
          const updatedTasks = [...prevTasks];
          updatedTasks.unshift({ 
            task: taskData.task, 
            category: taskData.category, 
            id: Math.random().toString() 
          });
          return updatedTasks;
        });
        break;
  }};

  /* (4/30/23) `deleteItemHandler()` uses `switch` statement that allows for proper routing of 
  "to-do item" deletion request; function executes whenever "to-do" item rendered on front-end 
  is clicked: */
  const deleteItemHandler = (taskData) => {
    switch(taskData.category){
      default:
        setUrgentAndImportantTasks(prevTasks => {
          const updatedTasks = prevTasks.filter(task => task.id !== taskData.id);
          return updatedTasks;
        });
        break;
      case "UrgentNotImportant":
        setUrgentNotImportantTasks(prevTasks => {
          const updatedTasks = prevTasks.filter(task => task.id !== taskData.id);
          return updatedTasks;
        });
        break;
      case "NotUrgentButImportant":
        setNotUrgentButImportantTasks(prevTasks => {
          const updatedTasks = prevTasks.filter(task => task.id !== taskData.id);
          return updatedTasks;
        });
        break;
      case "NotUrgentNotImportant":
        setNeitherUrgentNorImportantTasks(prevTasks => {
          const updatedTasks = prevTasks.filter(task => task.id !== taskData.id);
          return updatedTasks;
        });
        break;
  }};

  /* If all "to-do item"-containing state variables have `.length` values of 0, then assign 
  "content" variable `<p>` element containing text stating such and suggesting user input/
  submit their own "to-do" items: */
  let content = (
    <h2 className={styles["no-more-tasks"]}>Congrats! You have the rest of the day to yourself 
    (...or do you?).</h2>
  );

  /* If any "to-do item"-containing state variable has `.length` value greater than 0, 
  then assign "content" variable one `<ToDoList />` component for each "quadrant" of  
  "optimized" to-do list and render any/all tasks associated with each quadrant: */
  if (urgentAndImportantTasks.length > 0 
    || urgentNotImportantTasks.length > 0 
    || notUrgentButImportantTasks.length > 0 
    || neitherUrgentNorImportantTasks.length > 0) {
    content = (
      <div className={styles["task-quadrants"]}>
        <div className={styles.quadrant} id={styles["important-urgent"]}>
          <QuadrantTitleAndTaskCount 
            taskList={urgentAndImportantTasks}>
              Urgent and Important
          </QuadrantTitleAndTaskCount>
          <ToDoList items={urgentAndImportantTasks} onDeleteItem={deleteItemHandler} />
        </div>
        <div className={styles.quadrant} id={styles["urgent-not-important"]}>
          <QuadrantTitleAndTaskCount 
            taskList={urgentNotImportantTasks}>
              Urgent but Not Important
          </QuadrantTitleAndTaskCount>
          <ToDoList items={urgentNotImportantTasks} onDeleteItem={deleteItemHandler} />
        </div>
        <div className={styles.quadrant} id={styles["not-urgent-but-important"]}>
          <QuadrantTitleAndTaskCount 
            taskList={notUrgentButImportantTasks}>
              Not Urgent but Important
          </QuadrantTitleAndTaskCount>
          <ToDoList items={notUrgentButImportantTasks} onDeleteItem={deleteItemHandler} />
        </div>
        <div className={styles.quadrant} id={styles["not-urgent-not-important"]}>
          <QuadrantTitleAndTaskCount 
            taskList={neitherUrgentNorImportantTasks}>
              Not Urgent, Not Important
          </QuadrantTitleAndTaskCount>
          <ToDoList items={neitherUrgentNorImportantTasks} onDeleteItem={deleteItemHandler} />
        </div>
      </div>
    );
  }

  /* `return`/render all HTML elements and React components that constitute "ToDoToDay" app: */
  return (
    <div>
      {/* Structure for section of front-end that solicits user input in form of new 
      "to-do items": */}
      <section id={styles["task-form"]}>
        <ToDoInput onAddTask={addTaskHandler} />
      </section>
      {/* Structure for section of front-end that renders, as `<ToDoItem>` instances, 
      each item/element in "toDoTasks" array: */}
      <section id={styles.tasks}>
        {/* Note that value stored in "content" variable dynamically changes based 
        on evaluation of `if()` statement on line 107: */}
        {content}
      </section>
    </div>
  );
};

export default App;
