var React = require('react');
var ReactDOM = require('react-dom');
var Animate = require('react-motion');

var EnterAnimate = React.createClass({
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
      <Animate.Motion defaultStyle={this.getDefalutStyle()} style={this.getStyle()}>
        {
          function(obj){
            return (
              <div style={{perspective: 1500}}>
                <div style={{
                  opacity: obj.x,
                  transform: "rotateY("+(50-50*obj.z)+"deg)",
                  transformOrigin: "0% 50%"
                }}>
                  {this.props.children}
                </div>
              </div>
              
            )
            
          }.bind(this)
        }
      </Animate.Motion>
    );
  }
});

module.exports = EnterAnimate;