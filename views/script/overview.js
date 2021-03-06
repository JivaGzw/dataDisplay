var React = require('react');
var ReactDOM = require('react-dom');
var PubSub = require('pubsub-js');

var Header = require('../component/header.js');
var NextButton = require('../component/next-button.js');
var EnterAnimate = require('../component/enter-animate.js');

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

var OverView = React.createClass({
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
      <EnterAnimate>
        <div>
          <Header>总览</Header>
        </div>
        <div className="ui inverted vertical masthead center aligned segment" style={mainContainerStyle}>
          
          <div className="ui center aligned text container">
            <div className="ui inverted two statistics">
              <div className="statistic">
                <div className="value">
                  {this.state.data.totalImage}
                </div>
                <div className="label">总图片数 </div>
              </div>

              <div className="statistic">
                <div className="value">
                  {this.state.data.userCount}
                </div>
                <div className="label">总用户数 </div>
              </div>
            </div>
            <NextButton url="/tuchong/digitalcamera" style={nextButtonStyle}></NextButton>
          </div>

        </div>
      </EnterAnimate>
    );
  }
});

module.exports = OverView;