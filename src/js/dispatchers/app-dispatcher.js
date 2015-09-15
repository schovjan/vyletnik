/** @jsx React.DOM */
var React = require('react/addons');
var Dispatcher = require('./dispatcher.js');

var AppDispatcher = React.addons.update(Dispatcher.prototype, { $merge: {
  handleViewAction: function(action){
    console.log("*****start handleViewAction******");
    console.log(action);
    console.log("*****end handleViewAction******");
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    })
  },
  handleRequestAction: function(action){
    console.log("*****start handleRequestAction******");
    console.log(action);
    console.log("*****end handleRequestAction******");
    this.dispatch({
      source: 'WEB_API_ACTION',
      action: action
    })
  },
  handleRequestFbOauth: function(action){
    console.log("FACEBOOK handleRequestFbOauth");
    console.log(action);
    console.log("FACEBOOK handleRequestFbOauth");
    this.dispatch({
      source: 'FB_OAUTH_ACTION',
      action: action
    })
  },
}});

module.exports = AppDispatcher;