import React from "react";
import styles from './Button.module.css';

const Button = props => {
  return (
    /* Note declaration of `{props.children}` as this `<button>` element's content, 
    which ensures that "Add Task" text (passed between opening and closing tags 
    of `<Button>` invocation in "ToDoInput.js") for a given `<Button>` invocation 
    will properly render on app's front-end: */
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
