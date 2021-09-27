import React from 'react';
import './home.scss'
import headerBg from '../image/2.png'
import Chart1 from './Chart-1';
import Chart2 from './Chart-2';
const Home=()=>{

    return(
        <div className='home'>
            <header style={{backgroundImage: `url(${headerBg})`}}/>
            <main>
                <section className='section1'>
                 <Chart1/>
                </section>
                <section className='section2'>
                 <Chart2/>
                </section>
                <section className='bordered section3'>3</section>
                <section className='bordered section4'>4</section>
                <section className='bordered section5'>5</section>
                <section className='bordered section6'>6</section>
                <section className='bordered section7'>7</section>
            </main>
        </div>
    )
}
export default Home