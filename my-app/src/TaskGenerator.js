//TaskGenerator Component: Displays the current task along with a motivational message.
import React, { useState } from 'react';
import FancyText from './FancyText';
import tasks from './tasks'; //Import tasks from tasks.js.
import "./App.css";

const completedMessages = [
  "Great work, keep it up!",
  "Awesome job, don't stop now!",
  "That's another one finished!",
];

const pendingMessages = [
  "Just start the task already.",
  "You are making it harder than it needs to be.",
  "Stop procrastinating, You can do it!",
];

const TaskGenerator = () => {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [tasksList, setTasksList] = useState(tasks);

  const handleNextTask = () => {
    if (currentTaskIndex < tasksList.length - 1) {
      setCurrentTaskIndex(prevIndex => prevIndex + 1);
    }
  };

  const handlePrevTask = () => {
    if (currentTaskIndex > 0) {
      setCurrentTaskIndex(prevIndex => prevIndex - 1);
    }
  };
//Implement a feature to mark tasks as completed, updating the isCompleted status within the tasks array.
  const handleCompleteTask = (taskId) => {
    const updatedTasks = tasksList.map(task =>
      task.id === taskId ? { ...task, isCompleted: true } : task
    );
    setTasksList(updatedTasks);
  };

  const currentTask = tasksList[currentTaskIndex];

  const isCompleted = currentTask && currentTask.isCompleted;

  const randomMessage = isCompleted
    ? completedMessages[Math.floor(Math.random() * completedMessages.length)]
    : pendingMessages[Math.floor(Math.random() * pendingMessages.length)];
//Display one task at a time along with its completion status ("Pending" or "Completed ✔").
  return (
    <div className="task-generator">
      <h2>
        Task {currentTaskIndex + 1} of {tasksList.length}
      </h2>

      {currentTask && (
        <div>
          <h3>{currentTask.name}</h3>
          <p>Status: {currentTask.isCompleted ? "Completed ✔" : "Pending"}</p>

          {!currentTask.isCompleted && (
            <button onClick={() => handleCompleteTask(currentTask.id)}>
              Mark as Completed
            </button>
          )}
        </div>
      )}
      <div className="navigation-buttons">
     {/* Include a button to navigate to the next task.
(and to the previous one) */}
        <button onClick={handlePrevTask} disabled={currentTaskIndex === 0}>
          Previous Task
        </button>
        <button
          onClick={handleNextTask}
          disabled={currentTaskIndex === tasksList.length - 1}
        >
          Next Task
        </button>
      </div>
{/*Use the FancyText Component to display motivational messages dynamically.*/}
      <FancyText title="Motivational Message" text={randomMessage} />
    </div>
  );
};

export default TaskGenerator;