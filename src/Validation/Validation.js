import React from "react";

const validation = props => {
  let validationText = "Message Is Too Short!!!";

  if (props.inputLength > 5) {
    validationText = "Message Long Enough";
  }

  return (
    <div>
      <p>{validationText}</p>
    </div>
  );
};

export default validation;
