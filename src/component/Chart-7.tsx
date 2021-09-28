import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
const Chart7=()=>{
    const ref=useRef(null)
    const px=(n)=>n / 1502 * (window as any).pageWidth
    useEffect(()=>{
        let myChart = echarts.init(ref.current);
        myChart.setOption({
            legend: {
                bottom: px(6),
                textStyle: {color: 'white'},
                itemWidth: px(30),
                itemHeight: px(16)
            },
            grid: {
                x: px(40),
                x2: px(40),
                y: px(28),
                y2: px(28),
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
                splitLine: {show: true, lineStyle: {color: '#073E78'}},
                axisTick: {show: false},
                axisLine: {show: false},
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
            series: [
                {
                    name: '抢劫',
                    type: 'line',
                    data: [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09].reverse()
                },
                {
                    name: '醉驾',
                    type: 'line',
                    data: [0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.10].reverse()
                },
                {
                    name: '盗窃',
                    type: 'line',
                    data: [0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.10, 0.11].reverse()
                },
                {
                    name: '故意杀人',
                    type: 'line',
                    data: [0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.10, 0.11, 0.12].reverse()
                },
            ].map(obj => ({
                ...obj,
                symbol: 'circle',
                symbolSize: px(12),
                lineStyle: {width: px(2)}
            }))
        });
    },[])
    return(
        <div className=" 趋势">
            <h1>案发趋势分析</h1>
            <div ref={ref} className='chart'>
            </div>
        </div>
    )
}

export default Chart7