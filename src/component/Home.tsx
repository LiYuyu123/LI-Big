import React from 'react';
import './home.scss'
import headerBg from '../image/2.png'
import Chart1 from './Chart-1';
import Chart2 from './Chart-2';
import Chart3 from './Chart-3';
import Chart4 from './Chart-4';
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
                <section className='section3'>
                    <Chart3/>
                </section>
                <section className='section4'>
                    <Chart4/>
                </section>
                <section className='bordered section5'>5</section>
                <section className='bordered section6'>6</section>
                <section className='bordered section7'>7</section>
            </main>
        </div>
    )
}
export default Home