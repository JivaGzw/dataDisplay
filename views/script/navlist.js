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
    /*$('.ui.sidebar.inverted.vertical.menu')
      .sidebar({
        context: $('#content')
      });*/
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
          <b>主页</b>
        </Link>
        <div className="item">
          <div className="header">
            总结
          </div>
          <div className="menu">
            <Link to='tuchong/overview' className="item">
              总览
            </Link>
            <Link to='tuchong/digitalcamera' className="item">
              1. 相机Top 10
            </Link>
            <Link to='tuchong/lens' className="item">
              2. 镜头Top 20
            </Link>
            <Link to='tuchong/userscale/chart/1' className="item">
              3. 用户分析 1
            </Link>
            <Link to='tuchong/userscale/chart/2' className="item">
              4. 用户分析 2
            </Link>
            <Link to='tuchong/userlocation' className="item">
              5. 用户分布
            </Link>
            <Link to='other' className="item">
              6. 关于Jiva
            </Link>
          </div>
        </div>
        <Link to='architecture' className="item">
          <b>网站架构</b>
        </Link>
        
        <div className="item">
          <h5 className="ui grey horizontal divider inverted header">
            技术支持
          </h5>
          <div className="menu">
            <div className="item">
              <a href="http://facebook.github.io/react/">
                React.js
              </a>
            </div>
            <div className="item">
              <a href="https://nodejs.org/en/">
                Node.js
              </a>
            </div>
            <div className="item">
              <a href="http://expressjs.com/">
                Express.js
              </a>
            </div>
            <div className="item">
              <a href="http://www.semantic-ui.cn/">
                SemanticUI
              </a>
            </div>
            <div className="item">
              <a href="http://echarts.baidu.com/">
                Echarts
              </a>
            </div>
            <div className="item">
              <a href="http://webpack.github.io/">
                Webpack
              </a>
            </div>
            <div className="item">
              <a href="https://www.mongodb.org/">
                mongodb
              </a>
            </div>
            <div className="item">
              <a href="http://redis.io/">
                redis
              </a>
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