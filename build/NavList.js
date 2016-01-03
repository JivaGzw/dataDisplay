webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(157);
	var Link = __webpack_require__(158).Link;

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
	          React.createElement("b", null, "Home")
	        ), 
	        React.createElement("div", {className: "item"}, 
	          React.createElement("div", {className: "header"}, 
	            "Summarize"
	          ), 
	          React.createElement("div", {className: "menu"}, 
	            React.createElement(Link, {to: "tuchong/overview", className: "item"}, 
	              "OverView"
	            ), 
	            React.createElement(Link, {to: "tuchong/digitalcamera", className: "item"}, 
	              "1. Digital Camera"
	            ), 
	            React.createElement(Link, {to: "tuchong/lens", className: "item"}, 
	              "2. Camera Lens"
	            ), 
	            React.createElement(Link, {to: "tuchong/userscale/chart/1", className: "item"}, 
	              "3. User Scale Chart 1"
	            ), 
	            React.createElement(Link, {to: "tuchong/userscale/chart/2", className: "item"}, 
	              "4. User Scale Chart 2"
	            ), 
	            React.createElement(Link, {to: "tuchong/userlocation", className: "item"}, 
	              "5. User Location"
	            ), 
	            React.createElement(Link, {to: "other", className: "item"}, 
	              "6. Other"
	            )
	          )
	        ), 
	        React.createElement(Link, {to: "architecture", className: "item"}, 
	          React.createElement("b", null, "Architecture")
	        ), 
	        React.createElement(Link, {to: "about", className: "item"}, 
	          React.createElement("b", null, "About")
	        ), 
	        
	        React.createElement("div", {className: "item"}, 
	          React.createElement("h5", {className: "ui grey horizontal divider inverted header"}, 
	            "Technical Assistance"
	          ), 
	          React.createElement("div", {className: "menu"}, 
	            React.createElement("div", {className: "item"}, 
	              "React.js"
	            ), 
	            React.createElement("div", {className: "item"}, 
	              "Node.js"
	            ), 
	            React.createElement("div", {className: "item"}, 
	              "Express.js"
	            ), 
	            React.createElement("div", {className: "item"}, 
	              "SemanticUI"
	            ), 
	            React.createElement("div", {className: "item"}, 
	              "ECharts"
	            ), 
	            React.createElement("div", {className: "item"}, 
	              "Mongodb"
	            ), 
	            React.createElement("div", {className: "item"}, 
	              "Redis"
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

/***/ }
]);