import React, { useState } from "react";

function TaskTrackerApp() {
  const [taskname, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [tasktraker, setTasktraker] = useState({
    taskname : '',
    taskDesc :''
  });
  const [tasks, setTasks] = useState([]); // createing usestate with initialstate []

  const handleAdd = () => {
    /**
     *  The handleSubmit function updates the tasks array with a 
     * new task object that contains the current values of the 
     * taskname and taskDesc state variables.
     */
    setTasks([...tasks, { taskname, taskDesc }]);
    setTaskName(""); // resets the values
    setTaskDesc(""); // resets the values
  };
 
  /**
   * * "Task Name" and "Task Description".
   */
  return (
    <div>
      <h1>TaskTrackerApp</h1>

      {/* 2 input  */}
      <div>
        <label>Task Name </label>
        <input
          name={taskname}
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setTaskName(e.target.value);
          }}
        />
        <label>Task Description </label>
        <textarea
          name={taskDesc}
          type="textarea"
          placeholder="Task Description"
          onChange={(e) => setTaskDesc(e.target.value)}
        />

        <button type="submit" onClick={handleAdd}
        
        >ADD</button>
      </div>
      {/* **********************************************************************/}
      <div>
        {/* another div: contains ul>li */}
        <div></div>
        <ul>
        {tasks.map((task) => (
            <li key={task.taskname}>
              {task.taskname}: {task.taskDesc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskTrackerApp;
