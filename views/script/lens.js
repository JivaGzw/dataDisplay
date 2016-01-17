var React = require('react');
var ReactDOM = require('react-dom');
var PubSub = require('pubsub-js');

var Header = require('../component/header.js');
var NextButton = require('../component/next-button.js');
var EnterAnimate = require('../component/enter-animate.js');

var chartStyle = {
  width: '1200',
  height: '400'
};

var Lens = React.createClass({
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
      <EnterAnimate>
        <Header>图虫中使用最多的镜头Top20</Header>
        <div className="ui one colum centered grid">
          <div className="colum">
            <div id="lens-chart-container" style={chartStyle}></div>
          </div>
          <div className="ui centered row">
            <NextButton url="/tuchong/userscale/chart/1"></NextButton>
          </div>
        </div>
      </EnterAnimate>
    );
  }
});

module.exports = Lens;