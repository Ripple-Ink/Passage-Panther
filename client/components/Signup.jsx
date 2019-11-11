import React from "react";

const Signup = props => {
    console.log(props)
  return (
    <div>
      First Name: <input onChange={props.firstName} type="text" />
      Last Name: <input onChange={props.lastName} type="text" />
      Email: <input onChange={props.email} type="text" />
      Username: <input onChange={props.usrername} type="text" />
      Password: <input onChange={props.password} type="text" />
      <button onClick={props.signupButton}>Sign up</button>
    </div>
  );
};
export default Signup;
