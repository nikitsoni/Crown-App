import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from '../src/Pages/homepage/homepage.component';
import ShopPage from '../src/Pages/Shop/shoppage.component';
import Header from './Component/Header/header.component'
import SignInAndSignOutPage from './Pages/sign-in-sign-out/sign-in-sign-out.comonent';
import {auth, createUserProfileDocument} from '../src/firebase/firebase.utils';
 


class App extends React.Component {

  constructor(){
    super();

    this.state = {
      currentUser : null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
    return (
      <div className="App">
      <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignOutPage} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
