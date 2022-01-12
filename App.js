import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home.js';
import AccountBalance from './AccountBalance'
import UserProfile from './UserProfile.js';
import LogIn from './Login.js';
import { Redirect } from 'react-router-dom'

const mockLogIn = (logInInfo) => {
  const newUser = {...this.state.currentUser}
  newUser.userName = logInInfo.userName
  this.setState({currentUser: newUser})
}

class App extends Component {
  constructor() {
    super();
  
    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      }
    }
  }

  

  render() {
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>)
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
  );
    return (
        <Router>
          <Routes>
          <Route exact path="/login" element={<LogInComponent/>}/>
          <Route exact path="/" element={<HomeComponent/>}/>
          <Route exact path="/userProfile" element={<UserProfileComponent/>}/>
          </Routes>
        </Router>
    );
  }
}

export default App;