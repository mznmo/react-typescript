import { useRef, useContext } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const textInput = useRef<HTMLInputElement>(null); //HTMLInputElement because using ref at an input

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();

    const enteredText = textInput.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredText);
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={textInput} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
