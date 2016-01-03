var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

var arrowIconStyle = {
  margin: '0'
};

var NextButton = React.createClass({
  render: function() {
    return (
      <Link to={this.props.url} className="ui circular inverted orange right arrow icon button" style={this.props.style}>
        <i className="right arrow icon" style={arrowIconStyle}/>
      </Link>
    );
  }
});

module.exports = NextButton;