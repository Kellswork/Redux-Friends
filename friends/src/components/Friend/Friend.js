import React from 'react'
import './Friend.css';


export default function friend(props) {
    return (
        <div>
            <h2>{props.friend.name}</h2>
            <p>{props.friend.age}</p>
            <p>{props.friend.email}</p>
        </div>
    )
}
