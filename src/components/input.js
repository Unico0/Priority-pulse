import React from "react";

const Input = ({ name, value, onChange, placeholder }) => {
  return (
    <div className="form-group">
      <input
        value={value}
        onChange={onChange}
        name={name}
        type="text"
        className="form-control"
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
