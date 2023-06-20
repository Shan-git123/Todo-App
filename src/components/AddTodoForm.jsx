import { useState } from "react";
import { todoAdded } from "../store/features/todo/todoSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
const AddTodoForm = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (/^\s*$/.test(input)) {
      alert("Please Enter your Todo");
      setInput("");
      return;
    } else {
      dispatch(
        todoAdded({
          id: nanoid(),
          title: input,
        })
      );
      setInput("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="addContainer">
        <input
          type="text"
          className="addTodoInput"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add Todo"
        ></input>
        <button type="submit" className="btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodoForm;
