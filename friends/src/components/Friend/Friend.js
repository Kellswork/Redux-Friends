import React from "react";
import "./Friend.css";
import { connect } from "react-redux";
import { deleteFriend } from "../../actions";

function Friend(props) {
  return (
    <div className="friend">
      <h2>{props.friend.name}</h2>
      <p>{props.friend.age} years</p>
      <p>{props.friend.email}</p>
      <div className='buttons'>
        <button
          className="delete-btn"
          onClick={() => props.deleteFriend(props.friend.id)}
        >
          Delete
        </button>
        <button className="edit-btn">Edit</button>
      </div>
    </div>
  );
}

export default connect(
  null,
  { deleteFriend }
)(Friend);
