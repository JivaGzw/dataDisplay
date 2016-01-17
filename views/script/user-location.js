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

var UserLocation = React.createClass({
  getInitialState: function() {
    return {
      data: {}
    }
  },

  renderChart: function() {
    var myChart = echarts.init(document.getElementById('chart-container')); 

    option = {
      title : {
        text: '用户分布',
        subtext: '基于50万真实用户数据',
        x:'center'
      },
      tooltip : {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        x:'left',
        data:['用户分布']
      },
      dataRange: {
        min: 0,
        max: 80000,
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
        name: '用户数',
        type: 'map',
        mapType: 'china',
        roam: false,
        itemStyle:{
          normal:{label:{show:true}},
          emphasis:{label:{show:true}}
        },
        data:[
          {name: '北京',value: this.state.data.beijing},
          {name: '天津',value: this.state.data.tianjin},
          {name: '上海',value: this.state.data.shanghai},
          {name: '重庆',value: this.state.data.chongqing},
          {name: '河北',value: this.state.data.hebei},
          {name: '河南',value: this.state.data.henan},
          {name: '云南',value: this.state.data.yunnan},
          {name: '辽宁',value: this.state.data.liaoning},
          {name: '黑龙江',value: this.state.data.heilongjiang},
          {name: '湖南',value: this.state.data.hunan},
          {name: '安徽',value: this.state.data.anhui},
          {name: '山东',value: this.state.data.shandong},
          {name: '新疆',value: this.state.data.xinjiang},
          {name: '江苏',value: this.state.data.jiangsu},
          {name: '浙江',value: this.state.data.zhejiang},
          {name: '江西',value: this.state.data.jiangxi},
          {name: '湖北',value: this.state.data.hubei},
          {name: '广西',value: this.state.data.guangxi},
          {name: '甘肃',value: this.state.data.gansu},
          {name: '山西',value: this.state.data.shanxi},
          {name: '内蒙古',value: this.state.data.neimenggu},
          {name: '陕西',value: this.state.data.shanxi},
          {name: '吉林',value: this.state.data.jilin},
          {name: '福建',value: this.state.data.fujian},
          {name: '贵州',value: this.state.data.guizhou},
          {name: '广东',value: this.state.data.guangdong},
          {name: '青海',value: this.state.data.qinghai},
          {name: '西藏',value: this.state.data.xizang},
          {name: '四川',value: this.state.data.sichuan},
          {name: '宁夏',value: this.state.data.ningxia},
          {name: '海南',value: this.state.data.hainan},
          {name: '台湾',value: this.state.data.taiwan},
          {name: '香港',value: this.state.data.xianggang},
          {name: '澳门',value: this.state.data.aomen}
        ]
      }]
    };

    // 为echarts对象加载数据 
    myChart.setOption(option); 
  },

  componentDidMount: function() {
    $('.ui.sidebar.uncover.visible')
      .sidebar('hide');

    this.user_loaction_token = PubSub.subscribe('data', function(msg, result) {
      console.log(result);
      this.setState({
        data: result
      });
      this.renderChart();
    }.bind(this));
  },

/*  componentWillUnmount: function() {
    PubSub.unsubscribe(this.user_loaction_token);
  },*/

  render: function() {
    return (
      <EnterAnimate>
        <Header>图虫用户分布</Header>
        <div className="ui one colum centered grid">
          <div className="colum">
            <div id="chart-container" style={chartStyle}></div>
          </div>
          <div className="ui centered row">
            <NextButton url="/other"></NextButton>
          </div>
        </div>
      </EnterAnimate>
    );
  }
});

module.exports = UserLocation;