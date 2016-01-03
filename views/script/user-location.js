var React = require('react');
var ReactDOM = require('react-dom');

var Header = require('../component/header.js');
var NextButton = require('../component/next-button.js');

var chartStyle = {
  width: '800',
  height: '400'
};

var UserLocation = React.createClass({
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
      url: '/userLocation',
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
    
    option = {
      title : {
        text: 'iphone销量',
        subtext: '纯属虚构',
        x:'center'
      },
      tooltip : {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        x:'left',
        data:['iphone3']
      },
      dataRange: {
        min: 0,
        max: 2500,
        x: 'left',
        y: 'bottom',
        text:['高','低'],           // 文本，默认为数值文本
        calculable : true
      },
      toolbox: {
        show: true,
        orient : 'vertical',
        x: 'right',
        y: 'center',
        feature : {
          mark : {show: true},
          dataView : {show: true, readOnly: false},
          restore : {show: true},
          saveAsImage : {show: true}
        }
      },
      roamController: {
        show: true,
        x: 'right',
        mapTypeControl: {
          'china': true
        }
      },
      series : [{
        name: 'iphone3',
        type: 'map',
        mapType: 'china',
        roam: false,
        itemStyle:{
          normal:{label:{show:true}},
          emphasis:{label:{show:true}}
        },
        data:[
          {name: '北京',value: Math.round(Math.random()*1000)},
          {name: '天津',value: Math.round(Math.random()*1000)},
          {name: '上海',value: Math.round(Math.random()*1000)},
          {name: '重庆',value: Math.round(Math.random()*1000)},
          {name: '河北',value: Math.round(Math.random()*1000)},
          {name: '河南',value: Math.round(Math.random()*1000)},
          {name: '云南',value: Math.round(Math.random()*1000)},
          {name: '辽宁',value: Math.round(Math.random()*1000)},
          {name: '黑龙江',value: Math.round(Math.random()*1000)},
          {name: '湖南',value: Math.round(Math.random()*1000)},
          {name: '安徽',value: Math.round(Math.random()*1000)},
          {name: '山东',value: Math.round(Math.random()*1000)},
          {name: '新疆',value: Math.round(Math.random()*1000)},
          {name: '江苏',value: Math.round(Math.random()*1000)},
          {name: '浙江',value: Math.round(Math.random()*1000)},
          {name: '江西',value: Math.round(Math.random()*1000)},
          {name: '湖北',value: Math.round(Math.random()*1000)},
          {name: '广西',value: Math.round(Math.random()*1000)},
          {name: '甘肃',value: Math.round(Math.random()*1000)},
          {name: '山西',value: Math.round(Math.random()*1000)},
          {name: '内蒙古',value: Math.round(Math.random()*1000)},
          {name: '陕西',value: Math.round(Math.random()*1000)},
          {name: '吉林',value: Math.round(Math.random()*1000)},
          {name: '福建',value: Math.round(Math.random()*1000)},
          {name: '贵州',value: Math.round(Math.random()*1000)},
          {name: '广东',value: Math.round(Math.random()*1000)},
          {name: '青海',value: Math.round(Math.random()*1000)},
          {name: '西藏',value: Math.round(Math.random()*1000)},
          {name: '四川',value: Math.round(Math.random()*1000)},
          {name: '宁夏',value: Math.round(Math.random()*1000)},
          {name: '海南',value: Math.round(Math.random()*1000)},
          {name: '台湾',value: Math.round(Math.random()*1000)},
          {name: '香港',value: Math.round(Math.random()*1000)},
          {name: '澳门',value: Math.round(Math.random()*1000)}
        ]
      }]
    };

    // 为echarts对象加载数据 
    myChart.setOption(option); 
  },

  render: function() {
    return (
      <div>
        <Header>UserLocation</Header>
        <div className="ui one colum centered grid">
          <div className="colum">
            <div id="chart-container" style={chartStyle}></div>
          </div>
          <div className="ui centered row">
            <NextButton url="/other"></NextButton>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = UserLocation;