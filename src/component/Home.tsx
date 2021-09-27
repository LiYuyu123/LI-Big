import React from 'react';
import './home.scss'
import headerBg from '../image/2.png'
console.log(headerBg)
const Home=()=>{
    return(
        <div className='home'>
            <header style={{backgroundImage: `url(${headerBg})`}}/>
        </div>
    )
}
export default Home