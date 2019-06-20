import "./FriendForm.css";
import React from "react";
import {connect} from "react-redux";
import { addFriend } from "../../actions";

function FriendForm(props) {
  const nameRef = React.createRef();
  const ageRef = React.createRef();
  const emailRef = React.createRef();

  const onAddFriend = e => {
    e.preventDefault();
    const userDetails = {
        name: nameRef.current.value,
        age: ageRef.current.value,
        email: emailRef.current.value,
    }
    props.addFriend(userDetails)
  };

  return (
    <form onSubmit={onAddFriend}>
      <h2>Add Friend</h2>
      <div className="login-field">
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" ref={nameRef} />
        </div>
        <div className="input-group">
          <label htmlFor="name">Age</label>
          <input type="number" name="age" ref={ageRef} />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="age" ref={emailRef} />
        </div>
        <button className="btn">Add Friend</button>
      </div>
    </form>
  );
}

export default connect(null, {addFriend})(FriendForm);
