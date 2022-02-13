import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/usefetching";

function App() {

  const [tasks, setTasks] = useState([]);
  const { fetchTask, isLoading, error } = useHttp();

  useEffect(() => {

    const transformTasks = (data) => {
      const loadedTasks = [];
      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }
      setTasks(loadedTasks);
    };

    fetchTask(
      { url: "https://tasks-618c3-default-rtdb.firebaseio.com/tasks.json" },
      transformTasks
    );

  }, [fetchTask]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks items={tasks} loading={isLoading} error={error} />
    </React.Fragment>
  );
}

export default App;
