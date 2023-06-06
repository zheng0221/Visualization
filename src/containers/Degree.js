import React from 'react'
import * as echarts from 'echarts';
class Degree extends React.Component {

  
  async componentDidMount() {

    var myChart = echarts.init(document.getElementById('chart-panel'));
    const hours = [
      '1','2','3','4','5','6','7','8','9','10'
   ];
   // prettier-ignore
   const days = [
       '0-12','12-24','24-36','36-48','48-60','60-72','72-84','84-96','96-108','108-120'
   ];
   // prettier-ignore
   const data = [[0,0,5890],[0,1,15],[0,2,9],[0,3,1],[0,4,2],[1,0,6464],[1,1,80],[1,2,37],[1,3,10],[1,4,5],[1,5,3],[1,7,1],[2,0,214],[2,1,6],[3,0,44],[3,1,1],[3,9,1],[4,0,10],[5,0,2],[7,0,1],[9,0,1]]
       .map(function (item) {
       return [item[0], item[1], item[2] || '-'];
   });
   myChart.setOption(
   {
     tooltip: {
       position: 'top'
     },
     grid: {
       height: '50%',
       top: '10%'
     },
     xAxis: {
       type: 'category',
       data: hours,
       splitArea: {
         show: true
       },
       name:"Beneficial Owner"
     },
     
     yAxis: {
       type: 'category',
       data: days,
       splitArea: {
         show: true
       },
       name:"Company Contacts"
     },
     visualMap: {
       min: 0,
       max: 6000,
       calculable: true,
       orient: 'horizontal',
       left: 'center',
       bottom: '15%'
     },
     series: [
       {
         name: 'Details',
         type: 'heatmap',
         data: data,
         label: {
           show: true
         },
         emphasis: {
           itemStyle: {
             shadowBlur: 10,
             shadowColor: 'rgba(0, 0, 0, 0.5)'
           }
         }
       }
     ]
   });

  }

  render() {
    
    

    return (
      
      <div id="chart-panel" style = { {  width: 1000, height: 800 }}></div>
    )
  }

}
export default Degree