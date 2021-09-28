import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';

const Chart1=()=>{
    const ref=useRef(null)
    const myChart=useRef(null)
    const px=(n)=>n / 1502 * (window as any).pageWidth
    const data=[
        {name:'浙江省',value:5},
        {name:'河北省',value:10},
        {name:'辽宁省',value:15},
        {name:'安徽省',value:20},
        {name:'江苏省',value:25},
        {name:'广东省',value:30},
    ]
    useEffect(()=>{
        setInterval(()=>{
            const newData=[
                {name:'浙江省',value:Math.random()*10},
                {name:'河北省',value:Math.random()*10},
                {name:'辽宁省',value:Math.random()*10},
                {name:'安徽省',value:Math.random()*10},
                {name:'江苏省',value:Math.random()*10},
                {name:'广东省',value:Math.random()*10},
            ]
            render(newData)
        },1500)
    },[])
    const render=(data)=>{
        myChart.current.setOption({

            tooltip: {},
            xAxis: {
                // @ts-ignore
                data:data.map(i=>i.name),
                axisTick:{show:false},
                axisLabel:{
                    fontSize:px(12),
                    formatter(val){
                        console.log(val)
                        if(val.length >3){
                            const array=val.split('')
                            array.splice(3,0,'\n')
                            return array.join('')
                        }else {
                            return val
                        }
                    }
                },
            },
            grid:{
                x: px(30),
                y:px(10),
                x2:px(10),
                y2:px(30),
            },
            yAxis: {
                splitLine:{show:false},
                axisLabel:{
                    fontSize:px(12)
                }
            },
            series: [
                {
                    name: '0',
                    type: 'bar',
                    data: data.map(i=>i.value),
                    itemStyle: {color:'#3aa6e9'}
                }
            ]
        });
    }
    useEffect(()=>{
         myChart.current = echarts.init(ref.current);
        render(data)
    },[])
    return(
        <div className="案发">
            <h1>案发派出所管辖统计</h1>
            <div ref={ref} className='chart'>

            </div>
        </div>
    )
}

export default Chart1