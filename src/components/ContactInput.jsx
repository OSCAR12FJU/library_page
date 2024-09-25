import React from "react";

const ContactInput = ({keyFor, label, type, name, id, placeholder, value, onChange}) =>(
    // <div className="col-md-12 col-lg-10 mb-3 pl-0">

     <div className="mb-3">
     <label for={keyFor} class="form-label">{label}</label>
     <input type={type} className="form-control" name={name} id={name} placeholder={placeholder} aria-describedby="nameHelp" value={value}  onChange={onChange} />
 </div>
)

export default ContactInput;