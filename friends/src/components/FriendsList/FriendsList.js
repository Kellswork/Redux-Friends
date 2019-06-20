import './FriendsList.css'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Friend from '../Friend/Friend';


function friends(props) {
    const friendsList = props.friends || [{
        id: 1,
        name: 'Joe',
        age: 24,
        email: 'joe@lambdaschool.com',
      }];
    return (
        friendsList.map((friend) => <Friend key={friend.id} friend={friend} />)
    )
}

friends.propTypes = {

}
const mapStateToProps = (state) => {
    return {
        friends: state.friends
    }
}
export default connect(mapStateToProps)(friends);

