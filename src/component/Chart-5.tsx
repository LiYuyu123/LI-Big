import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
const Chart5=()=>{
    const ref=useRef(null)
    const colors = ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#33A4FA'];
    const px=(n)=>n / 1502 * (window as any).pageWidth
    useEffect(()=>{
        let myChart = echarts.init(ref.current);
        myChart.setOption({
            color: colors,
            xAxis: {show: false},
            yAxis: {show: false},
            legend: {show: false},
            series: [
                {
                    startAngle: -20,
                    type: 'pie',
                    radius: ['25%', '90%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: true, position: 'outside', textStyle: {color: 'white', fontSize: px(20)},
                        distanceToLabelLine: 0,
                        formatter(options) {
                            return options.value * 100 + '%';
                        }
                    },
                    labelLine: {show: true, length: 0},
                    roseType: 'area',
                    itemStyle: {
                        shadowBlur: px(200),
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    data: [
                        {value: 0.36, name: '刑事案件'},
                        {value: 0.20, name: '民事案件'},
                        {value: 0.18, name: '经济案件'},
                        {value: 0.24, name: '其他案件'},
                    ]
                }
            ]
        });
    },[])
    return(
        <div className="bordered 案件类型">
            <h1>案件类型统计</h1>
            <div ref={ref} className='chart'>
            </div>
            <div className="legend">
                <span style={{background: colors[0]}} />刑事
                <span style={{background: colors[1]}} />民事
                <span style={{background: colors[2]}} />经济
                <span style={{background: colors[3]}} />其他
            </div>
        </div>
    )
}

export default Chart5