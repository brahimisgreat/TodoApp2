import "./Create.css";
import circle from "../../assets/circle.svg";
import { useState } from "react";

export const Create = () => {
  return (
    <div className="create">
      <img src={circle} />
      <input type="text" placeholder="Create a new todo..." />
    </div>
  );
};
