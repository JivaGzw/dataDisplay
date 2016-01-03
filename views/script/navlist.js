var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

var logoContainerStyle = {
  padding: '10'
};

var logoImageStyle = {
  width: '80',
  marginRight: '1em'
};

var NavList = React.createClass({
  getInitialState: function() {
    return {
      showNav: false
    };
  },

  componentDidMount: function() {
    $('.ui.sidebar.inverted.vertical.menu')
      .sidebar({
        context: $('#content')
      });
  },

  render: function() {
    return (
      <div className="ui sidebar inverted vertical menu">
        <div className="item" style={logoContainerStyle}>
          <div className="ui center aligned container">
            <a className="ui logo icon image" style={logoImageStyle} href="/">
              <img src="/images/jiva-logo.png" />
            </a>
          </div>
        </div>

        <Link to='/' className="item">
          <b>Home</b>
        </Link>
        <div className="item">
          <div className="header">
            Summarize
          </div>
          <div className="menu">
            <Link to='tuchong/overview' className="item">
              OverView
            </Link>
            <Link to='tuchong/digitalcamera' className="item">
              1. Digital Camera
            </Link>
            <Link to='tuchong/lens' className="item">
              2. Camera Lens
            </Link>
            <Link to='tuchong/userscale/chart/1' className="item">
              3. User Scale Chart 1
            </Link>
            <Link to='tuchong/userscale/chart/2' className="item">
              4. User Scale Chart 2
            </Link>
            <Link to='tuchong/userlocation' className="item">
              5. User Location
            </Link>
            <Link to='other' className="item">
              6. Other
            </Link>
          </div>
        </div>
        <Link to='architecture' className="item">
          <b>Architecture</b>
        </Link>
        <Link to='about' className="item">
          <b>About</b>
        </Link>
        
        <div className="item">
          <h5 className="ui grey horizontal divider inverted header">
            Technical Assistance
          </h5>
          <div className="menu">
            <div className="item">
              React.js
            </div>
            <div className="item">
              Node.js
            </div>
            <div className="item">
              Express.js
            </div>
            <div className="item">
              SemanticUI
            </div>
            <div className="item">
              ECharts
            </div>
            <div className="item">
              Mongodb
            </div>
            <div className="item">
              Redis
            </div>
          </div>
          
        </div>

        <div className="item" >
          <h4 className="ui horizontal divider inverted header">
            <i className="copyright icon"></i>
          </h4>
        </div>
      </div>
    );
  }
});

module.exports = NavList;