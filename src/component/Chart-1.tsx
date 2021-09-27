import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';

const Chart1=()=>{
    const ref=useRef(null)
    const px=(n)=>n / 1502 * (window as any).pageWidth
    useEffect(()=>{
        let myChart = echarts.init(ref.current);
        myChart.setOption({

            tooltip: {},
            xAxis: {
                data: ['浙江省', '河北省', '辽宁省', '安徽省', '江苏省', '广东省'],
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
                    data: [5,10,15,20,25,30],
                    itemStyle: {color:'#3aa6e9'}
                }
            ]
        });
    },[])
    return(
        <div className="bordered 案发">
            <h1>案发派出所管辖统计</h1>
            <div ref={ref} className='chart'>

            </div>
        </div>
    )
}

export default Chart1