import React from 'react';

const NavRight=()=>{
    return(
        <div className="wrapper">
          <div className="weizhi">
              <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-weizhi" />
              </svg>
              <span>HangZhou</span>
          </div>
            <div className="tianqi">
                <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-tianqi" />
                </svg>
                <span>28℃ </span>
            </div>
        </div>
    )
}

export default NavRight