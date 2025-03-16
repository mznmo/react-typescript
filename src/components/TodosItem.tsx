import React from "react";
import classes from "./TodosItem.module.css";

const TodosItem: React.FC<{
  text: string;
  delete: () => void;
}> = (props) => {
  return (
    <li className={classes.item} onClick={props.delete}>
      {props.text}
    </li>
  );
};

export default TodosItem;
