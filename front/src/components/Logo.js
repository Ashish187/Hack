import React from 'react';
import Tilt from 'react-tilt';
import brain from './pic_logo.png';
import './Logo.css';
import 'tachyons'
const Logo = () => {
  return (
    <div className='w-30'>
      <Tilt className="Tilt br2 ma3 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa3 ">
          <img  /*style={{paddingTop: '15px',height:'35px'}}*/ alt='logo' src={brain}/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;