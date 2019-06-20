import React from 'react';
import { Navlink } from 'react-router-dom';


export default function navigation() {
    return (
        <div>
           <Navlink to='/friends'>View Friends</Navlink> 
           <Navlink to='/friend_form'>Add Friend</Navlink> 
        </div>
    )
}
