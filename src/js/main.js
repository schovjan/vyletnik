var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;


APP = require('./components/app').APP;

var Logout = require('./components/auth/app-logout');
var Login = require('./components/auth/app-login');

var About = require('./components/about/app-about');
//var Dashboard = require('./components/dashboard/app-dashboard');
var TripList = require('./components/trip/trip-list');
var TripDetail = require('./components/trip/trip-detail');

//<Route name="dashboard" handler={Dashboard}/>
    
var routes = (
  <Route handler={APP}>
    <Route name="login" handler={Login}/>
    <Route name="logout" handler={Logout}/>
    <Route name="about" handler={About}/>
    <Route name="map" handler={About}/>
    <Route name="trip-list" handler={TripList}/>
    <Route name="trip-add" handler={TripDetail}/>
    <Route name="trip" path="/trip/:id" handler={TripDetail}/>

  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('container'));
});
