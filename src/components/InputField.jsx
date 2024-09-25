import React from "react";

const InputField = ({label, type, id, name, value, onChange, required, feedback}) =>(
    <div className="col-md-12 col-lg-10 mb-3 pl-0">
     <label htmlFor={id} className="form-label">{label}</label>
     <input 
      type={type}
      className="form-control"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}/>
      <div className={required ? "valid-feedback" : "invalid:feedback"}>{feedback}</div>
    </div>
)

export default InputField;