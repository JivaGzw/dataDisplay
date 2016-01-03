var React = require('react');
var ReactDOM = require('react-dom');

var Header = require('../component/header.js');
var NextButton = require('../component/next-button.js');

var ArchitecturePage = React.createClass({
  render: function() {
    return (
      <div>
        <Header>Architecture</Header>
        <div className="ui one colum centered grid">

          <div className="ui centered row">
            <NextButton url="/about"></NextButton>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ArchitecturePage;