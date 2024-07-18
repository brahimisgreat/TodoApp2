import "./List.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Tasks } from "../Tasks";

export const List = () => {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000");
      const data = await response.json();
      setTodos(data);
    }

    fetchData();
  }, []);
  console.log(todos);

  return (
    <div className="container">
      <div className="list">
      {todos.map((todo) => {
        return <Tasks key={todo.id} todo={todo.task} />;
      })}
      </div>
        <div className="links">
             <Link>All</Link>
             <Link>Active</Link>
             <Link>Completed</Link>
        </div>
    </div>
  );
};
