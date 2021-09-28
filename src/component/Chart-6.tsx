import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
const Chart6=()=>{
    const ref=useRef(null)
    const myChart=useRef(null)
    const px=(n)=>n / 1502 * (window as any).pageWidth
    const data = [
        {value: 0.12, name: '杭州'},
        {value: 0.06, name: '温州'},
        {value: 0.08, name: '台州'},
        {value: 0.08, name: '舟山'},
        {value: 0.08, name: '丽水'},
    ];
    useEffect(()=>{
        setInterval(()=>{
            const newData=[
                {value: Math.floor(Math.random()*10), name: '杭州'},
                {value: Math.floor(Math.random()*10), name: '温州'},
                {value: Math.floor(Math.random()*10), name: '台州'},
                {value: Math.floor(Math.random()*10), name: '舟山'},
                {value: Math.floor(Math.random()*10), name: '丽水'},
            ]
            render(newData)
        },1500)
    },[])
    const render=(data)=>{
        myChart.current.setOption({
            xAxis: {show: false},
            yAxis: {show: false},
            grid: {x: 0, x2: 0, y: 0, y2: 0, containLabel: true},
            legend: {
                orient: 'vertical',
                left: px(30),
                top: 'center',
                textStyle: {color: 'white'},
                itemWidth: px(10),
                itemHeight: px(10),
                formatter(name) {
                    // @ts-ignore
                    const value = data.find(i => i.name === name)?.value+ '%';
                    return name + ' ' + value;
                }
            },
            series: [
                {
                    center: ['60%', '50%'],
                    type: 'pie',
                    radius: '80%',
                    label: {show: false},
                    labelLine: {show: false},
                    data: data,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        });
    }
    useEffect(()=>{
         myChart.current = echarts.init(ref.current);
        render(data)
    },[])
    return(
        <div className=" 街道">
            <h1>案发地级市统计</h1>
            <div ref={ref} className='chart'>
            </div>
        </div>
    )
}

export default Chart6