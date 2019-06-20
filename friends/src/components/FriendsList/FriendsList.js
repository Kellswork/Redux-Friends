import './FriendsList.css'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import Friend from '../Friend/Friend';
import { fetchFriends } from '../../actions/';


class FriendsList extends Component {

    componentDidMount() {
        this.props.fetchFriends();

    }

    render() {
        const friendsList = this.props.friends || [];

        return (
            <div>
                {friendsList.map(friend => <Friend key={friend.id} friend={friend} />)}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        friends: state.friendsReducer.friends

    }
}
export default connect(mapStateToProps, { fetchFriends })(FriendsList);

