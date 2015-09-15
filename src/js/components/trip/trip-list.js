/** @jsx React.DOM */
var React = require('react');
var Router = require('react-router');
var Login = require('../auth/app-login');
var AuthStore = require('../../stores/app-auth.js');
var TripStore = require('../../stores/app-trip.js');
var AuthenticationMixin = require('../../mixins/AuthenticationMixin.js');
var Link = Router.Link;


function getScheduleList() {
  return { scheduleList:  TripStore.getScheduleList()}
}

var Dashboard = React.createClass({
  mixins: [ AuthenticationMixin ],
  getInitialState: function() {
    return getScheduleList();
  },
  render: function () {
    var token = AuthStore.authGetToken();
    var scheduleListItems = this.state.scheduleList.map(function(item,i){
      return <tr key={i}>
      <td><Link to="trip" params={{id: item.id}}><button type="button" className="btn btn-default btn-sm" aria-label="Left Align"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></button></Link></td>
      <td>{item.name}</td>
      <td>{item.url}</td>
      <td>{item.note}</td>
      <td><button type="button" className="btn btn-default btn-sm" aria-label="Left Align"><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></button></td>
      </tr>
    });
    return (
      <div>
        <h1>Výlety</h1>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th></th>
              <th>Název</th>
              <th>Odkaz</th>
              <th>Poznámka</th>
              <th><button type="button" className="btn btn-default btn-sm" aria-label="Left Align"><span className="glyphicon glyphicon-plus" aria-hidden="true"></span>Nový záznam</button></th>
            </tr>
          </thead>
          <tbody>
          {scheduleListItems}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = Dashboard;
