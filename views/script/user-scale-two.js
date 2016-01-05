var React = require('react');
var ReactDOM = require('react-dom');

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
    $('.ui.sidebar.uncover.visible')
      .sidebar('hide');
    // 基于准备好的dom，初始化echarts图表
    this.loadDataFormServer();
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
        text: '你幸福吗？',
        subtext: 'From ExcelHome',
        sublink: 'http://e.weibo.com/1341556070/AhQXtjbqh',
        x: 'center',
        y: 'center',
        itemGap: 20,
        textStyle : {
          color : 'rgba(30,144,255,0.8)',
          fontFamily : '微软雅黑',
          fontSize : 35,
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
        data:['68%的人表示过的不错','29%的人表示生活压力很大','3%的人表示“我姓曾”']
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
          value:68,
          name:'68%的人表示过的不错'
        },
        {
          value:32,
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
          value:29, 
          name:'29%的人表示生活压力很大'
        },
        {
          value:71,
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
          value:3, 
          name:'3%的人表示“我姓曾”'
        },
        {
          value:97,
          name:'invisible',
          itemStyle : placeHolderStyle
        }]
      }]
    };
                        

    // 为echarts对象加载数据 
    myChart.setOption(option); 
  },

  render: function() {
    return (
      <EnterAnimate>
        <Header>UserScale—Chart 2</Header>
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