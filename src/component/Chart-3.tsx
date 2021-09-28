import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';

const Chart3=()=>{
    const ref=useRef(null)
    const px=(n)=>n / 1502 * (window as any).pageWidth
    useEffect(()=>{
        let myChart = echarts.init(ref.current);
        myChart.setOption({
            color: ['#8D70F8', '#33A4FA'],
            xAxis: {show: false},
            yAxis: {show: false},
            legend: {show: false},
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['75%', '90%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: true, position: 'inside', textStyle: {color: 'white', fontSize: px(20)},
                        formatter(options) {
                            return options.value * 100 + '%';
                        }
                    },
                    labelLine: {show: false},
                    itemStyle: {
                        borderColor: '#0F113A',
                        borderWidth: px(4)
                    },
                    data: [
                        {value: 0.2, name: '女'},
                        {value: 0.8, name: '男'},
                    ]
                }
            ]
        });
    },[])
    return(
        <div className="访问">
            <h1>访问来源</h1>
            <div ref={ref} className='chart'>

            </div>
            <div className="legend">
                <span className="male"/>男
                <span className="female"/>女
            </div>
        </div>
    )
}

export default Chart3