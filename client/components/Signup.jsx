import React from "react";

const Signup = props => {
    console.log(props)
  return (
    <div className="formHolder">
      <input name="firstName" type="text" placeholder="First Name" onChange={props.onChangeInput} />
      <input name="lastName" type="text" placeholder="Last Name" onChange={props.onChangeInput} />
      <input name="email" type="text" placeholder="Email" onChange={props.onChangeInput} />
      <input name="username" type="text" placeholder="Username" onChange={props.onChangeInput} />
      <input name="password" type="password" placeholder="Password" onChange={props.onChangeInput} />
      <div className="button" onClick={props.signupButton}>Submit</div>
    </div>
  );
};
export default Signup;