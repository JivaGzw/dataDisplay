var React = require('react');
var ReactDOM = require('react-dom');

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
      url: '/digitalCamera',
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

  componentDidMount: function() {
    $('.ui.sidebar.uncover.visible')
      .sidebar('hide');
    // 基于准备好的dom，初始化echarts图表
    this.loadDataFormServer();
    var myChart = echarts.init(document.getElementById('chart-container')); 
    
    option = {
      title : {
        text: '南丁格尔玫瑰图',
        subtext: '纯属虚构',
        x:'center'
      },
      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        x : 'center',
        y : 'bottom',
        data:['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8']
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
        name:'面积模式',
        type:'pie',
        radius : [30, 110],
        center : ['50%', 200],
        roseType : 'area',
        x: '50%',               // for funnel
        max: 40,                // for funnel
        sort : 'ascending',     // for funnel
        data:[
          {value:10, name:'rose1'},
          {value:5, name:'rose2'},
          {value:15, name:'rose3'},
          {value:25, name:'rose4'},
          {value:20, name:'rose5'},
          {value:35, name:'rose6'},
          {value:30, name:'rose7'},
          {value:40, name:'rose8'}
        ]
      }]
    };
    // 为echarts对象加载数据 
    myChart.setOption(option); 
  },

  render: function() {
    return (
      <EnterAnimate>
        <Header>DigitalCamera</Header>
        <div className="ui one colum centered grid">
          <div className="colum">
            <div id="chart-container" style={chartStyle}></div>
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