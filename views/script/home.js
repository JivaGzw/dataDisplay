var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;


var Header = require('../component/header.js');
var EnterAnimate = require('../component/enter-animate.js');

var mainContainerStyle = {
  marginTop: '2%'
};

var imgContainerStyle = {
  marginTop: '2em'
};

var textContainerStyle = {
  marginTop: '3em'
};

var Home = React.createClass({
  componentDidMount: function(){
    $('.ui.sidebar.uncover.visible')
      .sidebar('hide');
  },

  render: function() {
    return (
      <EnterAnimate>
        <Header>图虫的2015</Header>
        
        <div className="ui inverted vertical masthead center aligned segment" style={mainContainerStyle}>
          <div className="ui center aligned container" style={imgContainerStyle}>
            <img src="/images/tuchong-logo.png" />
          </div>
          <div className="ui center aligned text container" style={textContainerStyle}>
            <h2>
              2015 has passed, and so many friends in tuchong.com has been post themselves annual summary.
            </h2>
            <h2>
              Now,it's time to help tuchong.com do a summary!
            </h2>
            <Link to="/tuchong/overview" className="ui huge inverted orange button">
              Get Started
              <i className="right arrow icon"/>
            </Link>
          </div>
        </div>
      </EnterAnimate>
    );
  }
});

module.exports = Home;