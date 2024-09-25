import React from "react";

const LoginInput = ({type, name, id, placeholder, value, onChange}) =>(
   <div className="mb-3">
     <input type={type} className="form-control" placeholder={placeholder} id={id} aria-describedby="emailHelp" name={name} value={value} onChange={onChange} required/>
   </div>
)

export default LoginInput;