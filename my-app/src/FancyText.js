//FancyText Component: A reusable component designed to display text with distinctive styling based on its type (title or regular text).
import React from "react";
import "./App.css";
//Accept props for title and text.
//Display the text styled differently based on the title prop.
const FancyText = ({ title, text }) => {
  return (
    <div className="fancy-text">
      {title && <h1 className="fancy-text-title">{title}</h1>}
      <p className="fancy-text-content">{text}</p>
    </div>
  );
};

export default FancyText;
//Implement CSS to differentiate between title and non-title text styles. (App.css)