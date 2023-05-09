import styles from "./QuadrantTitleAndTaskCount.module.css";

/* `<QuadrantTitleAndTaskCount>` component consolidates each `<label>` element 
corresponding to each "task quadrant" in "App.js" with respective `<div>` element 
that contains/displays count of elements in that specific "task list": */
const QuadrantTitleAndTaskCount = (props) => {
    return (
        <div className={styles["display-handler"]}>
            <label>{props.children}</label>
            <div className={styles["task-count"]}>{props.taskList.length}</div>
        </div>
    )
};

export default QuadrantTitleAndTaskCount;