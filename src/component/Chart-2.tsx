import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';

const Chart2=()=>{
    const ref=useRef(null)
    const px=(n)=>n / 1502 * (window as any).pageWidth
    useEffect(()=>{
        let myChart = echarts.init(ref.current);
        myChart.setOption({
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
                splitLine: {show: true, lineStyle: {color: '#073E78'}},
                axisTick: {show: false},
                axisLine: {show: false},
            },
            grid:{
                x: px(35),
                y:px(10),
                x2:px(10),
                y2:px(35),
            },
            yAxis: {
                type: 'value',
                splitLine: {lineStyle: {color: '#073E78'}},
                axisLabel: {
                    formatter(val) {
                        return val * 100 + '%';
                    }
                }
            },
            series: [{
                name: '故意伤人',
                type: 'line',
                data: [
                    0.15, 0.13, 0.11,
                    0.13, 0.14, 0.15,
                    0.16, 0.18, 0.21,
                    0.19, 0.17, 0.16,
                    0.15
                ],
                symbol: 'circle',
                symbolSize: px(12),
                lineStyle: {width: px(2)},
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#414a9f'
                    }, {
                        offset: 1,
                        color: '#1b1d52'
                    }]),
                }
            }]
        });

    },[])
    return(
        <div className="bordered 时段">
            <h1>案发时段分析</h1>
            <div ref={ref} className='chart'>

            </div>
        </div>
    )
}

export default Chart2