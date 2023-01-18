import React from "react";

function TextSection(props) {
  return (
    <div>
      <p>{props.title}</p>
      <h2>{props.desc}</h2>
    </div>
  );
}

export default TextSection;
