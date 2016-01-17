var React = require('react');
var ReactDOM = require('react-dom');
var PubSub = require('pubsub-js');

var Header = require('../component/header.js');
var NextButton = require('../component/next-button.js');
var EnterAnimate = require('../component/enter-animate.js');

var chartStyle = {
  width: '800',
  height: '400'
};

var UserScaleOne = React.createClass({
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
      <EnterAnimate>
        <Header>图虫用户分析 1</Header>
        <div className="ui one colum centered grid">
          <div className="colum">
            <div id="user-scale-chart" style={chartStyle}></div>
          </div>
          <div className="ui centered row">
            <NextButton url="/tuchong/userscale/chart/2"></NextButton>
          </div>
        </div>
      </EnterAnimate>
    );
  }
});

module.exports = UserScaleOne;