import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';

const Chart3=()=>{
    const ref=useRef(null)
    const px=(n)=>n / 1502 * (window as any).pageWidth
    useEffect(()=>{
        let myChart = echarts.init(ref.current);


    },[])
    return(
        <div className="bordered 时段">
            <h1>案发时段分析</h1>
            <div ref={ref} className='chart'>

            </div>
        </div>
    )
}

export default Chart3