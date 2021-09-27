import React from 'react';
import './home.scss'
import headerBg from '../image/2.png'

const Home=()=>{
    return(
        <div className='home'>
            <header style={{backgroundImage: `url(${headerBg})`}}/>
            <main>
                <section className='section1'>1</section>
                <section className='section2'>2</section>
                <section className='section3'>3</section>
            </main>
        </div>
    )
}
export default Home