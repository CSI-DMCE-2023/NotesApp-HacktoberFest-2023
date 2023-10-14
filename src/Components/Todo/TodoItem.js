import React from "react";
import "../Todo/todo.css";

function TodoItem({ target, editText, setEditText, todo, setTodo, ShowAlert }) {
  const editHandler = () => {
    setEditText({
      ...editText,
      title: target.title,
      description: target.description,
      tag: target.tag,
      date: new Date().toLocaleTimeString(),
      id: target.id,
    });
  };
  const deleteHandler = () => {
    setTodo(todo.filter((el) => el.id !== target.id));
    ShowAlert("deleted");
  };

  const formatTime = (inputTime) => {
    const [time, meridian] = inputTime.split(' '); // Split the input into time and meridian (am/pm)
    const [hours, minutes] = time.split(':'); // Split the time into hours and minutes
  
    // Determine if it's AM or PM
    const isAM = meridian.toLowerCase() === 'am';
  
    // Format the time in 12-hour format
    const formattedTime = `${hours}:${minutes} ${isAM ? 'AM' : 'PM'}`;
  
    return formattedTime;
  }

  const isDueDatePassed = new Date(target.dueDate) < new Date(target.date);

  return (
    <div
      className={`note card ${
        isDueDatePassed
          ? "border-danger card m-2 shadow-sm"
          : "card m-2 shadow-sm"
      }`}
      style={{ width: "20rem" }}
    >
    <div className="card border-0 " style={{width:"20rem", marginRight:"50px", marginBottom:"30px", borderRadius:"10px"}}>
      <div className="position-relative text-white">

        <div className="card-img-overlay three"><span className="badge badge-light text-uppercase">{target.tag}</span></div>

        <div className="card-smooth-caption">
          <div className="d-flex justify-content-between align-items-center">
            <div className="mr-auto">
              <h5 className="card-title text-white">{target.title}</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body">
        <p className="card-text">{target.description}</p>
      </div>

      <div className="card-footer">
        <div className="media align-items-center d-flex space" style={{justifyContent:"space-between"}}>
        <small className="text-muted">Last Updated {target.date}</small>
          <div className="footerright d-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-pen-fill me-2"
              viewBox="0 0 16 16"
              data-bs-toggle="modal"
              data-bs-target="#updateNotes"
              data-bs-dismiss="modal"
              style={{ cursor: "pointer" }}
              onClick={editHandler}
            >
              <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash-fill ms-2"
              viewBox="0 0 16 16"
              style={{ cursor: "pointer" }}
              onClick={deleteHandler}
            >
              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div> 
    </div>
  );
}

export default TodoItem;
