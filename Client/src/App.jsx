import "./App.css";
import { Create } from "./components/CreateTodo/Create";
import { Header } from "./components/Header/Header";
import { List } from "./components/List.jsx/List";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <Create />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
