import React from "react";

function TodoItem({ target, editText, setEditText, todo, setTodo, ShowAlert }) {
  const editHandler = () => {
    setEditText({
      ...editText,
      title: target.title,
      description: target.description,
      tag: target.tag,
      date: new Date().toLocaleDateString(),
      id: target.id,
    });
  };
  const deleteHandler = () => {
    setTodo(todo.filter((el) => el.id !== target.id));
    ShowAlert("Deleted");
  };

  const isDueDatePassed = new Date(target.dueDate) < new Date(target.date);

  let currentTime = new Date().getTime();
  let currentDate = new Date().toJSON().slice(0, 10);

  return (
    <div
      className={`note card ${
        isDueDatePassed ? "border-danger card m-2 shadow" : "card m-2 shadow"
      }`}
      style={{
        width: "20rem",
        backgroundColor: "white",
       
        boxShadow:
          "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
      }}
    >
      <div className="card-body d-flex flex-column justify-content-between text-left">
        <div className="d-flex justify-content-between align-items-center">
          <h6 style={{ color: "#F4B400", margin: 0 }}>{target.tag}</h6>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#F4B400" 
              className="bi bi-pencil"
              viewBox="0 0 16 16"
              style={{ cursor: "pointer", marginRight: "10px" }}
              onClick={editHandler}
            >
              <path d="M0 12.536l2.614-2.616 6.95 6.951-2.616 2.615H0v-6.95z" />
              <path
                fillRule="evenodd"
                d="M11.293 2.293a1 1 0 0 1 1.414 0l1.293 1.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.306-1.307l1-3a1 1 0 0 1 .242-.391l8-8z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#EB5757" 
              className="bi bi-trash"
              viewBox="0 0 16 16"
              style={{ cursor: "pointer" }}
              onClick={deleteHandler}
            >
              <path
                fillRule="evenodd"
                d="M5.293 1.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L9.586 8 5.293 3.707a1 1 0 0 1 0-1.414z"
              />
              <path
                fillRule="evenodd"
                d="M1.293 4.293a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414L6.414 8l4.293 4.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414L3.586 8 1.293 5.707a1 1 0 0 1 0-1.414z"
              />
            </svg>
          </div>
        </div>
        <h4 className="card-title border-bottom pb-2" style={{ color: "#333" }}>
          {target.title}
        </h4>
        <p className="card-text" style={{ color: "#333" }}>
          {target.description}
        </p>
        <p className="card-text mt-2" style={{ color: "#F4B400" }}>
          Due Date: {target.dueDate}
        </p>
        <small className="text-muted" style={{ color: "#666" }}>
          Last Updated {currentDate} (
          {new Date(currentTime).toLocaleTimeString()})
        </small>
      </div>
    </div>
  );
}

export default TodoItem;
