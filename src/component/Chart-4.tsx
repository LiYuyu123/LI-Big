import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import china from '../geo/china.json';
const Chart4=()=>{
    const ref=useRef(null)
    const colors = {'青海省': '#BB31F7', '甘肃省': '#15B8FD', '四川省': '#06E1EE'};
    const px=(n)=>n / 1502 * (window as any).pageWidth
    useEffect(()=>{
        let myChart = echarts.init(ref.current);
        // @ts-ignore
        echarts.registerMap('CN', china);
        myChart.setOption({
            xAxis: {show: false},
            yAxis: {show: false},
            series: [
                {
                    type: 'map',
                    mapType: 'CN', // 自定义扩展图表类型
                    data: [
                        {name: '甘肃省', value: 1},
                    ],
                    label: {show: false, color: 'white'},
                    itemStyle: {
                        areaColor: '#1d383c',
                        color: colors['甘肃省'],
                        borderColor: '#01A7F7',
                        emphasis: {
                            label: {color: 'white'},
                            areaColor: '#5470C6',
                        },
                    }
                },
            ]
        });
    },[])
    return(
        <div className="地图">
            <div ref={ref} className='chart'>
            </div>
        </div>
    )
}

export default Chart4