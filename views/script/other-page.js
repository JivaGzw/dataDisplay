var React = require('react');
var ReactDOM = require('react-dom');

var Header = require('../component/header.js');
var NextButton = require('../component/next-button.js');
var EnterAnimate = require('../component/enter-animate.js');

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

var OtherPage = React.createClass({
  componentDidMount: function(){
    $('.ui.sidebar.uncover.visible')
      .sidebar('hide');
  },
  
  render: function() {
    return (
      <EnterAnimate>
        <Header>关于Jiva</Header>
        <div className="ui inverted vertical masthead center aligned segment" style={mainContainerStyle}>
          
          <div className="ui center aligned text container">
            <h1>一个爱摄影的程序猿同学</h1>
            <div className="ui container" style={tagContainerStyle}>
              <a className="ui blue label"><i className="photo icon"></i>摄影</a>
              <a className="ui teal label"><i className="code icon"></i>程序猿</a>
              <a className="ui green label"><i className="student icon"></i>学生</a>
              <a className="ui olive label"><i className="area chart icon"></i>风光</a>
              <a className="ui yellow label"><i className="paint brush icon"></i>后期</a>
              <a className="ui orange label"><i className="child icon"></i>90后</a>
              <a className="ui red label"><i className="university icon"></i>北邮</a>
            </div>
            <div className="ui small images">
              <img src="http://photos.tuchong.com/784250/ft640/26690128.jpg" />
              <img src="http://photos.tuchong.com/784250/ft640/26688976.jpg" />
              <img src="http://photos.tuchong.com/784250/ft640/26689181.jpg" />
              <img src="http://photos.tuchong.com/784250/ft640/26689204.jpg" />
            </div>
            <div className="ui text center aligned container">
              <div className="item">
                <i className="marker icon"></i>
                <div className="content">Bei Jing, BJ </div>
              </div>
              <div class="item">
                <div class="content">
                  <a href="mailto:jivacore@gmail.com">jivacore@gmail.com</a>
                </div>
              </div>
            </div>
            <a href="http://jiva.tuchong.com" className="ui inverted orange right arrow icon button">
              进入我的图虫主页
            </a>
          </div>

        </div>
      </EnterAnimate>
    );
  }
});

module.exports = OtherPage;