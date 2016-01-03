var React = require('react');
var ReactDOM = require('react-dom');

var Header = require('../component/header.js');
var NextButton = require('../component/next-button.js');
var EnterAnimate = require('../component/enter-animate.js');

var OtherPage = React.createClass({
  componentDidMount: function(){
    $('.ui.sidebar.uncover.visible')
      .sidebar('hide');
  },
  
  render: function() {
    return (
      <EnterAnimate>
        <Header>What's more</Header>
        <div className="ui one colum centered grid">

          <div className="ui centered row">
            <NextButton url="architecture"></NextButton>
          </div>
        </div>
      </EnterAnimate>
    );
  }
});

module.exports = OtherPage;