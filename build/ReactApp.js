webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(158);
	var Router = __webpack_require__(159).Router;
	var Route = __webpack_require__(159).Route;
	var IndexRoute = __webpack_require__(159).IndexRoute;
	var Link = __webpack_require__(159).Link;
	var PubSub = __webpack_require__(208);

	var NavList = __webpack_require__(209);
	var Home = __webpack_require__(210);
	var OverView = __webpack_require__(231);
	var DigitalCamera = __webpack_require__(233);
	var Lens = __webpack_require__(234);
	var Userlocation = __webpack_require__(235);
	var UserScaleOne = __webpack_require__(236);
	var UserScaleTwo = __webpack_require__(237);
	var ArchitecturePage = __webpack_require__(238);
	var OtherPage = __webpack_require__(239);
	var AboutPage = __webpack_require__(240);
	var MenuButton = __webpack_require__(241);

	var fullScreenStyle = {
	  width: '100%',
	  height: '100%'
	};

	var App = React.createClass({displayName: "App",
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
	      React.createElement("div", null, 
	        React.createElement(NavList, null), 
	        React.createElement(MenuButton, null), 
	        React.createElement("div", {className: "dimmed pusher"}, 
	          React.createElement("div", {style: fullScreenStyle}, 
	            this.props.children
	          )
	        )
	      )
	    );
	  }
	});

	var routes = (
	  React.createElement(Router, null, 
	    React.createElement(Route, {path: "/", component: App}, 
	      React.createElement(IndexRoute, {component: Home}), 
	      React.createElement(Route, {path: "home", component: Home}), 
	      React.createElement(Route, {path: "tuchong/overview", component: OverView}), 
	      React.createElement(Route, {path: "tuchong/digitalcamera", component: DigitalCamera}), 
	      React.createElement(Route, {path: "tuchong/lens", component: Lens}), 
	      React.createElement(Route, {path: "tuchong/userscale/chart/1", component: UserScaleOne}), 
	      React.createElement(Route, {path: "tuchong/userscale/chart/2", component: UserScaleTwo}), 
	      React.createElement(Route, {path: "tuchong/userlocation", component: Userlocation}), 
	      React.createElement(Route, {path: "other", component: OtherPage}), 
	      React.createElement(Route, {path: "architecture", component: ArchitecturePage}), 
	      React.createElement(Route, {path: "about", component: AboutPage})
	    )
	  )
	);

	ReactDOM.render(routes, document.body);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 209:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(158);
	var Link = __webpack_require__(159).Link;

	var logoContainerStyle = {
	  padding: '10'
	};

	var logoImageStyle = {
	  width: '80',
	  marginRight: '1em'
	};

	var NavList = React.createClass({displayName: "NavList",
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
	      React.createElement("div", {className: "ui sidebar inverted vertical menu"}, 
	        React.createElement("div", {className: "item", style: logoContainerStyle}, 
	          React.createElement("div", {className: "ui center aligned container"}, 
	            React.createElement("a", {className: "ui logo icon image", style: logoImageStyle, href: "/"}, 
	              React.createElement("img", {src: "/images/jiva-logo.png"})
	            )
	          )
	        ), 

	        React.createElement(Link, {to: "/", className: "item"}, 
	          React.createElement("b", null, "主页")
	        ), 
	        React.createElement("div", {className: "item"}, 
	          React.createElement("div", {className: "header"}, 
	            "总结"
	          ), 
	          React.createElement("div", {className: "menu"}, 
	            React.createElement(Link, {to: "tuchong/overview", className: "item"}, 
	              "总览"
	            ), 
	            React.createElement(Link, {to: "tuchong/digitalcamera", className: "item"}, 
	              "1. 相机Top 10"
	            ), 
	            React.createElement(Link, {to: "tuchong/lens", className: "item"}, 
	              "2. 镜头Top 20"
	            ), 
	            React.createElement(Link, {to: "tuchong/userscale/chart/1", className: "item"}, 
	              "3. 用户分析 1"
	            ), 
	            React.createElement(Link, {to: "tuchong/userscale/chart/2", className: "item"}, 
	              "4. 用户分析 2"
	            ), 
	            React.createElement(Link, {to: "tuchong/userlocation", className: "item"}, 
	              "5. 用户分布"
	            ), 
	            React.createElement(Link, {to: "other", className: "item"}, 
	              "6. 关于Jiva"
	            )
	          )
	        ), 
	        React.createElement(Link, {to: "architecture", className: "item"}, 
	          React.createElement("b", null, "网站架构")
	        ), 
	        
	        React.createElement("div", {className: "item"}, 
	          React.createElement("h5", {className: "ui grey horizontal divider inverted header"}, 
	            "技术支持"
	          ), 
	          React.createElement("div", {className: "menu"}, 
	            React.createElement("div", {className: "item"}, 
	              React.createElement("a", {href: "http://facebook.github.io/react/"}, 
	                "React.js"
	              )
	            ), 
	            React.createElement("div", {className: "item"}, 
	              React.createElement("a", {href: "https://nodejs.org/en/"}, 
	                "Node.js"
	              )
	            ), 
	            React.createElement("div", {className: "item"}, 
	              React.createElement("a", {href: "http://expressjs.com/"}, 
	                "Express.js"
	              )
	            ), 
	            React.createElement("div", {className: "item"}, 
	              React.createElement("a", {href: "http://www.semantic-ui.cn/"}, 
	                "SemanticUI"
	              )
	            ), 
	            React.createElement("div", {className: "item"}, 
	              React.createElement("a", {href: "http://echarts.baidu.com/"}, 
	                "Echarts"
	              )
	            ), 
	            React.createElement("div", {className: "item"}, 
	              React.createElement("a", {href: "http://webpack.github.io/"}, 
	                "Webpack"
	              )
	            ), 
	            React.createElement("div", {className: "item"}, 
	              React.createElement("a", {href: "https://www.mongodb.org/"}, 
	                "mongodb"
	              )
	            ), 
	            React.createElement("div", {className: "item"}, 
	              React.createElement("a", {href: "http://redis.io/"}, 
	                "redis"
	              )
	            )
	          )
	          
	        ), 

	        React.createElement("div", {className: "item"}, 
	          React.createElement("h4", {className: "ui horizontal divider inverted header"}, 
	            React.createElement("i", {className: "copyright icon"})
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = NavList;

/***/ },

/***/ 210:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(158);
	var Link = __webpack_require__(159).Link;


	var Header = __webpack_require__(211);
	var EnterAnimate = __webpack_require__(212);

	var mainContainerStyle = {
	  marginTop: '2%'
	};

	var imgContainerStyle = {
	  marginTop: '2em'
	};

	var textContainerStyle = {
	  marginTop: '3em'
	};

	var Home = React.createClass({displayName: "Home",
	  componentDidMount: function(){
	    $('.ui.sidebar.uncover.visible')
	      .sidebar('hide');
	  },

	  render: function() {
	    return (
	      React.createElement(EnterAnimate, null, 
	        React.createElement(Header, null, "图虫的2015"), 
	        
	        React.createElement("div", {className: "ui inverted vertical masthead center aligned segment", style: mainContainerStyle}, 
	          React.createElement("div", {className: "ui center aligned container", style: imgContainerStyle}, 
	            React.createElement("img", {src: "/images/tuchong-logo.png"})
	          ), 
	          React.createElement("div", {className: "ui center aligned text container", style: textContainerStyle}, 
	            React.createElement("h2", null, 
	              "2015 has passed, and so many friends in tuchong.com has been post themselves annual summary."
	            ), 
	            React.createElement("h2", null, 
	              "Now,it's time to help tuchong.com do a summary!"
	            ), 
	            React.createElement(Link, {to: "/tuchong/overview", className: "ui huge inverted orange button"}, 
	              "Get Started", 
	              React.createElement("i", {className: "right arrow icon"})
	            )
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = Home;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 211:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);

	var headerContainerStyle = {
	  margin: '1.8em 1.8em 40px 1.8em',
	  fontSize: '1.6em'
	};

	var Header = React.createClass({displayName: "Header",
	  render: function() {
	    return (
	      React.createElement("div", null, 
	        React.createElement("div", {className: "ui container", style: headerContainerStyle}, 
	          React.createElement("h3", {className: "ui center aligned dividing huge header"}, 
	            this.props.children
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = Header;

/***/ },

/***/ 212:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(158);
	var Animate = __webpack_require__(213);

	var EnterAnimate = React.createClass({displayName: "EnterAnimate",
	  getDefalutStyle: function() {
	    return {
	      x: 0,
	      y: 0,
	      z: 0
	    }
	  },

	  getStyle: function() {
	    return {
	      x: Animate.spring(1,[100,100]),
	      y: Animate.spring(0.5,[100,100]),
	      z: Animate.spring(1,[180,60])
	    }
	  },

	  render: function() {
	    return (
	      React.createElement(Animate.Motion, {defaultStyle: this.getDefalutStyle(), style: this.getStyle()}, 
	        
	          function(obj){
	            return (
	              React.createElement("div", {style: {perspective: 1500}}, 
	                React.createElement("div", {style: {
	                  opacity: obj.x,
	                  transform: "rotateY("+(50-50*obj.z)+"deg)",
	                  transformOrigin: "0% 50%"
	                }}, 
	                  this.props.children
	                )
	              )
	              
	            )
	            
	          }.bind(this)
	        
	      )
	    );
	  }
	});

	module.exports = EnterAnimate;

/***/ },

/***/ 213:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _components2 = __webpack_require__(214);

	var _components3 = _interopRequireDefault(_components2);

	var _reorderKeys = __webpack_require__(230);

	var _reorderKeys2 = _interopRequireDefault(_reorderKeys);

	var _components = _components3['default'](_react2['default']);

	var Spring = _components.Spring;
	var TransitionSpring = _components.TransitionSpring;
	var Motion = _components.Motion;
	var StaggeredMotion = _components.StaggeredMotion;
	var TransitionMotion = _components.TransitionMotion;
	exports.Spring = Spring;
	exports.TransitionSpring = TransitionSpring;
	exports.Motion = Motion;
	exports.StaggeredMotion = StaggeredMotion;
	exports.TransitionMotion = TransitionMotion;

	var _spring2 = __webpack_require__(226);

	var _spring3 = _interopRequireDefault(_spring2);

	exports.spring = _spring3['default'];

	var _presets2 = __webpack_require__(227);

	var _presets3 = _interopRequireDefault(_presets2);

	exports.presets = _presets3['default'];
	var utils = {
	  reorderKeys: _reorderKeys2['default']
	};
	exports.utils = utils;

/***/ },

/***/ 214:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = components;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _noVelocity = __webpack_require__(215);

	var _noVelocity2 = _interopRequireDefault(_noVelocity);

	var _hasReachedStyle = __webpack_require__(216);

	var _hasReachedStyle2 = _interopRequireDefault(_hasReachedStyle);

	var _mergeDiff = __webpack_require__(217);

	var _mergeDiff2 = _interopRequireDefault(_mergeDiff);

	var _animationLoop = __webpack_require__(218);

	var _animationLoop2 = _interopRequireDefault(_animationLoop);

	var _zero = __webpack_require__(223);

	var _zero2 = _interopRequireDefault(_zero);

	var _updateTree = __webpack_require__(224);

	var _deprecatedSprings2 = __webpack_require__(228);

	var _deprecatedSprings3 = _interopRequireDefault(_deprecatedSprings2);

	var _stripStyle = __webpack_require__(229);

	var _stripStyle2 = _interopRequireDefault(_stripStyle);

	var startAnimation = _animationLoop2['default']();

	function mapObject(f, obj) {
	  var ret = {};
	  for (var key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = f(obj[key], key);
	  }
	  return ret;
	}

	function everyObj(f, obj) {
	  for (var key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    if (!f(obj[key], key)) {
	      return false;
	    }
	  }
	  return true;
	}

	function components(React) {
	  var PropTypes = React.PropTypes;

	  var Motion = React.createClass({
	    displayName: 'Motion',

	    propTypes: {
	      // TOOD: warn against putting a config in here
	      defaultValue: function defaultValue(prop, propName) {
	        if (prop[propName]) {
	          return new Error('Spring\'s `defaultValue` has been changed to `defaultStyle`. ' + 'Its format received a few (easy to update!) changes as well.');
	        }
	      },
	      endValue: function endValue(prop, propName) {
	        if (prop[propName]) {
	          return new Error('Spring\'s `endValue` has been changed to `style`. Its format ' + 'received a few (easy to update!) changes as well.');
	        }
	      },
	      defaultStyle: PropTypes.object,
	      style: PropTypes.object.isRequired,
	      children: PropTypes.func.isRequired
	    },

	    getInitialState: function getInitialState() {
	      var _props = this.props;
	      var defaultStyle = _props.defaultStyle;
	      var style = _props.style;

	      var currentStyle = defaultStyle || style;
	      return {
	        currentStyle: currentStyle,
	        currentVelocity: mapObject(_zero2['default'], currentStyle)
	      };
	    },

	    componentDidMount: function componentDidMount() {
	      this.startAnimating();
	    },

	    componentWillReceiveProps: function componentWillReceiveProps() {
	      this.startAnimating();
	    },

	    animationStep: function animationStep(timestep, state) {
	      var currentStyle = state.currentStyle;
	      var currentVelocity = state.currentVelocity;
	      var style = this.props.style;

	      var newCurrentStyle = _updateTree.updateCurrentStyle(timestep, currentStyle, currentVelocity, style);
	      var newCurrentVelocity = _updateTree.updateCurrentVelocity(timestep, currentStyle, currentVelocity, style);

	      // TOOD: this isn't necessary anymore. It was used only against endValue func
	      if (_noVelocity2['default'](currentVelocity, newCurrentStyle) && _noVelocity2['default'](newCurrentVelocity, newCurrentStyle)) {
	        // check explanation in `Motion.animationRender`
	        this.stopAnimation(); // Nasty side effects....
	      }

	      return {
	        currentStyle: newCurrentStyle,
	        currentVelocity: newCurrentVelocity
	      };
	    },

	    stopAnimation: null,

	    // used in animationRender
	    hasUnmounted: false,

	    componentWillUnmount: function componentWillUnmount() {
	      this.stopAnimation();
	      this.hasUnmounted = true;
	    },

	    startAnimating: function startAnimating() {
	      // Is smart enough to not start it twice
	      this.stopAnimation = startAnimation(this.state, this.animationStep, this.animationRender);
	    },

	    animationRender: function animationRender(alpha, nextState, prevState) {
	      // `this.hasUnmounted` might be true in the following condition:
	      // user does some checks in `style` and calls an owner handler
	      // owner sets state in the callback, triggering a re-render
	      // unmounts Motion
	      if (!this.hasUnmounted) {
	        this.setState({
	          currentStyle: _updateTree.interpolateValue(alpha, nextState.currentStyle, prevState.currentStyle),
	          currentVelocity: nextState.currentVelocity
	        });
	      }
	    },

	    render: function render() {
	      var strippedStyle = _stripStyle2['default'](this.state.currentStyle);
	      var renderedChildren = this.props.children(strippedStyle);
	      return renderedChildren && React.Children.only(renderedChildren);
	    }
	  });

	  var StaggeredMotion = React.createClass({
	    displayName: 'StaggeredMotion',

	    propTypes: {
	      defaultStyle: function defaultStyle(prop, propName) {
	        if (prop[propName]) {
	          return new Error('You forgot the "s" for `StaggeredMotion`\'s `defaultStyles`.');
	        }
	      },
	      style: function style(prop, propName) {
	        if (prop[propName]) {
	          return new Error('You forgot the "s" for `StaggeredMotion`\'s `styles`.');
	        }
	      },
	      // TOOD: warn against putting configs in here
	      defaultStyles: PropTypes.arrayOf(PropTypes.object),
	      styles: PropTypes.func.isRequired,
	      children: PropTypes.func.isRequired
	    },

	    getInitialState: function getInitialState() {
	      var _props2 = this.props;
	      var styles = _props2.styles;
	      var defaultStyles = _props2.defaultStyles;

	      var currentStyles = defaultStyles ? defaultStyles : styles();
	      return {
	        currentStyles: currentStyles,
	        currentVelocities: currentStyles.map(function (s) {
	          return mapObject(_zero2['default'], s);
	        })
	      };
	    },

	    componentDidMount: function componentDidMount() {
	      this.startAnimating();
	    },

	    componentWillReceiveProps: function componentWillReceiveProps() {
	      this.startAnimating();
	    },

	    animationStep: function animationStep(timestep, state) {
	      var currentStyles = state.currentStyles;
	      var currentVelocities = state.currentVelocities;

	      var styles = this.props.styles(currentStyles.map(_stripStyle2['default']));

	      var newCurrentStyles = currentStyles.map(function (currentStyle, i) {
	        return _updateTree.updateCurrentStyle(timestep, currentStyle, currentVelocities[i], styles[i]);
	      });
	      var newCurrentVelocities = currentStyles.map(function (currentStyle, i) {
	        return _updateTree.updateCurrentVelocity(timestep, currentStyle, currentVelocities[i], styles[i]);
	      });

	      // TODO: is this right?
	      if (currentVelocities.every(function (v, k) {
	        return _noVelocity2['default'](v, currentStyles[k]);
	      }) && newCurrentVelocities.every(function (v, k) {
	        return _noVelocity2['default'](v, newCurrentStyles[k]);
	      })) {
	        this.stopAnimation();
	      }

	      return {
	        currentStyles: newCurrentStyles,
	        currentVelocities: newCurrentVelocities
	      };
	    },

	    stopAnimation: null,

	    // used in animationRender
	    hasUnmounted: false,

	    componentWillUnmount: function componentWillUnmount() {
	      this.stopAnimation();
	      this.hasUnmounted = true;
	    },

	    startAnimating: function startAnimating() {
	      this.stopAnimation = startAnimation(this.state, this.animationStep, this.animationRender);
	    },

	    animationRender: function animationRender(alpha, nextState, prevState) {
	      // See comment in Motion.
	      if (!this.hasUnmounted) {
	        var currentStyles = nextState.currentStyles.map(function (style, i) {
	          return _updateTree.interpolateValue(alpha, style, prevState.currentStyles[i]);
	        });
	        this.setState({
	          currentStyles: currentStyles,
	          currentVelocities: nextState.currentVelocities
	        });
	      }
	    },

	    render: function render() {
	      var strippedStyle = this.state.currentStyles.map(_stripStyle2['default']);
	      var renderedChildren = this.props.children(strippedStyle);
	      return renderedChildren && React.Children.only(renderedChildren);
	    }
	  });

	  var TransitionMotion = React.createClass({
	    displayName: 'TransitionMotion',

	    propTypes: {
	      defaultValue: function defaultValue(prop, propName) {
	        if (prop[propName]) {
	          return new Error('TransitionSpring\'s `defaultValue` has been changed to ' + '`defaultStyles`. Its format received a few (easy to update!) ' + 'changes as well.');
	        }
	      },
	      endValue: function endValue(prop, propName) {
	        if (prop[propName]) {
	          return new Error('TransitionSpring\'s `endValue` has been changed to `styles`. ' + 'Its format received a few (easy to update!) changes as well.');
	        }
	      },
	      defaultStyle: function defaultStyle(prop, propName) {
	        if (prop[propName]) {
	          return new Error('You forgot the "s" for `TransitionMotion`\'s `defaultStyles`.');
	        }
	      },
	      style: function style(prop, propName) {
	        if (prop[propName]) {
	          return new Error('You forgot the "s" for `TransitionMotion`\'s `styles`.');
	        }
	      },
	      // TOOD: warn against putting configs in here
	      defaultStyles: PropTypes.objectOf(PropTypes.any),
	      styles: PropTypes.oneOfType([PropTypes.func, PropTypes.objectOf(PropTypes.any.isRequired)]).isRequired,
	      willLeave: PropTypes.oneOfType([PropTypes.func]),
	      // TOOD: warn against putting configs in here
	      willEnter: PropTypes.oneOfType([PropTypes.func]),
	      children: PropTypes.func.isRequired
	    },

	    getDefaultProps: function getDefaultProps() {
	      return {
	        willEnter: function willEnter(key, value) {
	          return value;
	        },
	        willLeave: function willLeave() {
	          return null;
	        }
	      };
	    },

	    getInitialState: function getInitialState() {
	      var _props3 = this.props;
	      var styles = _props3.styles;
	      var defaultStyles = _props3.defaultStyles;

	      var currentStyles = undefined;
	      if (defaultStyles == null) {
	        if (typeof styles === 'function') {
	          currentStyles = styles();
	        } else {
	          currentStyles = styles;
	        }
	      } else {
	        currentStyles = defaultStyles;
	      }
	      return {
	        currentStyles: currentStyles,
	        currentVelocities: mapObject(function (s) {
	          return mapObject(_zero2['default'], s);
	        }, currentStyles)
	      };
	    },

	    componentDidMount: function componentDidMount() {
	      this.startAnimating();
	    },

	    componentWillReceiveProps: function componentWillReceiveProps() {
	      this.startAnimating();
	    },

	    animationStep: function animationStep(timestep, state) {
	      var currentStyles = state.currentStyles;
	      var currentVelocities = state.currentVelocities;
	      var _props4 = this.props;
	      var styles = _props4.styles;
	      var willEnter = _props4.willEnter;
	      var willLeave = _props4.willLeave;

	      if (typeof styles === 'function') {
	        styles = styles(currentStyles);
	      }

	      // TODO: huh?
	      var mergedStyles = styles; // set mergedStyles to styles as the default
	      var hasNewKey = false;

	      mergedStyles = _mergeDiff2['default'](currentStyles, styles,
	      // TODO: stop allocating like crazy in this whole code path
	      function (key) {
	        var res = willLeave(key, currentStyles[key], styles, currentStyles, currentVelocities);
	        if (res == null) {
	          // For legacy reason. We won't allow returning null soon
	          // TODO: remove, after next release
	          return null;
	        }

	        if (_noVelocity2['default'](currentVelocities[key], currentStyles[key]) && _hasReachedStyle2['default'](currentStyles[key], res)) {
	          return null;
	        }
	        return res;
	      });

	      Object.keys(mergedStyles).filter(function (key) {
	        return !currentStyles.hasOwnProperty(key);
	      }).forEach(function (key) {
	        var _extends2, _extends3;

	        hasNewKey = true;
	        var enterStyle = willEnter(key, mergedStyles[key], styles, currentStyles, currentVelocities);

	        // We can mutate this here because mergeDiff returns a new Obj
	        mergedStyles[key] = enterStyle;

	        currentStyles = _extends({}, currentStyles, (_extends2 = {}, _extends2[key] = enterStyle, _extends2));
	        currentVelocities = _extends({}, currentVelocities, (_extends3 = {}, _extends3[key] = mapObject(_zero2['default'], enterStyle), _extends3));
	      });

	      var newCurrentStyles = mapObject(function (mergedStyle, key) {
	        return _updateTree.updateCurrentStyle(timestep, currentStyles[key], currentVelocities[key], mergedStyle);
	      }, mergedStyles);
	      var newCurrentVelocities = mapObject(function (mergedStyle, key) {
	        return _updateTree.updateCurrentVelocity(timestep, currentStyles[key], currentVelocities[key], mergedStyle);
	      }, mergedStyles);

	      if (!hasNewKey && everyObj(function (v, k) {
	        return _noVelocity2['default'](v, currentStyles[k]);
	      }, currentVelocities) && everyObj(function (v, k) {
	        return _noVelocity2['default'](v, newCurrentStyles[k]);
	      }, newCurrentVelocities)) {
	        // check explanation in `Motion.animationRender`
	        this.stopAnimation(); // Nasty side effects....
	      }

	      return {
	        currentStyles: newCurrentStyles,
	        currentVelocities: newCurrentVelocities
	      };
	    },

	    stopAnimation: null,

	    // used in animationRender
	    hasUnmounted: false,

	    componentWillUnmount: function componentWillUnmount() {
	      this.stopAnimation();
	      this.hasUnmounted = true;
	    },

	    startAnimating: function startAnimating() {
	      this.stopAnimation = startAnimation(this.state, this.animationStep, this.animationRender);
	    },

	    animationRender: function animationRender(alpha, nextState, prevState) {
	      // See comment in Motion.
	      if (!this.hasUnmounted) {
	        var currentStyles = mapObject(function (style, key) {
	          return _updateTree.interpolateValue(alpha, style, prevState.currentStyles[key]);
	        }, nextState.currentStyles);
	        this.setState({
	          currentStyles: currentStyles,
	          currentVelocities: nextState.currentVelocities
	        });
	      }
	    },

	    render: function render() {
	      var strippedStyle = mapObject(_stripStyle2['default'], this.state.currentStyles);
	      var renderedChildren = this.props.children(strippedStyle);
	      return renderedChildren && React.Children.only(renderedChildren);
	    }
	  });

	  var _deprecatedSprings = _deprecatedSprings3['default'](React);

	  var Spring = _deprecatedSprings.Spring;
	  var TransitionSpring = _deprecatedSprings.TransitionSpring;

	  return { Spring: Spring, TransitionSpring: TransitionSpring, Motion: Motion, StaggeredMotion: StaggeredMotion, TransitionMotion: TransitionMotion };
	}

	module.exports = exports['default'];

/***/ },

/***/ 215:
/***/ function(module, exports) {

	
	// currentStyle keeps the info about whether a prop is configured as a spring
	// or if it's just a random prop that happens to be present on the style

	'use strict';

	exports.__esModule = true;
	exports['default'] = noVelocity;

	function noVelocity(currentVelocity, currentStyle) {
	  for (var key in currentVelocity) {
	    if (!currentVelocity.hasOwnProperty(key)) {
	      continue;
	    }
	    if (currentStyle[key] != null && currentStyle[key].config && currentVelocity[key] !== 0) {
	      return false;
	    }
	  }
	  return true;
	}

	module.exports = exports['default'];

/***/ },

/***/ 216:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = hasReachedStyle;

	function hasReachedStyle(currentStyle, style) {
	  for (var key in style) {
	    if (!style.hasOwnProperty(key)) {
	      continue;
	    }
	    var currentValue = currentStyle[key];
	    var destValue = style[key];
	    if (destValue == null || !destValue.config) {
	      // not a spring config
	      continue;
	    }
	    if (currentValue.config && currentValue.val !== destValue.val) {
	      return false;
	    }
	    if (!currentValue.config && currentValue !== destValue.val) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = exports['default'];

/***/ },

/***/ 217:
/***/ function(module, exports) {

	

	// this function is allocation-less thanks to babel, which transforms the tail
	// calls into loops
	'use strict';

	exports.__esModule = true;
	exports['default'] = mergeDiff;
	function mergeDiffArr(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
	  var _again = true;

	  _function: while (_again) {
	    var arrA = _x,
	        arrB = _x2,
	        collB = _x3,
	        indexA = _x4,
	        indexB = _x5,
	        onRemove = _x6,
	        accum = _x7;
	    endA = endB = keyA = keyB = fill = fill = undefined;
	    _again = false;

	    var endA = indexA === arrA.length;
	    var endB = indexB === arrB.length;
	    var keyA = arrA[indexA];
	    var keyB = arrB[indexB];
	    if (endA && endB) {
	      // returning null here, otherwise lint complains that we're not expecting
	      // a return value in subsequent calls. We know what we're doing.
	      return null;
	    }

	    if (endA) {
	      accum[keyB] = collB[keyB];
	      _x = arrA;
	      _x2 = arrB;
	      _x3 = collB;
	      _x4 = indexA;
	      _x5 = indexB + 1;
	      _x6 = onRemove;
	      _x7 = accum;
	      _again = true;
	      continue _function;
	    }

	    if (endB) {
	      var fill = onRemove(keyA);
	      if (fill != null) {
	        accum[keyA] = fill;
	      }
	      _x = arrA;
	      _x2 = arrB;
	      _x3 = collB;
	      _x4 = indexA + 1;
	      _x5 = indexB;
	      _x6 = onRemove;
	      _x7 = accum;
	      _again = true;
	      continue _function;
	    }

	    if (keyA === keyB) {
	      accum[keyA] = collB[keyA];
	      _x = arrA;
	      _x2 = arrB;
	      _x3 = collB;
	      _x4 = indexA + 1;
	      _x5 = indexB + 1;
	      _x6 = onRemove;
	      _x7 = accum;
	      _again = true;
	      continue _function;
	    }

	    if (!collB.hasOwnProperty(keyA)) {
	      var fill = onRemove(keyA);
	      if (fill != null) {
	        accum[keyA] = fill;
	      }
	      _x = arrA;
	      _x2 = arrB;
	      _x3 = collB;
	      _x4 = indexA + 1;
	      _x5 = indexB;
	      _x6 = onRemove;
	      _x7 = accum;
	      _again = true;
	      continue _function;
	    }

	    _x = arrA;
	    _x2 = arrB;
	    _x3 = collB;
	    _x4 = indexA + 1;
	    _x5 = indexB;
	    _x6 = onRemove;
	    _x7 = accum;
	    _again = true;
	    continue _function;
	  }
	}

	function mergeDiff(a, b, onRemove) {
	  var ret = {};
	  // if anyone can make this work without allocating the arrays here, we'll
	  // give you a medal
	  mergeDiffArr(Object.keys(a), Object.keys(b), b, 0, 0, onRemove, ret);
	  return ret;
	}

	module.exports = exports['default'];

/***/ },

/***/ 218:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = configAnimation;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _performanceNow = __webpack_require__(219);

	var _performanceNow2 = _interopRequireDefault(_performanceNow);

	var _raf = __webpack_require__(221);

	var _raf2 = _interopRequireDefault(_raf);

	function configAnimation() {
	  var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var _config$timeStep = config.timeStep;
	  var timeStep = _config$timeStep === undefined ? 1 / 60 * 1000 : _config$timeStep;
	  var _config$timeScale = config.timeScale;
	  var timeScale = _config$timeScale === undefined ? 1 : _config$timeScale;
	  var _config$maxSteps = config.maxSteps;
	  var maxSteps = _config$maxSteps === undefined ? 10 : _config$maxSteps;
	  var _config$raf = config.raf;
	  var raf = _config$raf === undefined ? _raf2['default'] : _config$raf;
	  var _config$now = config.now;
	  var now = _config$now === undefined ? _performanceNow2['default'] : _config$now;

	  var animRunning = [];
	  var running = false;
	  var prevTime = 0;
	  var accumulatedTime = 0;

	  function loop() {
	    var currentTime = now();
	    var frameTime = currentTime - prevTime; // delta

	    prevTime = currentTime;
	    accumulatedTime += frameTime * timeScale;

	    if (accumulatedTime > timeStep * maxSteps) {
	      accumulatedTime = 0;
	    }

	    var frameNumber = Math.ceil(accumulatedTime / timeStep);
	    for (var i = 0; i < animRunning.length; i++) {
	      var _animRunning$i = animRunning[i];
	      var active = _animRunning$i.active;
	      var animationStep = _animRunning$i.animationStep;
	      var prevPrevState = _animRunning$i.prevState;
	      var prevNextState = animRunning[i].nextState;

	      if (!active) {
	        continue;
	      }

	      // Seems like because the TS sets destVals as enterVals for the first
	      // tick, we might render that value twice. We render it once, currValue is
	      // enterVal and destVal is enterVal. The next tick is faster than 16ms,
	      // so accumulatedTime (which would be about -16ms from the previous tick)
	      // is negative (-16ms + any number less than 16ms < 0). So we just render
	      // part ways towards the nextState, but that's enterVal still. We render
	      // say 75% between currValue (=== enterVal) and destValue (=== enterVal).
	      // So we render the same value a second time.
	      // The solution below is to recalculate the destination state even when
	      // you're moving partially towards it.
	      if (accumulatedTime <= 0) {
	        animRunning[i].nextState = animationStep(timeStep / 1000, prevPrevState);
	      } else {
	        for (var j = 0; j < frameNumber; j++) {
	          animRunning[i].nextState = animationStep(timeStep / 1000, prevNextState);
	          var _ref = [prevNextState, animRunning[i].nextState];
	          animRunning[i].prevState = _ref[0];
	          prevNextState = _ref[1];
	        }
	      }
	    }

	    accumulatedTime = accumulatedTime - frameNumber * timeStep;

	    // Render and filter in one iteration.
	    var alpha = 1 + accumulatedTime / timeStep;
	    for (var i = 0; i < animRunning.length; i++) {
	      var _animRunning$i2 = animRunning[i];
	      var animationRender = _animRunning$i2.animationRender;
	      var nextState = _animRunning$i2.nextState;
	      var prevState = _animRunning$i2.prevState;

	      // Might mutate animRunning........
	      animationRender(alpha, nextState, prevState);
	    }

	    animRunning = animRunning.filter(function (_ref2) {
	      var active = _ref2.active;
	      return active;
	    });

	    if (animRunning.length === 0) {
	      running = false;
	    } else {
	      raf(loop);
	    }
	  }

	  function start() {
	    if (!running) {
	      running = true;
	      prevTime = now();
	      accumulatedTime = 0;
	      raf(loop);
	    }
	  }

	  return function startAnimation(state, animationStep, animationRender) {
	    for (var i = 0; i < animRunning.length; i++) {
	      var val = animRunning[i];
	      if (val.animationStep === animationStep) {
	        val.active = true;
	        val.prevState = state;
	        start();
	        return val.stop;
	      }
	    }

	    var newAnim = {
	      animationStep: animationStep,
	      animationRender: animationRender,
	      prevState: state,
	      nextState: state,
	      active: true
	    };

	    newAnim.stop = function () {
	      return newAnim.active = false;
	    };
	    animRunning.push(newAnim);

	    start();

	    return newAnim.stop;
	  };
	}

	module.exports = exports['default'];

/***/ },

/***/ 219:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.7.1
	(function() {
	  var getNanoSeconds, hrtime, loadTime;

	  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
	    module.exports = function() {
	      return performance.now();
	    };
	  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
	    module.exports = function() {
	      return (getNanoSeconds() - loadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    loadTime = getNanoSeconds();
	  } else if (Date.now) {
	    module.exports = function() {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function() {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }

	}).call(this);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(220)))

/***/ },

/***/ 220:
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },

/***/ 221:
/***/ function(module, exports, __webpack_require__) {

	var now = __webpack_require__(222)
	  , global = typeof window === 'undefined' ? {} : window
	  , vendors = ['moz', 'webkit']
	  , suffix = 'AnimationFrame'
	  , raf = global['request' + suffix]
	  , caf = global['cancel' + suffix] || global['cancelRequest' + suffix]

	for(var i = 0; i < vendors.length && !raf; i++) {
	  raf = global[vendors[i] + 'Request' + suffix]
	  caf = global[vendors[i] + 'Cancel' + suffix]
	      || global[vendors[i] + 'CancelRequest' + suffix]
	}

	// Some versions of FF have rAF but not cAF
	if(!raf || !caf) {
	  var last = 0
	    , id = 0
	    , queue = []
	    , frameDuration = 1000 / 60

	  raf = function(callback) {
	    if(queue.length === 0) {
	      var _now = now()
	        , next = Math.max(0, frameDuration - (_now - last))
	      last = next + _now
	      setTimeout(function() {
	        var cp = queue.slice(0)
	        // Clear queue here to prevent
	        // callbacks from appending listeners
	        // to the current frame's queue
	        queue.length = 0
	        for(var i = 0; i < cp.length; i++) {
	          if(!cp[i].cancelled) {
	            try{
	              cp[i].callback(last)
	            } catch(e) {
	              setTimeout(function() { throw e }, 0)
	            }
	          }
	        }
	      }, Math.round(next))
	    }
	    queue.push({
	      handle: ++id,
	      callback: callback,
	      cancelled: false
	    })
	    return id
	  }

	  caf = function(handle) {
	    for(var i = 0; i < queue.length; i++) {
	      if(queue[i].handle === handle) {
	        queue[i].cancelled = true
	      }
	    }
	  }
	}

	module.exports = function(fn) {
	  // Wrap in a new function to prevent
	  // `cancel` potentially being assigned
	  // to the native rAF function
	  return raf.call(global, fn)
	}
	module.exports.cancel = function() {
	  caf.apply(global, arguments)
	}


/***/ },

/***/ 222:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.7.1
	(function() {
	  var getNanoSeconds, hrtime, loadTime;

	  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
	    module.exports = function() {
	      return performance.now();
	    };
	  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
	    module.exports = function() {
	      return (getNanoSeconds() - loadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    loadTime = getNanoSeconds();
	  } else if (Date.now) {
	    module.exports = function() {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function() {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }

	}).call(this);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(220)))

/***/ },

/***/ 223:
/***/ function(module, exports) {

	
	// used by the tree-walking updates and springs. Avoids some allocations
	"use strict";

	exports.__esModule = true;
	exports["default"] = zero;

	function zero() {
	  return 0;
	}

	module.exports = exports["default"];

/***/ },

/***/ 224:
/***/ function(module, exports, __webpack_require__) {

	

	// TODO: refactor common logic with updateCurrValue and updateCurrVelocity
	'use strict';

	exports.__esModule = true;
	exports.interpolateValue = interpolateValue;
	exports.updateCurrentStyle = updateCurrentStyle;
	exports.updateCurrentVelocity = updateCurrentVelocity;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _stepper = __webpack_require__(225);

	var _stepper2 = _interopRequireDefault(_stepper);

	var _spring = __webpack_require__(226);

	var _spring2 = _interopRequireDefault(_spring);

	function interpolateValue(alpha, nextStyle, prevStyle) {
	  // might be used by a TransitionMotion, where prevStyle might not exist anymore
	  if (!prevStyle) {
	    return nextStyle;
	  }

	  var ret = {};
	  for (var key in nextStyle) {
	    if (!nextStyle.hasOwnProperty(key)) {
	      continue;
	    }

	    if (nextStyle[key] == null || !nextStyle[key].config) {
	      ret[key] = nextStyle[key];
	      // not a spring config, not something we want to interpolate
	      continue;
	    }
	    var prevValue = prevStyle[key].config ? prevStyle[key].val : prevStyle[key];
	    ret[key] = _spring2['default'](nextStyle[key].val * alpha + prevValue * (1 - alpha), nextStyle[key].config);
	  }

	  return ret;
	}

	// TODO: refactor common logic with updateCurrentVelocity

	function updateCurrentStyle(frameRate, currentStyle, currentVelocity, style) {
	  var ret = {};
	  for (var key in style) {
	    if (!style.hasOwnProperty(key)) {
	      continue;
	    }
	    if (style[key] == null || !style[key].config) {
	      ret[key] = style[key];
	      // not a spring config, not something we want to interpolate
	      continue;
	    }
	    var _style$key$config = style[key].config;
	    var k = _style$key$config[0];
	    var b = _style$key$config[1];

	    var val = _stepper2['default'](frameRate,
	    // might have been a non-springed prop that just became one
	    currentStyle[key].val == null ? currentStyle[key] : currentStyle[key].val, currentVelocity[key], style[key].val, k, b)[0];
	    ret[key] = _spring2['default'](val, style[key].config);
	  }
	  return ret;
	}

	function updateCurrentVelocity(frameRate, currentStyle, currentVelocity, style) {
	  var ret = {};
	  for (var key in style) {
	    if (!style.hasOwnProperty(key)) {
	      continue;
	    }
	    if (style[key] == null || !style[key].config) {
	      // not a spring config, not something we want to interpolate
	      ret[key] = 0;
	      continue;
	    }
	    var _style$key$config2 = style[key].config;
	    var k = _style$key$config2[0];
	    var b = _style$key$config2[1];

	    var val = _stepper2['default'](frameRate,
	    // might have been a non-springed prop that just became one
	    currentStyle[key].val == null ? currentStyle[key] : currentStyle[key].val, currentVelocity[key], style[key].val, k, b)[1];
	    ret[key] = val;
	  }
	  return ret;
	}

/***/ },

/***/ 225:
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = stepper;

	var errorMargin = 0.0001;

	function stepper(frameRate, x, v, destX, k, b) {
	  // Spring stiffness, in kg / s^2

	  // for animations, destX is really spring length (spring at rest). initial
	  // position is considered as the stretched/compressed position of a spring
	  var Fspring = -k * (x - destX);

	  // Damping, in kg / s
	  var Fdamper = -b * v;

	  // usually we put mass here, but for animation purposes, specifying mass is a
	  // bit redundant. you could simply adjust k and b accordingly
	  // let a = (Fspring + Fdamper) / mass;
	  var a = Fspring + Fdamper;

	  var newV = v + a * frameRate;
	  var newX = x + newV * frameRate;

	  if (Math.abs(newV - v) < errorMargin && Math.abs(newX - x) < errorMargin) {
	    return [destX, 0];
	  }

	  return [newX, newV];
	}

	module.exports = exports["default"];

/***/ },

/***/ 226:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = spring;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _presets = __webpack_require__(227);

	var _presets2 = _interopRequireDefault(_presets);

	function spring(val) {
	  var config = arguments.length <= 1 || arguments[1] === undefined ? _presets2['default'].noWobble : arguments[1];

	  return { val: val, config: config };
	}

	module.exports = exports['default'];

/***/ },

/***/ 227:
/***/ function(module, exports) {

	
	// [stiffness, damping]
	"use strict";

	exports.__esModule = true;
	exports["default"] = {
	  noWobble: [170, 26], // the default
	  gentle: [120, 14],
	  wobbly: [180, 12],
	  stiff: [210, 20]
	};
	module.exports = exports["default"];

/***/ },

/***/ 228:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = deprecatedSprings;
	var hasWarnedForSpring = {};
	var hasWarnedForTransitionSpring = {};

	function deprecatedSprings(React) {
	  var Spring = React.createClass({
	    displayName: 'Spring',

	    componentWillMount: function componentWillMount() {
	      if (true) {
	        var ownerName = this._reactInternalInstance._currentElement._owner && this._reactInternalInstance._currentElement._owner.getName();
	        if (!hasWarnedForSpring[ownerName]) {
	          hasWarnedForSpring[ownerName] = true;
	          console.error('Spring (used in %srender) has now been renamed to Motion. ' + 'Please see the release note for the upgrade path. Thank you!', ownerName ? ownerName + '\'s ' : 'React.');
	        }
	      }
	    },

	    render: function render() {
	      return null;
	    }
	  });

	  var TransitionSpring = React.createClass({
	    displayName: 'TransitionSpring',

	    componentWillMount: function componentWillMount() {
	      if (true) {
	        var ownerName = this._reactInternalInstance._currentElement._owner && this._reactInternalInstance._currentElement._owner.getName();
	        if (!hasWarnedForTransitionSpring[ownerName]) {
	          hasWarnedForTransitionSpring[ownerName] = true;
	          console.error('TransitionSpring (used in %srender) has now been renamed to ' + 'TransitionMotion. Please see the release note for the upgrade ' + 'path. Thank you!', ownerName ? ownerName + '\'s ' : 'React.');
	        }
	      }
	    },

	    render: function render() {
	      return null;
	    }
	  });

	  return { Spring: Spring, TransitionSpring: TransitionSpring };
	}

	module.exports = exports['default'];

/***/ },

/***/ 229:
/***/ function(module, exports) {

	
	// turn {x: {val: 1, config: [1, 2]}, y: 2} generated by
	// `{x: spring(1, [1, 2]), y: 2}` into {x: 1, y: 2}

	'use strict';

	exports.__esModule = true;
	exports['default'] = stripStyle;

	function stripStyle(style) {
	  var ret = {};
	  for (var key in style) {
	    if (!style.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = style[key] == null || style[key].val == null ? style[key] : style[key].val;
	  }
	  return ret;
	}

	module.exports = exports['default'];

/***/ },

/***/ 230:
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = reorderKeys;

	function reorderKeys(obj, f) {
	  var newKeys = f(Object.keys(obj));
	  var ret = {};
	  for (var i = 0; i < newKeys.length; i++) {
	    var key = newKeys[i];
	    ret[key] = obj[key];
	  }

	  return ret;
	}

	module.exports = exports["default"];

/***/ },

/***/ 231:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(158);
	var PubSub = __webpack_require__(208);

	var Header = __webpack_require__(211);
	var NextButton = __webpack_require__(232);
	var EnterAnimate = __webpack_require__(212);

	var mainContainerStyle = {
	  marginTop: '2%',
	  paddingTop: '50',
	  paddingBottom: '50'
	};

	var imgContainerStyle = {
	  marginTop: '2em'
	}; 

	var nextButtonStyle = {
	  marginTop: '50'
	};

	var OverView = React.createClass({displayName: "OverView",
	  getInitialState: function() {
	    return {
	      data: {}
	    }
	  },

	  componentDidMount: function() {
	    $('.ui.sidebar.uncover.visible')
	      .sidebar('hide');

	    var overview_token = PubSub.subscribe('data', function(msg, result) {
	      this.setState({
	        data: result
	      });
	    }.bind(this));
	  },

	  render: function() {
	    return (
	      React.createElement(EnterAnimate, null, 
	        React.createElement("div", null, 
	          React.createElement(Header, null, "总览")
	        ), 
	        React.createElement("div", {className: "ui inverted vertical masthead center aligned segment", style: mainContainerStyle}, 
	          
	          React.createElement("div", {className: "ui center aligned text container"}, 
	            React.createElement("div", {className: "ui inverted two statistics"}, 
	              React.createElement("div", {className: "statistic"}, 
	                React.createElement("div", {className: "value"}, 
	                  this.state.data.totalImage
	                ), 
	                React.createElement("div", {className: "label"}, "总图片数 ")
	              ), 

	              React.createElement("div", {className: "statistic"}, 
	                React.createElement("div", {className: "value"}, 
	                  this.state.data.userCount
	                ), 
	                React.createElement("div", {className: "label"}, "总用户数 ")
	              )
	            ), 
	            React.createElement(NextButton, {url: "/tuchong/digitalcamera", style: nextButtonStyle})
	          )

	        )
	      )
	    );
	  }
	});

	module.exports = OverView;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 232:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(158);
	var Link = __webpack_require__(159).Link;

	var arrowIconStyle = {
	  margin: '0'
	};

	var NextButton = React.createClass({displayName: "NextButton",
	  render: function() {
	    return (
	      React.createElement(Link, {to: this.props.url, className: "ui circular inverted orange right arrow icon button", style: this.props.style}, 
	        React.createElement("i", {className: "right arrow icon", style: arrowIconStyle})
	      )
	    );
	  }
	});

	module.exports = NextButton;

/***/ },

/***/ 233:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(158);
	var PubSub = __webpack_require__(208);

	var Header = __webpack_require__(211);
	var NextButton = __webpack_require__(232);
	var EnterAnimate = __webpack_require__(212);

	var chartStyle = {
	  width: '800',
	  height: '400'
	};

	var DigitalCamera = React.createClass({displayName: "DigitalCamera",
	  getInitialState: function() {
	    return {
	      data: {}
	    }
	  },

	  renderChart: function() {
	    // 基于准备好的dom，初始化echarts图表
	    var myChart = echarts.init(document.getElementById('camera-chart-container')); 
	    option = {
	      title : {
	        text: '使用最多的相机Top10',
	        subtext: '基于图虫真实数据',
	        x:'center'
	      },
	      tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	      },
	      legend: {
	        x : 'center',
	        y : 'bottom',
	        data:[
	          this.state.data.camera[0].type,
	          this.state.data.camera[1].type,
	          this.state.data.camera[2].type,
	          this.state.data.camera[3].type,
	          this.state.data.camera[4].type,
	          this.state.data.camera[5].type,
	          this.state.data.camera[6].type,
	          this.state.data.camera[7].type,
	          this.state.data.camera[8].type,
	          this.state.data.camera[9].type
	        ]
	      },
	      toolbox: {
	        show : true,
	        feature : {
	          mark : {show: true},
	          dataView : {show: true, readOnly: false},
	          magicType : {
	            show: true, 
	            type: ['pie', 'funnel']
	          },
	          restore : {show: true},
	          saveAsImage : {show: true}
	        }
	      },
	      calculable : true,
	      series : [{
	        name:'照片数量',
	        type:'pie',
	        radius : [30, 110],
	        center : ['50%', 200],
	        roseType : 'area',
	        x: '50%',               // for funnel
	        max: 40,                // for funnel
	        sort : 'ascending',     // for funnel
	        data:[
	          {value:this.state.data.camera[0].totalImage, name:this.state.data.camera[0].type},
	          {value:this.state.data.camera[1].totalImage, name:this.state.data.camera[1].type},
	          {value:this.state.data.camera[2].totalImage, name:this.state.data.camera[2].type},
	          {value:this.state.data.camera[3].totalImage, name:this.state.data.camera[3].type},
	          {value:this.state.data.camera[4].totalImage, name:this.state.data.camera[4].type},
	          {value:this.state.data.camera[5].totalImage, name:this.state.data.camera[5].type},
	          {value:this.state.data.camera[6].totalImage, name:this.state.data.camera[6].type},
	          {value:this.state.data.camera[7].totalImage, name:this.state.data.camera[7].type},
	          {value:this.state.data.camera[8].totalImage, name:this.state.data.camera[8].type},
	          {value:this.state.data.camera[9].totalImage, name:this.state.data.camera[9].type}
	        ]
	      }]
	    };
	    // 为echarts对象加载数据 
	    myChart.setOption(option);
	  },

	  componentDidMount: function() {
	    $('.ui.sidebar.uncover.visible')
	      .sidebar('hide');

	    this.digital_camrea_token = PubSub.subscribe('data', function(msg, result) {
	      this.setState({
	        data: result
	      });
	      this.renderChart();
	    }.bind(this));
	  },

	  render: function() {
	    return (
	      React.createElement(EnterAnimate, null, 
	        React.createElement(Header, null, "图虫中使用最多的相机Top 10"), 
	        React.createElement("div", {className: "ui one colum centered grid"}, 
	          React.createElement("div", {className: "colum"}, 
	            React.createElement("div", {id: "camera-chart-container", style: chartStyle})
	          ), 
	          React.createElement("div", {className: "ui centered row"}, 
	            React.createElement(NextButton, {url: "/tuchong/lens"})
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = DigitalCamera;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 234:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(158);
	var PubSub = __webpack_require__(208);

	var Header = __webpack_require__(211);
	var NextButton = __webpack_require__(232);
	var EnterAnimate = __webpack_require__(212);

	var chartStyle = {
	  width: '1200',
	  height: '400'
	};

	var Lens = React.createClass({displayName: "Lens",
	  getInitialState: function() {
	    return {
	      data: {}
	    }
	  },

	  renderChart: function() {
	    // 基于准备好的dom，初始化echarts图表
	    $('.ui.sidebar.uncover.visible')
	      .sidebar('hide');

	    var myChart = echarts.init(document.getElementById('lens-chart-container')); 
	    
	    function createRandomItemStyle() {
	      return {
	        normal: {
	          color: 'rgb(' + [
	            Math.round(Math.random() * 160),
	            Math.round(Math.random() * 160),
	            Math.round(Math.random() * 160)
	          ].join(',') + ')'
	        }
	      };
	    }

	    var option = {
	        title : {
	          text: '使用最多的镜头Top20',
	          subtext: '基于图虫真实数据',
	          x:'center'
	        },
	        tooltip: {
	          show: true
	        },
	        series: [{
	          name: '该镜头所拍摄的照片数量',
	          type: 'wordCloud',
	          size: ['80%', '80%'],
	          textRotation : [0, 45, 90, -45],
	          textPadding: 0,
	          autoSize: {
	              enable: true,
	              minSize: 14
	          },
	          data: [
	            {
	              name: this.state.data.lens[0].type,
	              value: this.state.data.lens[0].totalImage,
	              itemStyle: {
	                normal: {
	                  color: 'black'
	                }
	              }
	            },
	            {
	              name: this.state.data.lens[1].type,
	              value: this.state.data.lens[1].totalImage,
	              itemStyle: createRandomItemStyle()
	            },
	            {
	              name: this.state.data.lens[2].type,
	              value: this.state.data.lens[2].totalImage,
	              itemStyle: createRandomItemStyle()
	            },
	            {
	              name: this.state.data.lens[3].type,
	              value: this.state.data.lens[3].totalImage,
	              itemStyle: createRandomItemStyle()
	            },
	            {
	              name: this.state.data.lens[4].type,
	              value: this.state.data.lens[4].totalImage,
	              itemStyle: createRandomItemStyle()
	            },
	            {
	              name: this.state.data.lens[5].type,
	              value: this.state.data.lens[5].totalImage,
	              itemStyle: createRandomItemStyle()
	            },
	            {
	              name: this.state.data.lens[6].type,
	              value: this.state.data.lens[6].totalImage,
	              itemStyle: createRandomItemStyle()
	            },
	            {
	              name: this.state.data.lens[7].type,
	              value: this.state.data.lens[7].totalImage,
	              itemStyle: createRandomItemStyle()
	            },
	            {
	              name: this.state.data.lens[8].type,
	              value: this.state.data.lens[8].totalImage,
	              itemStyle: createRandomItemStyle()
	            },
	            {
	              name: this.state.data.lens[9].type,
	              value: this.state.data.lens[9].totalImage,
	              itemStyle: createRandomItemStyle()
	            },
	            {
	              name: this.state.data.lens[10].type,
	              value: this.state.data.lens[10].totalImage,
	              itemStyle: createRandomItemStyle()
	            },
	            {
	              name: this.state.data.lens[11].type,
	              value: this.state.data.lens[11].totalImage,
	              itemStyle: createRandomItemStyle()
	            },
	            {
	              name: this.state.data.lens[12].type,
	              value: this.state.data.lens[12].totalImage,
	              itemStyle: createRandomItemStyle()
	            },
	            {
	              name: this.state.data.lens[13].type,
	              value: this.state.data.lens[13].totalImage,
	              itemStyle: createRandomItemStyle()
	            },
	            {
	              name: this.state.data.lens[14].type,
	              value: this.state.data.lens[14].totalImage,
	              itemStyle: createRandomItemStyle()
	            },
	            {
	              name: this.state.data.lens[15].type,
	              value: this.state.data.lens[15].totalImage,
	              itemStyle: createRandomItemStyle()
	            },
	            {
	              name: this.state.data.lens[16].type,
	              value: this.state.data.lens[16].totalImage,
	              itemStyle: createRandomItemStyle()
	            },
	            {
	              name: this.state.data.lens[17].type,
	              value: this.state.data.lens[17].totalImage,
	              itemStyle: createRandomItemStyle()
	            },
	            {
	              name: this.state.data.lens[18].type,
	              value: this.state.data.lens[18].totalImage,
	              itemStyle: createRandomItemStyle()
	            },
	            {
	              name: this.state.data.lens[19].type,
	              value: this.state.data.lens[19].totalImage,
	              itemStyle: createRandomItemStyle()
	            }
	          ]
	        }]
	    };
	  

	    // 为echarts对象加载数据 
	    myChart.setOption(option);
	  },

	  componentDidMount: function() {
	    $('.ui.sidebar.uncover.visible')
	      .sidebar('hide');

	    this.lens_token = PubSub.subscribe('data', function(msg, result) {
	      console.log(result);
	      this.setState({
	        data: result
	      });
	      this.renderChart();
	    }.bind(this));
	  },

	  render: function() {
	    return (
	      React.createElement(EnterAnimate, null, 
	        React.createElement(Header, null, "图虫中使用最多的镜头Top20"), 
	        React.createElement("div", {className: "ui one colum centered grid"}, 
	          React.createElement("div", {className: "colum"}, 
	            React.createElement("div", {id: "lens-chart-container", style: chartStyle})
	          ), 
	          React.createElement("div", {className: "ui centered row"}, 
	            React.createElement(NextButton, {url: "/tuchong/userscale/chart/1"})
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = Lens;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 235:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(158);
	var PubSub = __webpack_require__(208);

	var Header = __webpack_require__(211);
	var NextButton = __webpack_require__(232);
	var EnterAnimate = __webpack_require__(212);

	var chartStyle = {
	  width: '800',
	  height: '400'
	};

	var UserLocation = React.createClass({displayName: "UserLocation",
	  getInitialState: function() {
	    return {
	      data: {}
	    }
	  },

	  renderChart: function() {
	    var myChart = echarts.init(document.getElementById('chart-container')); 

	    option = {
	      title : {
	        text: '用户分布',
	        subtext: '基于50万真实用户数据',
	        x:'center'
	      },
	      tooltip : {
	        trigger: 'item'
	      },
	      legend: {
	        orient: 'vertical',
	        x:'left',
	        data:['用户分布']
	      },
	      dataRange: {
	        min: 0,
	        max: 80000,
	        x: 'left',
	        y: 'bottom',
	        text:['高','低'],           // 文本，默认为数值文本
	        calculable : true
	      },
	      toolbox: {
	        show: true,
	        orient : 'vertical',
	        x: 'right',
	        y: 'center',
	        feature : {
	          mark : {show: true},
	          dataView : {show: true, readOnly: false},
	          restore : {show: true},
	          saveAsImage : {show: true}
	        }
	      },
	      roamController: {
	        show: true,
	        x: 'right',
	        mapTypeControl: {
	          'china': true
	        }
	      },
	      series : [{
	        name: '用户数',
	        type: 'map',
	        mapType: 'china',
	        roam: false,
	        itemStyle:{
	          normal:{label:{show:true}},
	          emphasis:{label:{show:true}}
	        },
	        data:[
	          {name: '北京',value: this.state.data.beijing},
	          {name: '天津',value: this.state.data.tianjin},
	          {name: '上海',value: this.state.data.shanghai},
	          {name: '重庆',value: this.state.data.chongqing},
	          {name: '河北',value: this.state.data.hebei},
	          {name: '河南',value: this.state.data.henan},
	          {name: '云南',value: this.state.data.yunnan},
	          {name: '辽宁',value: this.state.data.liaoning},
	          {name: '黑龙江',value: this.state.data.heilongjiang},
	          {name: '湖南',value: this.state.data.hunan},
	          {name: '安徽',value: this.state.data.anhui},
	          {name: '山东',value: this.state.data.shandong},
	          {name: '新疆',value: this.state.data.xinjiang},
	          {name: '江苏',value: this.state.data.jiangsu},
	          {name: '浙江',value: this.state.data.zhejiang},
	          {name: '江西',value: this.state.data.jiangxi},
	          {name: '湖北',value: this.state.data.hubei},
	          {name: '广西',value: this.state.data.guangxi},
	          {name: '甘肃',value: this.state.data.gansu},
	          {name: '山西',value: this.state.data.shanxi},
	          {name: '内蒙古',value: this.state.data.neimenggu},
	          {name: '陕西',value: this.state.data.shanxi},
	          {name: '吉林',value: this.state.data.jilin},
	          {name: '福建',value: this.state.data.fujian},
	          {name: '贵州',value: this.state.data.guizhou},
	          {name: '广东',value: this.state.data.guangdong},
	          {name: '青海',value: this.state.data.qinghai},
	          {name: '西藏',value: this.state.data.xizang},
	          {name: '四川',value: this.state.data.sichuan},
	          {name: '宁夏',value: this.state.data.ningxia},
	          {name: '海南',value: this.state.data.hainan},
	          {name: '台湾',value: this.state.data.taiwan},
	          {name: '香港',value: this.state.data.xianggang},
	          {name: '澳门',value: this.state.data.aomen}
	        ]
	      }]
	    };

	    // 为echarts对象加载数据 
	    myChart.setOption(option); 
	  },

	  componentDidMount: function() {
	    $('.ui.sidebar.uncover.visible')
	      .sidebar('hide');

	    this.user_loaction_token = PubSub.subscribe('data', function(msg, result) {
	      console.log(result);
	      this.setState({
	        data: result
	      });
	      this.renderChart();
	    }.bind(this));
	  },

	/*  componentWillUnmount: function() {
	    PubSub.unsubscribe(this.user_loaction_token);
	  },*/

	  render: function() {
	    return (
	      React.createElement(EnterAnimate, null, 
	        React.createElement(Header, null, "图虫用户分布"), 
	        React.createElement("div", {className: "ui one colum centered grid"}, 
	          React.createElement("div", {className: "colum"}, 
	            React.createElement("div", {id: "chart-container", style: chartStyle})
	          ), 
	          React.createElement("div", {className: "ui centered row"}, 
	            React.createElement(NextButton, {url: "/other"})
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = UserLocation;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 236:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(158);
	var PubSub = __webpack_require__(208);

	var Header = __webpack_require__(211);
	var NextButton = __webpack_require__(232);
	var EnterAnimate = __webpack_require__(212);

	var chartStyle = {
	  width: '800',
	  height: '400'
	};

	var UserScaleOne = React.createClass({displayName: "UserScaleOne",
	  getInitialState: function() {
	    return {
	      data: {}
	    }
	  },

	  renderChart: function() {
	    // 基于准备好的dom，初始化echarts图表
	    var myChart = echarts.init(document.getElementById('user-scale-chart')); 
	    
	    var option = {
	        tooltip: {
	          show: true
	        },
	        legend: {
	          data:['用户数']
	        },
	        xAxis : [{
	          type : 'category',
	          name : '关注者数量',
	          data : ["0-10","10-100","100-1000","1000-3000","3000-5000","5000-8000","8000+"]
	        }],
	        yAxis : [{
	          type : 'value'
	        }],
	        series : [{
	          "name":"用户数",
	          "type":"bar",
	          "data":[
	            this.state.data.followers_0_10,
	            this.state.data.followers_10_100,
	            this.state.data.followers_100_1000,
	            this.state.data.followers_1000_3000,
	            this.state.data.followers_3000_5000,
	            this.state.data.followers_5000_8000,
	            this.state.data.followers_8000_end
	          ]
	        }]
	    };

	    // 为echarts对象加载数据 
	    myChart.setOption(option);
	  },

	  componentDidMount: function() {
	    $('.ui.sidebar.uncover.visible')
	      .sidebar('hide');
	    
	    this.user_scale_one_token = PubSub.subscribe('data', function(msg, result) {
	      console.log(result);
	      this.setState({
	        data: result
	      });
	      this.renderChart();
	    }.bind(this));
	  },

	  render: function() {
	    return (
	      React.createElement(EnterAnimate, null, 
	        React.createElement(Header, null, "图虫用户分析 1"), 
	        React.createElement("div", {className: "ui one colum centered grid"}, 
	          React.createElement("div", {className: "colum"}, 
	            React.createElement("div", {id: "user-scale-chart", style: chartStyle})
	          ), 
	          React.createElement("div", {className: "ui centered row"}, 
	            React.createElement(NextButton, {url: "/tuchong/userscale/chart/2"})
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = UserScaleOne;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 237:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(158);
	var PubSub = __webpack_require__(208);

	var Header = __webpack_require__(211);
	var NextButton = __webpack_require__(232);
	var EnterAnimate = __webpack_require__(212);

	var chartStyle = {
	  width: '800',
	  height: '400'
	};

	var UserScaleTwo = React.createClass({displayName: "UserScaleTwo",
	  getInitialState: function() {
	    return {
	      data: {
	      }
	    }
	  },

	  renderChart: function() {
	    // 基于准备好的dom，初始化echarts图表
	    var myChart = echarts.init(document.getElementById('chart-container')); 
	    
	    var dataStyle = {
	      normal: {
	        label: {show:false},
	        labelLine: {show:false}
	      }
	    };
	    var placeHolderStyle = {
	      normal : {
	        color: 'rgba(0,0,0,0)',
	        label: {show:false},
	        labelLine: {show:false}
	      },
	      emphasis : {
	        color: 'rgba(0,0,0,0)'
	      }
	    };
	    option = {
	      title: {
	        text: '多少活跃用户？',
	        subtext: 'Tuchong.com',
	        sublink: 'http://tuchong.com',
	        x: 'center',
	        y: 'center',
	        itemGap: 20,
	        textStyle : {
	          color : 'rgba(30,144,255,0.8)',
	          fontFamily : '微软雅黑',
	          fontSize : 24,
	          fontWeight : 'bolder'
	        }
	      },
	      tooltip : {
	        show: true,
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	      },
	      legend: {
	        orient : 'vertical',
	        x : document.getElementById('chart-container').offsetWidth / 2 + 10,
	        y : 55,
	        itemGap:12,
	        data:['不活跃用户','普通用户','活跃用户']
	      },
	      toolbox: {
	        show : true,
	        feature : {
	          mark : {show: true},
	          dataView : {show: true, readOnly: false},
	          restore : {show: true},
	          saveAsImage : {show: true}
	        }
	      },
	      series : [{
	        name:'1',
	        type:'pie',
	        clockWise:false,
	        radius : [125, 150],
	        itemStyle : dataStyle,
	        data:[{
	          value:this.state.data.followers_0_10,
	          name:'不活跃用户'
	        },
	        {
	          value: parseInt(this.state.data.followers_10_100) + parseInt(this.state.data.followers_100_1000) + parseInt(this.state.data.followers_1000_3000) + parseInt(this.state.data.followers_3000_5000) + parseInt(this.state.data.followers_5000_8000) + parseInt(this.state.data.followers_8000_end),
	          name:'invisible',
	          itemStyle : placeHolderStyle
	        }]
	      },
	      {
	        name:'2',
	        type:'pie',
	        clockWise:false,
	        radius : [100, 125],
	        itemStyle : dataStyle,
	        data:[{
	          value: parseInt(this.state.data.followers_10_100) + parseInt(this.state.data.followers_100_1000),
	          name:'普通用户'
	        },
	        {
	          value: parseInt(this.state.data.followers_0_10) + parseInt(this.state.data.followers_1000_3000) + parseInt(this.state.data.followers_3000_5000) + parseInt(this.state.data.followers_5000_8000) + parseInt(this.state.data.followers_8000_end),
	          name:'invisible',
	          itemStyle : placeHolderStyle
	        }]
	      },
	      {
	        name:'3',
	        type:'pie',
	        clockWise:false,
	        radius : [75, 100],
	        itemStyle : dataStyle,
	        data:[{
	          value: parseInt(this.state.data.followers_1000_3000) + parseInt(this.state.data.followers_3000_5000) + parseInt(this.state.data.followers_5000_8000) + parseInt(this.state.data.followers_8000_end), 
	          name:'活跃用户'
	        },
	        {
	          value:parseInt(this.state.data.followers_0_10) + parseInt(this.state.data.followers_10_100) + parseInt(this.state.data.followers_10_100) + parseInt(this.state.data.followers_100_1000),
	          name:'invisible',
	          itemStyle : placeHolderStyle
	        }]
	      }] 
	    };
	    // 为echarts对象加载数据 
	    myChart.setOption(option);
	  },

	  componentDidMount: function() {
	    $('.ui.sidebar.uncover.visible')
	      .sidebar('hide');
	                       
	    this.user_scale_two_token = PubSub.subscribe('data', function(msg, result) {
	      console.log(result);
	      this.setState({
	        data: result
	      });
	      this.renderChart();
	    }.bind(this));
	  },

	  render: function() {
	    return (
	      React.createElement(EnterAnimate, null, 
	        React.createElement(Header, null, "图虫用户分析 2"), 
	        React.createElement("div", {className: "ui one colum centered grid"}, 
	          React.createElement("div", {className: "colum"}, 
	            React.createElement("div", {id: "chart-container", style: chartStyle})
	          ), 
	          React.createElement("div", {className: "ui centered row"}, 
	            React.createElement(NextButton, {url: "/tuchong/userlocation"})
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = UserScaleTwo;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 238:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(158);

	var Header = __webpack_require__(211);
	var NextButton = __webpack_require__(232);
	var EnterAnimate = __webpack_require__(212);

	var ArchitecturePage = React.createClass({displayName: "ArchitecturePage",
	  componentDidMount: function(){
	    $('.ui.sidebar.uncover.visible')
	      .sidebar('hide');
	  },
	  
	  render: function() {
	    return (
	      React.createElement(EnterAnimate, null, 
	        React.createElement(Header, null, "Architecture"), 
	        React.createElement("div", {className: "ui one colum centered grid"}, 

	          React.createElement("div", {className: "ui centered row"}, 
	            React.createElement("img", {class: "ui image", src: "/images/architecture.png"})
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = ArchitecturePage;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 239:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(158);

	var Header = __webpack_require__(211);
	var NextButton = __webpack_require__(232);
	var EnterAnimate = __webpack_require__(212);

	var mainContainerStyle = {
	  marginTop: '2%',
	  paddingTop: '50',
	  paddingBottom: '50'
	};

	var nextButtonStyle = {
	  marginTop: '50'
	};

	var tagContainerStyle = {
	  paddingBottom: '20'
	};

	var OtherPage = React.createClass({displayName: "OtherPage",
	  componentDidMount: function(){
	    $('.ui.sidebar.uncover.visible')
	      .sidebar('hide');
	  },
	  
	  render: function() {
	    return (
	      React.createElement(EnterAnimate, null, 
	        React.createElement(Header, null, "关于Jiva"), 
	        React.createElement("div", {className: "ui inverted vertical masthead center aligned segment", style: mainContainerStyle}, 
	          
	          React.createElement("div", {className: "ui center aligned text container"}, 
	            React.createElement("h1", null, "一个爱摄影的程序猿同学"), 
	            React.createElement("div", {className: "ui container", style: tagContainerStyle}, 
	              React.createElement("a", {className: "ui blue label"}, React.createElement("i", {className: "photo icon"}), "摄影"), 
	              React.createElement("a", {className: "ui teal label"}, React.createElement("i", {className: "code icon"}), "程序猿"), 
	              React.createElement("a", {className: "ui green label"}, React.createElement("i", {className: "student icon"}), "学生"), 
	              React.createElement("a", {className: "ui olive label"}, React.createElement("i", {className: "area chart icon"}), "风光"), 
	              React.createElement("a", {className: "ui yellow label"}, React.createElement("i", {className: "paint brush icon"}), "后期"), 
	              React.createElement("a", {className: "ui orange label"}, React.createElement("i", {className: "child icon"}), "90后"), 
	              React.createElement("a", {className: "ui red label"}, React.createElement("i", {className: "university icon"}), "北邮")
	            ), 
	            React.createElement("div", {className: "ui small images"}, 
	              React.createElement("img", {src: "http://photos.tuchong.com/784250/ft640/26690128.jpg"}), 
	              React.createElement("img", {src: "http://photos.tuchong.com/784250/ft640/26688976.jpg"}), 
	              React.createElement("img", {src: "http://photos.tuchong.com/784250/ft640/26689181.jpg"}), 
	              React.createElement("img", {src: "http://photos.tuchong.com/784250/ft640/26689204.jpg"})
	            ), 
	            React.createElement("div", {className: "ui text center aligned container"}, 
	              React.createElement("div", {className: "item"}, 
	                React.createElement("i", {className: "marker icon"}), 
	                React.createElement("div", {className: "content"}, "Bei Jing, BJ ")
	              ), 
	              React.createElement("div", {class: "item"}, 
	                React.createElement("div", {class: "content"}, 
	                  React.createElement("a", {href: "mailto:jivacore@gmail.com"}, "jivacore@gmail.com")
	                )
	              )
	            ), 
	            React.createElement("a", {href: "http://jiva.tuchong.com", className: "ui inverted orange right arrow icon button"}, 
	              "进入我的图虫主页"
	            )
	          )

	        )
	      )
	    );
	  }
	});

	module.exports = OtherPage;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 240:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(158);

	var Header = __webpack_require__(211);
	var NextButton = __webpack_require__(232);
	var EnterAnimate = __webpack_require__(212);

	var AboutPage = React.createClass({displayName: "AboutPage",
	  componentDidMount: function(){
	    $('.ui.sidebar.uncover.visible')
	      .sidebar('hide');
	  },

	  render: function() {
	    return (
	      React.createElement(EnterAnimate, null, 
	        React.createElement(Header, null, "About"), 
	        React.createElement("div", {className: "ui one colum centered grid"}


	        )
	      )
	    );
	  }
	});

	module.exports = AboutPage;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 241:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {var React = __webpack_require__(2);

	var $ = jQuery = __webpack_require__(1);
	window.jQuery = $;

	var menuButtonStyle = {
	  top: '5em',
	  left: '0',
	  width: '100',
	  zIndex: '1000',
	  whiteSpace: 'nowrap',
	  overflow: 'hidden'
	};

	var MenuButton = React.createClass({displayName: "MenuButton",
	  componentDidMount: function() {
	    $('.menu-button').on('click', function(){
	      $('.ui.sidebar.inverted.vertical.menu')
	        .sidebar('toggle');
	    });
	  },

	  render: function() {
	    return (
	      React.createElement("button", {className: "menu-button ui black big launch right attached fixed button", style: menuButtonStyle}, 
	        React.createElement("i", {className: "content icon"}), 
	        React.createElement("span", {className: "text"}, "菜单")
	      )
	    );
	  }
	});

	module.exports = MenuButton;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }

});