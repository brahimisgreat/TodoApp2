import React from "react";
import "./Tasks.css";
import circle from "../assets/circle.svg";
import check from "../assets/check.svg";
import cross from "../assets/icon-cross.svg";

export const Tasks = ({todo, key}) => {
  return (
    <div className="tasks">
      <img  className='circle' src={circle} />
      <p>{todo}</p>
      <img  className='cross' src={cross} />
    </div>
  );
};
