var React = require('react');
var ReactDOM = require('react-dom');

var Header = require('../component/header.js');
var NextButton = require('../component/next-button.js');
var EnterAnimate = require('../component/enter-animate.js');

var AboutPage = React.createClass({
  componentDidMount: function(){
    $('.ui.sidebar.uncover.visible')
      .sidebar('hide');
  },

  render: function() {
    return (
      <EnterAnimate>
        <Header>About</Header>
        <div className="ui one colum centered grid">


        </div>
      </EnterAnimate>
    );
  }
});

module.exports = AboutPage;