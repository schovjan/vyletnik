/** @jsx React.DOM */
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var auth = require('../../stores/app-auth'); // TODO / USE DISPATCHER & ACTIONS
var Login = require('../auth/app-login');
var AppActions = require('../../actions/app-actions.js');
var AuthStore = require('../../stores/app-auth.js');
var Link = Router.Link;


var Header = React.createClass({
  getInitialState: function () {
    return AuthStore.getState();
  },
  setStateOnAuth: function (loggedIn) {
    this.setState(AuthStore.getState());
  },
  componentWillMount: function () {
    AuthStore.authOnChangeHeader(this.setStateOnAuth);
  },
  render: function () {
    //<li><Link to="dashboard">Schedule Dashboard</Link></li>
    var loginOrOut = this.state.loggedIn ?
      <Link to="logout">Odhlásit</Link> :
      <Link to="login">Přihlásit</Link>;
    return (
      <div>
        <h1 className="breadcrumbs">Výletník React</h1>
        <ul className="nav nav-tabs">
          <li>{loginOrOut}</li>
          <li><Link to="about">O webu</Link></li>
          <li><Link to="trip-list">Výlety</Link></li>
          <li><Link to="map">Mapa</Link></li>
          <li><Link to="trip-add">Výlet nový</Link></li>
        </ul>
        <br/>
      </div>
    );
  }
});




module.exports = Header;



