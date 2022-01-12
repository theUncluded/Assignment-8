import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';

class UserProfile extends Component {
  render() {
    return (
        <div>
          <h1>User Profile</h1>

          <Link to="/">HOME</Link>

          <div>Username: {this.props.userName}</div>
          <div>Member Since: {this.props.memberSince}</div>
        </div>
    );
  }
}

export default UserProfile;