import React from "react";

const Radio = ({ pergunta, options, id, onChange, value }) => {
  const myStyle = {
    border: "2px solid black",
    padding: "0.5rem",
    marginBottom: "1rem",
    display: "flex",
  };

  return (
    <fildset style={myStyle}>
      <legend>{pergunta}</legend>
      {options.map((option) => (
        <label key={option} htmlFor=''>
          <input
            checked={value === option}
            type='radio'
            value={option}
            name=''
            id={id}
            onChange={onChange}
          />
          {option}
        </label>
      ))}
    </fildset>
  );
};

export default Radio;
