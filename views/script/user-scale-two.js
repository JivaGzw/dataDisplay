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

var UserScaleTwo = React.createClass({
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
      <EnterAnimate>
        <Header>图虫用户分析 2</Header>
        <div className="ui one colum centered grid">
          <div className="colum">
            <div id="chart-container" style={chartStyle}></div>
          </div>
          <div className="ui centered row">
            <NextButton url="/tuchong/userlocation"></NextButton>
          </div>
        </div>
      </EnterAnimate>
    );
  }
});

module.exports = UserScaleTwo;