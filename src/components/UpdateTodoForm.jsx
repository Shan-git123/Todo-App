import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatedTodo } from "../store/features/todo/todoSlice";

const UpdateTodoForm = () => {
  const updateTodo = useSelector((state) => state.todos.updateTodo);
  const [update, setUpdate] = useState(updateTodo.title);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (/^\s*$/.test(update)) {
      alert("Please Enter your Todo");
      setUpdate("");
      return;
    } else {
      dispatch(
        updatedTodo({
          id: updateTodo.id,
          title: update,
        })
      );
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="addContainer">
        <input
          value={update}
          onChange={(e) => setUpdate(e.target.value)}
          type="text"
          className="addTodoInput"
          placeholder="Update Todo"
        ></input>
        <button className="updateBtn">Update</button>
      </form>
    </div>
  );
};

export default UpdateTodoForm;
