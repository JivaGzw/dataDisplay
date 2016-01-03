var React = require('react');

var backgroundStyle = {
  position: "absolute",
  top: "0",
  left: "0",
  zIndex: "-1",
  width: "100%",
  height: "100%",
  margin: "0",
  padding: "0"
};

var FullAnimateBackground = React.createClass({
  render: function() {
    return (
      <div id="fullAnimateBackground" style={backgroundStyle}>
        <canvas id="demo-canvas" width="0" height="0"></canvas>
      </div>
    );
  }
});

module.exports = FullAnimateBackground;