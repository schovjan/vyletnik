var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var EventEmitter = require('events').EventEmitter;
var React = require('react/addons');

var CHANGE_EVENT = "change";


var _tripList = [
    {id:1, name: 'FullName #1', note: "1@aaa.com", url: ""},
    {id:2, name: 'FullName #2', note: "2@aaa.com", url: "bla"},
    {id:3, name: 'FullName #3', note: "3@aaa.com", url: ""},
    {id:4, name: 'FullName #4', note: "4@aaa.com", url: "aaa"},
    {id:5, name: 'FullName #5', note: "5@aaa.com", url: "sssss"}
  ];

function _addItem(item){
  console.log("Trip");
}




var AppStore = React.addons.update(EventEmitter.prototype, {$merge: {
  emitChange:function(){
    this.emit(CHANGE_EVENT);
  },

  addChangeListener:function(callback){
    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListener:function(callback){
    this.removeListener(CHANGE_EVENT, callback)
  },
  getScheduleList: function(){
    return _tripList;
  },
  getById: function(tripId) {
    var scheduleList = _tripList;
    var b = $.grep(scheduleList, function(e){ return e.id == tripId; });
    return b.length == 0 ? null : b[0];
  },
  saveOrUpdate: function(trip) {
    console.log("ukladam " + trip);
    if (trip.id) {
      console.log("id " + trip.id);
      //getBandById(band.id);
      var i = _tripList.indexOf(trip);
      //band.id = _bandList.length + 1;
      _tripList[i] = trip;
      return trip;
    } else {
      console.log("nove");
      trip.id = _tripList.length + 1;
      _tripList.push(trip);
      return trip;
    }
  },

  dispatcherIndex:AppDispatcher.register(function(payload){
    var action = payload.action; // this is our action from handleViewAction
    switch(action.actionType){
      /* SHORT USAGE BOILERPLATE (EXAMPLE - uncomment if required)
      case AppConstants.ADD_ITEM:
        _addItem(payload.action.item);
        break;
      */
    }
    AppStore.emitChange();

    return true;
  })
}});

module.exports = AppStore;