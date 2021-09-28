import React from 'react';
import Clock from './Clock';
import NavRight from '../NavRight';

const Nav=()=>{
    return(
        <div className='nav'>
            <div className='clock'>
                <Clock/>
            </div>
            <div className='font'>国家公安合成作战平台</div>
            <div className='navRight'>
                <NavRight/>
            </div>
        </div>
    )
}

export default Nav