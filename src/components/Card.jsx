import React from "react";
import AddTodoForm from "./AddTodoForm";
import UpdateTodoForm from "./UpdateTodoForm";
import { useSelector, useDispatch } from "react-redux";
import SingleTodo from "./SingleTodo";
import BeforeTodoList from "./BeforeTodoList";
import { clearAll } from "../store/features/todo/todoSlice";

const Card = () => {
  const myTodos = useSelector((state) => state.todos.todos);
  const toggleForm1 = useSelector((state) => state.todos.toggleForm);
  const dispatch = useDispatch();
  return (
    <div className="mainCard">
      <div className="firstSec">
        <h1 className="title">My Todo List</h1>
        <div className="addWidth">
          {toggleForm1 ? <AddTodoForm /> : <UpdateTodoForm />}
        </div>
        {myTodos.length === 0 ? (
          <BeforeTodoList />
        ) : (
          <div className="singleTodoMainContainer">
            <ul className="myList">
              {myTodos.map((todo) => (
                <li key={todo.id}>
                  <SingleTodo name={todo.title} id={todo.id} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <button className="card_btn" onClick={() => dispatch(clearAll())}>
        Clear All
      </button>
    </div>
  );
};

export default Card;
