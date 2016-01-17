var React = require('react');
var ReactDOM = require('react-dom');

var Header = require('../component/header.js');
var NextButton = require('../component/next-button.js');
var EnterAnimate = require('../component/enter-animate.js');

var ArchitecturePage = React.createClass({
  componentDidMount: function(){
    $('.ui.sidebar.uncover.visible')
      .sidebar('hide');
  },
  
  render: function() {
    return (
      <EnterAnimate>
        <Header>Architecture</Header>
        <div className="ui one colum centered grid">

          <div className="ui centered row">
            <img class="ui image" src="/images/architecture.png" />
          </div>
        </div>
      </EnterAnimate>
    );
  }
});

module.exports = ArchitecturePage;