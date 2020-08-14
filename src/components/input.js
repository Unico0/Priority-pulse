import React from "react";

const Input = ({ name, value, onChange, placeholder, type, ...otherProps }) => {
  return (
    <div className="form-group">
      <input
        value={value}
        onChange={onChange}
        name={name}
        type={type}
        className="form-control"
        id={name}
        placeholder={placeholder}
        {...otherProps}
      />
    </div>
  );
};

export default Input;
