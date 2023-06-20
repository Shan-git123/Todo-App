import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const BeforeTodoList = () => {
  return (
    <div>
      <h1 className="initialText">Enter Your First Todo Item</h1>
      <div className="homeIcon">
        <FontAwesomeIcon className="icon4" icon={faThumbsUp} />
      </div>
    </div>
  );
};

export default BeforeTodoList;
