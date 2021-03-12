import React, { Component } from 'react';
import './styles/App.css';
import ListUsers from './containers/listUsers'
import CreateOrEditUser from './containers/createAccount'
import { BrowserRouter, Switch, Route } from 'react-router-dom' 

class App extends Component {
  constructor(props) {
    super(props);        // creates entity

    if (localStorage.getItem('users') == null) {
      fetch("https://private-21e8de-rafaellucio.apiary-mock.com/users", {
        "method": "GET",
      })
        .then(response => response.json())
        .then(response => {
          localStorage.setItem('users', JSON.stringify(response))
        })
        .catch(err => {
          alert(err);
        });
    }
  };
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact={true} component={ListUsers} />
            <Route path="/create-edit/:id" component={CreateOrEditUser} />
          </Switch>
        </ BrowserRouter>
      </div>
    );
  }
}

export default App;