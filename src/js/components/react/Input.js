/** @jsx React.DOM */
var React = require('react');

var Input = React.createClass({
	getInitialState: function() {
		return { data : this.props.data };
	},
  	handleChange: function(event) {
  		//this.state.data =  event.target.value;
  		this.setState({ data : event.target.value });
	},
	render: function () {
		return (
			<input type="text" placeholder={ this.props.placeholder } value={ this.state.data } onChange={ this.handleChange } />
		);
	}
});

module.exports = Input;