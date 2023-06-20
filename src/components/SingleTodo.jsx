import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCheck,
  faEdit,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deletedTodo, toggleForm } from "../store/features/todo/todoSlice";

const SingleTodo = (props) => {
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="singleTodoContainer">
      <div className={done ? "forLineThrough" : "msg"}>{props.name}</div>
      <div className="icons">
        <FontAwesomeIcon
          onClick={() => setDone(!done)}
          className="icon1"
          icon={faSquareCheck}
        />
        <FontAwesomeIcon
          onClick={() =>
            dispatch(
              toggleForm({
                id: props.id,
                title: props.name,
              })
            )
          }
          className="icon2"
          icon={faEdit}
        />
        <FontAwesomeIcon
          onClick={() => dispatch(deletedTodo(props.id))}
          className="icon3"
          icon={faTrashCan}
        />
      </div>
    </div>
  );
};

export default SingleTodo;
