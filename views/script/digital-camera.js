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

var DigitalCamera = React.createClass({
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
      <EnterAnimate>
        <Header>图虫中使用最多的相机Top 10</Header>
        <div className="ui one colum centered grid">
          <div className="colum">
            <div id="camera-chart-container" style={chartStyle}></div>
          </div>
          <div className="ui centered row">
            <NextButton url="/tuchong/lens"></NextButton>
          </div>
        </div>
      </EnterAnimate>
    );
  }
});

module.exports = DigitalCamera;