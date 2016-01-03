var React = require('react');
var ReactDOM = require('react-dom');

var Header = require('../component/header.js');
var NextButton = require('../component/next-button.js');
var EnterAnimate = require('../component/enter-animate.js');

var chartStyle = {
  width: '800',
  height: '400'
};

var Lens = React.createClass({
  getInitialState: function() {
    return {
      data: {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: 0
      }
    }
  },

  loadDataFormServer: function() {
    $.ajax({
      type: 'get',
      url: '/lens',
      dataType: 'json',
      cache: true,
      success: function(result){
        this.setState({data: result});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(this.props.url, status, err);
      }.bind(this)
    });
  },

  renderChart: function() {
    // 基于准备好的dom，初始化echarts图表
    $('.ui.sidebar.uncover.visible')
      .sidebar('hide');

    this.loadDataFormServer();
    var myChart = echarts.init(document.getElementById('chart-container')); 
    
    
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
        tooltip: {
          show: true
        },
        series: [{
          name: 'Picture num of lens',
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
              name: "Sam S Club",
              value: 10000,
              itemStyle: {
                normal: {
                  color: 'black'
                }
              }
            },
            {
              name: "Macys",
              value: 6181,
              itemStyle: createRandomItemStyle()
            },
            {
              name: "Amy Schumer",
              value: 4386,
              itemStyle: createRandomItemStyle()
            },
            {
              name: "Jurassic World",
              value: 4055,
              itemStyle: createRandomItemStyle()
            },
            {
              name: "Charter Communications",
              value: 2467,
              itemStyle: createRandomItemStyle()
            },
            {
              name: "Chick Fil A",
              value: 2244,
              itemStyle: createRandomItemStyle()
            },
            {
              name: "Planet Fitness",
              value: 1898,
              itemStyle: createRandomItemStyle()
            },
            {
              name: "Pitch Perfect",
              value: 1484,
              itemStyle: createRandomItemStyle()
            },
            {
              name: "Express",
              value: 1112,
              itemStyle: createRandomItemStyle()
            },
            {
              name: "Home",
              value: 965,
              itemStyle: createRandomItemStyle()
            },
            {
              name: "Johnny Depp",
              value: 847,
              itemStyle: createRandomItemStyle()
            },
            {
              name: "Lena Dunham",
              value: 582,
              itemStyle: createRandomItemStyle()
            },
            {
              name: "Lewis Hamilton",
              value: 555,
              itemStyle: createRandomItemStyle()
            },
            {
              name: "KXAN",
              value: 550,
              itemStyle: createRandomItemStyle()
            },
            {
              name: "Mary Ellen Mark",
              value: 462,
              itemStyle: createRandomItemStyle()
            },
            {
              name: "Farrah Abraham",
              value: 366,
              itemStyle: createRandomItemStyle()
            },
            {
              name: "Rita Ora",
              value: 360,
              itemStyle: createRandomItemStyle()
            },
            {
              name: "Serena Williams",
              value: 282,
              itemStyle: createRandomItemStyle()
            },
            {
              name: "NCAA baseball tournament",
              value: 273,
              itemStyle: createRandomItemStyle()
            },
            {
              name: "Point Break",
              value: 265,
              itemStyle: createRandomItemStyle()
            }
          ]
        }]
    };
  

    // 为echarts对象加载数据 
    myChart.setOption(option);
  },

  componentDidMount: function() {
    this.renderChart();
  },

  render: function() {
    return (
      <EnterAnimate>
        <Header>Lens</Header>
        <div className="ui one colum centered grid">
          <div className="colum">
            <div id="chart-container" style={chartStyle}></div>
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