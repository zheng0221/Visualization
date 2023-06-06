import React from 'react'
import * as echarts from 'echarts';
class Service extends React.Component {

  
  async componentDidMount() {
    const builderJson = {
        all: 24038,
        all1:27622,
        charts: {
          'Service Known': 3702,
          'Service Unknown': 4427
          
        },
        components: {
          'Revenue Known': 5609,
          'Revenue Unknown': 2492
          
        },
        ie: 9743
      };
      const downloadJson = {
        'Known.js': 0.455406569073686,
        'Unknown.js': 0.5445934309263132,
      
      };
      const themeJson = {
        'Known.js': 0.693443227949317,
        'Unknown.js': 0.3065567720506827,
      };
      const waterMarkText = ' ';
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = canvas.height = 100;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.globalAlpha = 0.08;
      ctx.font = '20px Microsoft Yahei';
      ctx.translate(50, 50);
      ctx.rotate(-Math.PI / 4);
      ctx.fillText(waterMarkText, 0, 0);

    var myChart = echarts.init(document.getElementById('chart-panel'));
    myChart.setOption(
        {
            backgroundColor: {
              type: 'pattern',
              image: canvas,
              repeat: 'repeat'
            },
            tooltip: {},
            title: [
              {
                text: 'Service',
                subtext: '总计 ' + builderJson.all,
                left: '25%',
                textAlign: 'center'
              },
              {
                text: 'Revenue',
                subtext: '总计 ' + builderJson.all1,
                left: '25%',
                top: '50%',
                textAlign: 'center'
              },
              {
                text: 'Service',
              //   subtext:
              //     '总计 ' +
              //     Object.keys(downloadJson).reduce(function (all, key) {
              //       return all + downloadJson[key];
              //     }, 0),
                left: '75%',
                textAlign: 'center'
              },
              {
                text: 'Revenue',
              //   subtext:
              //     '总计 ' +
              //     Object.keys(themeJson).reduce(function (all, key) {
              //       return all + themeJson[key];
              //     }, 0),
                left: '75%',
                top: '50%',
                textAlign: 'center'
              }
            ],
            grid: [
              {
                top: 50,
                width: '50%',
                bottom: '55%',
                left: 30,
                containLabel: true
              },
              {
                top: '55%',
                width: '50%',
                bottom: 40,
                left: 30,
                containLabel: true
              }
            ],
            xAxis: [
              {
                type: 'value',
                max: builderJson.all,
                splitLine: {
                  show: false
                },
              //   name:'number'
              },
              {
                type: 'value',
                max: builderJson.all,
                gridIndex: 1,
                splitLine: {
                  show: false
                },
              //   name:'number'
              }
            ],
            yAxis: [
              {
                type: 'category',
                data: Object.keys(builderJson.charts),
                axisLabel: {
                  interval: 0,
                  rotate: 30
                },
                splitLine: {
                  show: false
                },
                name:'type'
              },
              {
                gridIndex: 1,
                type: 'category',
                data: Object.keys(builderJson.components),
                axisLabel: {
                  interval: 0,
                  rotate: 30
                },
                splitLine: {
                  show: false
                },
                name:'type'
              }
            ],
            series: [
              {
                type: 'bar',
                stack: 'chart',
                z: 3,
                label: {
                  position: 'right',
                  show: true
                },
                data: Object.keys(builderJson.charts).map(function (key) {
                  return builderJson.charts[key];
                })
              },
              {
                type: 'bar',
                stack: 'chart',
                silent: true,
                itemStyle: {
                  color: '#eee'
                },
                data: Object.keys(builderJson.charts).map(function (key) {
                  return builderJson.all - builderJson.charts[key];
                })
              },
              {
                type: 'bar',
                stack: 'component',
                xAxisIndex: 1,
                yAxisIndex: 1,
                z: 3,
                label: {
                  position: 'right',
                  show: true
                },
                data: Object.keys(builderJson.components).map(function (key) {
                  return builderJson.components[key];
                })
              },
              {
                type: 'bar',
                stack: 'component',
                silent: true,
                xAxisIndex: 1,
                yAxisIndex: 1,
                itemStyle: {
                  color: '#eee'
                },
                data: Object.keys(builderJson.components).map(function (key) {
                  return builderJson.all - builderJson.components[key];
                })
              },
              {
                type: 'pie',
                radius: [0, '30%'],
                center: ['75%', '25%'],
                data: Object.keys(downloadJson).map(function (key) {
                  return {
                    name: key.replace('.js', ''),
                    value: downloadJson[key]
                  };
                })
              },
              {
                type: 'pie',
                radius: [0, '30%'],
                center: ['75%', '75%'],
                data: Object.keys(themeJson).map(function (key) {
                  return {
                    name: key.replace('.js', ''),
                    value: themeJson[key]
                  };
                })
              }
            ]
          }
      
        );

  }

  render() {
    
    

    return (
      
      <div id="chart-panel" style = { {  width: 1000, height: 800 }}></div>
    )
  }

}
export default Service