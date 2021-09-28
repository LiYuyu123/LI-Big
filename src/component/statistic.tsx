import React, {useEffect, useState} from 'react';

const Statistic=()=>{
    const [number1,setNumber1]=useState(53992)
    const [number2,setNumber2]=useState(63992)
    useEffect(()=>{
        setInterval(()=>{
            setNumber1(n=>n+1)
            setNumber2(n=>n+1)
        },20)
    },[])
    useEffect(()=>{
        return clearInterval();
    })
  return(
      <div className=' statistic'>
          <div className='bordered'><span>4520</span>公安地点</div>
          <div className='bordered 违法案件' ><span>{number1}</span> 违法案件总数</div>
          <div className='bordered 违法人员'><span>{number2}</span>违法人员总数</div>
      </div>
  )
}

export  default  Statistic