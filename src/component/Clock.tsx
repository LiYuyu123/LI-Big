import React, {useEffect, useState} from 'react';
import dayjs from 'dayjs';

const Clock=()=>{
    const [date,setDate]=useState((new Date()).toISOString())

    const tick=()=>{
        setDate((new Date()).toISOString())
    }
    useEffect(()=>{
        setInterval(()=>{
           tick()
        },1000)
    },[])
    useEffect(()=>{
        return clearInterval()
    })
    return(
        <div>
            <div>
                {dayjs(date).format('HH:mm:ss')}
            </div>
            <div>
                {dayjs(date).format('YYYY年MM月DD日')}
            </div>
        </div>
    )
}

export default  Clock