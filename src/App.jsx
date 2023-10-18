import React, { useState, useEffect } from "react";
import CreateTodo from "./Components/CreateTodo";
import TodoItem from "./Components/TodoItem";
import UpdateTodo from "./Components/UpdateTodo";

function App() {
  const [todo, setTodo] = useState(
    localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : []
  );
  const [search, setSearch] = useState("");
  const [alert, setAlert] = useState("");

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  const [editText, setEditText] = useState({
    title: "",
    description: "",
    tag: "",
    date: "",
  });

  const ShowAlert = (s) => {
    setAlert("Todo has been successfully " + s);
    setTimeout(() => {
      setAlert("");
    }, 3000);
  };

  return (
    <div className="overflow-hidden">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <img
            src="/My Notes-logos_white.png"
            alt="My Notes"
            className="navbar-brand"
            style={{ height: "50px" }}
          />
          <div className="d-flex align-items-center">
            <input
              className="form-control shadow-none "
              name="search"
              value={search}
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
              autoComplete="off"
            />
          </div>
        </div>
      </nav>

      {alert && (
        <div
          className="alert alert-success position-absolute bottom-0 end-0 m-4"
          style={{ zIndex: "500" }}
        >
          {alert}
        </div>
      )}

      <CreateTodo todo={todo} setTodo={setTodo} ShowAlert={ShowAlert} />
      <UpdateTodo
        editText={editText}
        setEditText={setEditText}
        todo={todo}
        setTodo={setTodo}
        ShowAlert={ShowAlert}
      />

      <div className="row justify-content-center">
        <h1
          className="text-center mt-5"
          style={{ color: "blue", fontSize: "24px" }}
        >
          {todo.length === 0 && <span>No Notes Found</span>}
        </h1>
        {todo
          .filter((target) => {
            const titleMatch = target.title
              .toLowerCase()
              .includes(search.toLowerCase());
            const tagMatch = target.tag
              .toLowerCase()
              .includes(search.toLowerCase());

            return titleMatch || tagMatch ? target : null;
          })
          .map((target) => {
            return (
              <TodoItem
                key={target.id}
                target={target}
                editText={editText}
                setEditText={setEditText}
                todo={todo}
                setTodo={setTodo}
                ShowAlert={ShowAlert}
              />
            );
          })}
      </div>

      <button
        type="button"
        className="btn btn-dark rounded-circle shadow-sm p-0"
        style={{
          position: "fixed",
          bottom: "30px",
          right: "50px",
          width: "60px",
          height: "60px",
        }}
        data-bs-toggle="modal"
        data-bs-target="#createNotes"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-plus-lg"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
          />
        </svg>
      </button>
    </div>
  );
}
export default App;
