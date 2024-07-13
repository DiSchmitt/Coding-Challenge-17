// U4888-2664 - Dawson Schmitt
// Task 1: Create an App Component: The main component that orchestrates the rendering of the entire application.
import React from 'react';
import './App.css'; 
import FancyText from './FancyText'; 
import TaskGenerator from './TaskGenerator'; 

const App = () => {
  return (
    <div className="App">
{/*Use the FancyText Component to display the application's main title.*/}
      <FancyText
        title="Task Management and Motivation App"
        text="In today’s fast-paced work environments, maintaining motivation and managing tasks efficiently are key to productivity. Use this project to help!"
      />
{/*Integrate the TaskGenerator Component to manage and display tasks. */}
      <TaskGenerator />
      <footer className="footer">
        <p> Copyright © 2024 MeMyselfAndInc. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;