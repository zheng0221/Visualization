import React from 'react'
import * as echarts from 'echarts';
class GraphVisualization extends React.Component {

  
  async componentDidMount() {

    var myChart = echarts.init(document.getElementById('chart-panel'));
    myChart.setOption(
      {
      title: {
        text: 'Node-Link Force Graph'
      },
      tooltip: {
        formatter: function (x) {
          return x.data.des;
        }
      },
      series: [{
        type: 'graph',
        layout: 'force',
        symbolSize: 80,
        roam: true,
        edgeSymbol: ['circle',
          'arrow'],
        edgeSymbolSize: [4,
          10],
        edgeLabel: {
          normal: {
            textStyle: {
              fontSize: 20
            }
          }
        },
        force: {
          repulsion: 2500,
          edgeLength: [10,
            50]
        },
        draggable: true,
        itemStyle: {
          normal: {
            color: '#40e0d0'
          }
        },
        lineStyle: {
          normal: {
            width: 4,
            color: '#87cefa'
    
          }
        },
        edgeLabel: {
          normal: {
            show: true,
            formatter: function (x) {
              return x.data.name;
            }
          }
        },
        label: {
          normal: {
            show: true,
            textStyle: {}
          }
        },
        data: [{
          name: 'Barco de Plata Logistics',
          des: 'country: Oceanus, product_services:Plastic products',
          symbolSize: 150,
          itemStyle: {
            normal: {
              color: '#da70d6'
            }
          }
        },
          {
            name: 'Flint Ltd. Liability Co &',
            des: 'country: Zawalinda, product_services:Commercial fishing',
            symbolSize: 150,
            itemStyle: {
              normal: {
                color: '#da70d6'
              }
            }
          },
          {
            name: 'Jessica Harmon',
            symbolSize: 100,
            itemStyle: {
              normal: {
                color: '#ff7f50'
              }
            }
          },
          {
            name: 'Elizabeth Moody',
            symbolSize: 100,
            itemStyle: {
              normal: {
                color: '#ff7f50'
              }
            }
          },
          {
            name: 'Sydney David',
            symbolSize: 100,
            itemStyle: {
              normal: {
                color: '#ff7f50'
              }
            }
          },
          {
            name: 'David Anderson',
            symbolSize: 100,
            itemStyle: {
              normal: {
                color: '#ff7f50'
              }
            }
          },
          {
            name: 'Wayne Zhang',
            symbolSize: 100,
            itemStyle: {
              normal: {
                color: '#ff7f50'
              }
            }
          },
          {
            name: 'Timothy Cruz',
            symbolSize: 100,
            itemStyle: {
              normal: {
                color: '#ff7f50'
              }
            }
          },
          {
            name: 'Ferrell Inc',
            symbolSize: 80,
          },
          {
            name: 'Raymond Pham',
            symbolSize: 100,
            itemStyle: {
              normal: {
                color: '#ff7f50'
              }
            }
          },
          {
            name: 'Kimberly Jackson',
            symbolSize: 100,
            itemStyle: {
              normal: {
                color: '#ff7f50'
              }
            }
          },
          {
            name: 'Eric Price',
            symbolSize: 100,
            itemStyle: {
              normal: {
                color: '#ff7f50'
              }
            }
          }
        ],
    
    
        links: [{
          source: 'Barco de Plata Logistics',
          target: 'Jessica Harmon',
          name: '',
          des: 'Beneficial Owner'
        },
        {
          source: 'Barco de Plata Logistics',
          target: 'Elizabeth Moody',
          name: '',
          des: 'Beneficial Owner'
        },
        {
          source: 'Barco de Plata Logistics',
          target: 'Sydney David',
          name: '',
          des: 'Beneficial Owner'
        },
        {
          source: 'Barco de Plata Logistics',
          target: 'Wayne Zhang',
          name: '',
          des: 'Beneficial Owner'
        },
        {
          source: 'Barco de Plata Logistics',
          target: 'Kimberly Jackson',
          name: '',
          des: 'Beneficial Owner'
        },
        {
          source: 'Barco de Plata Logistics',
          target: 'Eric Price',
          name: '',
          des: 'Beneficial Owner'
        },
        {
          source: 'Flint Ltd. Liability Co &',
          target: 'David Anderson',
          name: '',
          des: 'Beneficial Owner'
        },
        {
          source: 'Flint Ltd. Liability Co &',
          target: 'Timothy Cruz',
          name: '',
          des: 'Beneficial Owner'
        },
        {
          source: 'Flint Ltd. Liability Co &',
          target: 'Kimberly Jackson',
          name: '',
          des: 'Company Contacts',
          lineStyle: {
              normal: {
                type: 'dotted',
                color: '#000'
              }
            }
        },
        {
          source: 'Barco de Plata Logistics',
          target: 'Raymond Pham',
          name: '',
          des: 'Company Contacts',
          lineStyle: {
              normal: {
                type: 'dotted',
                color: '#000'
              }
            }
        },
        ]
      }]
    });

  }

  render() {
    
    

    return (
      
      <div id="chart-panel" style = { {  width: 1000, height: 800 }}></div>
    )
  }

}
export default GraphVisualization