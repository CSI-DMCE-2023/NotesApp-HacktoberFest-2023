import React, { useState, useEffect } from "react";
import CreateTodo from "./Components/CreateTodo";
import TodoItem from "./Components/Todo/TodoItem";
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
      <nav className="navbar d-flex justify-content-between align-items-center px-3" style={{backgroundColor:"#f34c4c"}}>
        <img style={{height: '100px'}} src="/My Notes-logos_white.png" alt="My Notes" />
        <div>
          <input
            className="form-control shadow-none"
            name="search"
            value={search}
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            autoComplete="off"
          />
        </div>
      </nav>
      {alert && (
        <div
          className="alert alert-success position-absolute start-50 translate-middle"
          style={{ zIndex: "500", top: "4vh" }}
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
      <div className="justify-content-center mx-5 d-flex flex-wrap my-4">
        <h1 className="text-center mt-5">
          {todo.length === 0 && "No Notes Found"}
        </h1>
        {todo
          .filter((target) => {
            if (target.title.toLowerCase().includes(search.toLowerCase())) {
              return target;
            } else if (
              target.tag.toLowerCase().includes(search.toLowerCase())
            ) {
              return target;
            } else {
              return null;
            }
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
        className="btn rounded-circle shadow-sm p-0"
        style={{
          position: "fixed",
          bottom: "30px",
          right: "50px",
          width: "60px",
          height: "60px",
          color:"white",
          backgroundColor:"#ff7400"
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
