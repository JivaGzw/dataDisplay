var React = require('react');
var ReactDOM = require('react-dom');

var Header = require('../component/header.js');
var NextButton = require('../component/next-button.js');
var EnterAnimate = require('../component/enter-animate.js');

var mainContainerStyle = {
  marginTop: '5%',
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
      data: {
        
      }
    }
  },

  componentDidMount: function() {
    $('.ui.sidebar.uncover.visible')
      .sidebar('hide');

    this.overview_token = PubSub.subscribe('data', function(msg, allData) {
      this.setState({
        data: allData
      });
    });
  },

  render: function() {
    return (
      <EnterAnimate>
        <div>
          <Header>OverView</Header>
        </div>
        <div className="ui inverted vertical masthead center aligned segment" style={mainContainerStyle}>
          
          <div className="ui center aligned text container">
            <div className="ui inverted two statistics">
              <div className="statistic">
                <div className="value">31,200 </div>
                <div className="label">Total images </div>
              </div>

              <div className="statistic">
                <div className="value">
                  22
                </div>
                <div className="label">Total Users </div>
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