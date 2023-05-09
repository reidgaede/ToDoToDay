import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import styles from "./ToDoInput.module.css";

/* Initializing `ToDoInput()` function, which builds `<ToDoInput />` component; 
note passage of "props" as function parameter, which allows function/component to make 
use of value(s), function(s), etc. passed as prop value(s) into `<ToDoInput />` 
invocation in "App.js": */
const ToDoInput = props => {

  /* Initializing state variables and "state-updating functions"; (respectively) passing 
  "enteredValue" an empty string as its initial value and "enteredCategory" "UrgentImportant" 
  as its initial value: */
  const [enteredValue, setEnteredValue] = useState('');
  const [enteredCategory, setEnteredCategory] = useState("UrgentImportant");

  /* Initializing "isValid" state variable and `setIsValid()` "state-updating variable", 
  and passing "isValid" `true` as its initial value (said state variable will be used to 
  evaluate whether input user has entered into the lone `<input>` element in this Java-
  Script file is "valid"): */
  const [isValid, setIsValid] = useState(true);

  /* If, following detection of user keystroke in this file's sole `<input>` element, the 
  "trimmed" length of said input is greater than zero, assign "isValid" state variable a 
  value of `true` to indicate that said `<input>` element currently contains "valid" 
  input: */
  const toDoInputChangeHandler = event => {
    if(event.target.value.trim().length > 0) {
      setIsValid(true)
    }
    /* Regardless of value contained in "isValid" state variable, update value contained 
    in "enteredValue" state variable to value that user has inputted into this file's sole 
    `<input>` element: */
    setEnteredValue(event.target.value);
  };

  /* Whenever new `<option>` value is selected within sole `<select>` element in 
  "ToDoInput.js", invoke `categoryChangeHandler()` function so that value contained within 
  "enteredCategory" state variable is updated with new, user-selected value: */
  const categoryChangeHandler = (event) => {
      setEnteredCategory(event.target.value);
  };

  /* Whenever "Add Task" button on front-end clicked (...): */
  const formSubmitHandler = event => {
    /* Note use of `event.preventDefault();` to prevent page from refreshing upon "form 
    submission" (if page were allowed to refresh, then all user-submitted "to-do tasks" 
    would be "deleted" because this React app is not connected to any database: */
    event.preventDefault();

    /* If "trimmed" length of input in this file's sole `<input>` element equals zero, 
    assign "isValid" state variable a value of `false` to indicate that said `<input>` 
    element currently contains "invalid" input, and then conclude `formSubmitHandler()` 
    function execution: */
    if(enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    
    const taskData = {
      task: enteredValue,
      category: enteredCategory,
    };

    props.onAddTask(taskData);
    setEnteredValue("");
  };

/* Perhaps not entirely efficient, but if user attempts submission of "invalid" input, 
return same `<ToDoInput>` component, but with `<input>` element containing 
`placeholder` value that communicates error to user and disappears as soon as user 
begins typing "valid" input: */
if(isValid === false) {
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles["form-control"]} ${!isValid && styles.invalid}`}>
        <label>To-Do Item</label>
        {/* By declaring `setEnteredValue("");` on line 66, we ensure that whenever "Add 
        Task" button is clicked (given that "valid" input has been entered by user), value 
        of "enteredValue" state variable will be reset to empty string, and said value for 
        "enteredValue" will be used as default/starting value for this `<input>` field as 
        it awaits further user input: */}
        <input 
          placeholder="Enter at least one character."
          type="text" 
          maxLength="50" 
          value={enteredValue}
          onChange={toDoInputChangeHandler} 
        />
      </div>
      <div className={styles["task-category"]}>
        <label>Task Category</label>
        <select value={enteredCategory} onChange={categoryChangeHandler} required>
          <option value='UrgentImportant'>Urgent and Important</option>
          <option value='UrgentNotImportant'>Urgent but Not Important</option>
          <option value='NotUrgentButImportant'>Not Urgent but Important</option>
          <option value='NotUrgentNotImportant'>Neither Urgent Nor Important</option>
        </select>
      </div>
      {/* Invoking `<Button>` component for use as this `<form>` element's "submit" button: */}
      <Button type="submit">Add Task</Button>
    </form>
  )
}else{
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles["form-control"]} ${!isValid && styles.invalid}`}>
        <label>To-Do Item</label>
        {/* By declaring `setEnteredValue("");` on line 66, we ensure that whenever "Add 
        Task" button is clicked (given that "valid" input has been entered by user), value 
        of "enteredValue" state variable will be reset to empty string, and said value for 
        "enteredValue" will be used as default/starting value for this `<input>` field as 
        it awaits further user input: */}
        <input 
          type="text" 
          maxLength="50" 
          value={enteredValue}
          onChange={toDoInputChangeHandler} 
        />
      </div>
      <div className={styles["task-category"]}>
        <label>Task Category</label>
        <select value={enteredCategory} onChange={categoryChangeHandler} required>
          <option value='UrgentImportant'>Urgent and Important</option>
          <option value='UrgentNotImportant'>Urgent but Not Important</option>
          <option value='NotUrgentButImportant'>Not Urgent but Important</option>
          <option value='NotUrgentNotImportant'>Neither Urgent Nor Important</option>
        </select>
      </div>
      {/* Invoking `<Button>` component for use as this `<form>` element's "submit" button: */}
      <Button type="submit">Add Task</Button>
    </form>
  )};
};

export default ToDoInput;
