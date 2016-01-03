var React = require('react');
var ReactDOM = require('react-dom');

var Header = require('../component/header.js');
var NextButton = require('../component/next-button.js');

var chartStyle = {
  width: '800',
  height: '400'
};

var UserScaleTwo = React.createClass({
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
      url: '/userScale/chart/two',
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
    // 基于准备好的dom，初始化echarts图表
    this.loadDataFormServer();
    var myChart = echarts.init(document.getElementById('chart-container')); 
    
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
            this.state.data.a,
            this.state.data.b,
            this.state.data.c,
            this.state.data.d,
            this.state.data.e,
            this.state.data.f,
            this.state.data.g
          ]
        }]
    };

    // 为echarts对象加载数据 
    myChart.setOption(option); 
  },

  render: function() {
    return (
      <div>
        <Header>UserScale—Chart 2</Header>
        <div className="ui one colum centered grid">
          <div className="colum">
            <div id="chart-container" style={chartStyle}></div>
          </div>
          <div className="ui centered row">
            <NextButton url="/tuchong/userlocation"></NextButton>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = UserScaleTwo;