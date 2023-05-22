import React, { useState } from "react";

import "../../assets/CSS/taskTrackerStyles.css";

function TaskTrackerApp() {
  //   const [taskname, setTaskName] = useState("");
  //   const [taskDesc, setTaskDesc] = useState("");
  const [tasktraker, setTasktraker] = useState({
    taskname: "",
    taskDesc: "",
  });
  const [tasks, setTasks] = useState([]); // createing usestate with initialstate []

  /**
   * * handleAdd function updates the tasks array
   * * with the current value of the tasktraker object and
   * * resets the values of the tasktraker object to empty strings.
   */
  const handleAdd = () => {
    // tasks state variable holds an object
    // { ...tasks } spread syntax ensures that the state object is replaced rather than mutated.
    setTasks([...tasks, tasktraker]);
    setTasktraker({
      taskname: "",
      taskDesc: "",
    });
  };
  const [litoggle, setlitoggle] = useState(false);
  // using useState to toggle class
  const listAppereance = () => {
    setlitoggle(!litoggle);
  };
  // deleting a listitems

  const deleteitems = (item) => {
    setTasks(tasks.filter((task) => task.taskname !== item));
    // update task state by calling setTask
    // filter method to create a new array
    // that includes only the tasks for which the callback function returns true
  };
  return (
    <div>
      <h1>TaskTrackerApp</h1>

      {/* 2 input  */}
      <div className="trackerForm">
        <form>
          {/* <label>Task Name </label> */}
          <input
            name={tasktraker.taskname}
            type="name"
            placeholder="Task Name"
            required
            onChange={(e) => {
              setTasktraker({
                ...tasktraker,
                taskname: e.target.value,
              });
            }}
          />
          {/* <label>Task Description </label> */}
          <textarea
            name={tasktraker.taskDesc}
            type="textarea"
            placeholder="Task Description"
            onChange={(e) => {
              setTasktraker({
                ...tasktraker,
                taskDesc: e.target.value,
              });
            }}
          />

          <button
            type="submit"
            onClick={handleAdd}
            disabled={tasktraker.taskname === "" || tasktraker.taskDesc === ""}
          >
            ADD
          </button>
        </form>
      </div>
      {/* **********************************************************************/}
      <div >
        {/* another div: contains ul>li */}
        {/* <div></div> */}
        <div>
          {tasks.map((task) => (
            <div className="listitems" key={task.taskname}>
              <div>
                <ul>
                  <li
                    placeholder={task.taskname}
                    className={litoggle ? "li-toggle" : ""}
                    onClick={listAppereance}
                  >
                    <span>Task Name :</span> {task.taskname}<br/>
                    <span>Task Description:</span>{task.taskDesc}
                     
                  </li>
                </ul>
              </div>
              <div className="bttn">
                <button
                  placeholder="X"
                  onClick={() => {
                    deleteitems(task.taskname);
                  }}
                >
                  X
                </button>
              </div>

              {/*  */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TaskTrackerApp;
