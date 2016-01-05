var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;
var PubSub = require('pubsub-js');

var NavList = require('./navlist.js');
var Home = require('./home.js');
var OverView = require('./overview.js');
var DigitalCamera = require('./digital-camera.js');
var Lens = require('./lens.js');
var Userlocation = require('./user-location.js');
var UserScaleOne = require('./user-scale-one.js');
var UserScaleTwo = require('./user-scale-two.js');
var ArchitecturePage = require('./architecture-page.js');
var OtherPage = require('./other-page.js');
var AboutPage = require('./about.js');
var MenuButton = require('../component/menu-button.js');

var fullScreenStyle = {
  width: '100%',
  height: '100%'
};

var App = React.createClass({
  getInitialState: function() {
    return {
      data: {}
    }
  },

  loadDataFormServer: function() {
    $.ajax({
      type: 'post',
      url: '/data',
      dataType: 'json',
      cache: true,
      success: function(result){
        this.setState({data: result});
        PubSub.publish('data', result);
      }.bind(this),
      error: function(xhr, status, err){
        console.log(this.props.url, status, err);
      }.bind(this)
    });
  },

  componentDidMount: function() {
    this.loadDataFormServer();
  },

  componentWillUpdate: function() {
    PubSub.publish('data', this.state.data);
  },

  render: function() {
    return (
      <div>
        <NavList></NavList>
        <MenuButton />
        <div className="dimmed pusher">
          <div style={fullScreenStyle}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

var routes = (
  <Router>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='home' component={Home}></Route>
      <Route path='tuchong/overview' component={OverView}></Route>
      <Route path='tuchong/digitalcamera' component={DigitalCamera}></Route>
      <Route path='tuchong/lens' component={Lens}></Route>
      <Route path='tuchong/userscale/chart/1' component={UserScaleOne}></Route>
      <Route path='tuchong/userscale/chart/2' component={UserScaleTwo}></Route>
      <Route path='tuchong/userlocation' component={Userlocation}></Route>
      <Route path='other' component={OtherPage}></Route>
      <Route path='architecture' component={ArchitecturePage}></Route>
      <Route path='about' component={AboutPage}></Route>
    </Route>
  </Router>
);

ReactDOM.render(routes, document.body);