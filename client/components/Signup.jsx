import React from "react";

const Signup = props => {
    console.log(props)
  return (
    <div>
      First Name: <input name="firstName" type="text" onChange={props.firstName} />
      Last Name: <input name="lastName" type="text" onChange={props.lastName} />
      Email: <input name="email" type="text" onChange={props.email} />
      Username: <input name="username" type="text" onChange={props.usrername} />
      Password: <input name="password" type="password" onChange={props.password} />
      <button onClick={props.signupButton}>Sign up</button>
    </div>
  );
};
export default Signup;
