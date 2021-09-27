import React from 'react';
import './home.scss'
import Chart1 from './Chart-1';
import Chart2 from './Chart-2';
import Chart3 from './Chart-3';
import Chart4 from './Chart-4';
import Nav from './Nav';
import Chart5 from './Chart-5';
import Chart6 from './Chart-6';
import Chart7 from './Chart-7';
import Statistic from './statistic';
const Home=()=>{

    return(
        <div className='home'>
            <header>
              <Nav/>
            </header>
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
                    <Statistic/>
                    <Chart4/>
                </section>
                <section className=' section5'>
                    <Chart5/>
                </section>
                <section className='section6'>
                    <Chart6/>
                </section>
                <section className='section7'>
                    <Chart7/>
                </section>
            </main>
            <footer>
                <span>©Li 2021</span>
            </footer>
        </div>
    )
}
export default Home