/** @jsx React.DOM */
var React = require('react');
var Router = require('react-router');
var Login = require('../auth/app-login');
var Input = require('../react/Input.js');
var AuthStore = require('../../stores/app-auth.js');
var TripStore = require('../../stores/app-trip.js');
var AuthenticationMixin = require('../../mixins/AuthenticationMixin.js');
var Link = Router.Link;


var Trip = React.createClass({
	mixins: [ AuthenticationMixin, Router.Navigation ],
	getInitialState: function() {
		return { trip : { id : "", name : "", note : "", url : "" } };
	},
	componentDidMount: function() {
		var tripId = this.context.router.getCurrentParams().id;
		var trip = TripStore.getById(tripId);
		if (trip) {
			this.setState( { trip : trip } );
		}
    	/*$.get(this.props.source, function(result) {
	      var lastGist = result[0];
      		if (this.isMounted()) {
        		this.setState({
          		username: lastGist.owner.login,
          		lastGistUrl: lastGist.html_url
	        });
      	}
    	}.bind(this));*/
	},
	handleChangeName: function(event) {
  		var tripp = this.state.trip;
  		console.log(tripp);
  		console.log(tripp.name + "aaaaa");
  		tripp.name = event.target.value;
  		this.setState({ trip : tripp });
	},
	handleChangeUrl: function(event) {
  		var tripp = this.state.trip;
  		tripp.url = event.target.value;
  		this.setState({ trip : tripp });
	},
	handleChangeNote: function(event) {
  		var tripp = this.state.trip;
  		tripp.note = event.target.value;
  		this.setState({ trip : tripp });
	},
	handleSubmit: function(e) {
		e.preventDefault();
		var id = React.findDOMNode(this.refs.id).value.trim();
		var name = React.findDOMNode(this.refs.name).value.trim();
		var url = React.findDOMNode(this.refs.url).value.trim();
		var note = React.findDOMNode(this.refs.note).value.trim();
		if (!name) {
			return;
		}
		var trip = TripStore.saveOrUpdate({id : id, name: name, url: url, note: note});
		this.transitionTo('trip', { id : trip.id });
	},
	render: function () {
		return (
			<div>
				<h2>Výlet</h2>
				<form className="form-horizontal" onSubmit={this.handleSubmit}>
				<input type="hidden" ref="id" value={ this.state.trip.id } />
				<input type="text" placeholder="Název výlet" ref="name" value={ this.state.trip.name } onChange={ this.handleChangeName} />
				<input type="text" placeholder="Odkaz" ref="url" value={ this.state.trip.url } onChange={ this.handleChangeUrl }  />
				<input type="text" placeholder="Poznámka" ref="note" value={ this.state.trip.note } onChange={ this.handleChangeNote }  />
				<input type="submit" value="Post" value="SAVE" />
				</form>
			</div>
		);
	}
});

module.exports = Trip;