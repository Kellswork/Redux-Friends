import React from 'react';
import { NavLink } from 'react-router-dom';


export default function NavBar() {
    return (
        <div>
           <NavLink to='/friends'>View Friends</NavLink> 
           <NavLink to='/friend_form'>Add Friend</NavLink> 
        </div>
    )
}
