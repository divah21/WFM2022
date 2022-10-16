import React from 'react'
import { AppWrap, MotionWrap } from '../../wrapper';
import {  SocialMedia } from '../../components';
import { images } from '../../constants';

const  Footpage = () => {
  return (
    <div className='app__footpage'>
     
      <img src={images.moneyspin} className="app__footpage-money" alt="foot_pg" />
   
        <div className="copyright">
        <SocialMedia/>
          <p className="p-text">@2022 Women First MicroFinance</p>
          <p className="p-text">All rights reserved</p>
        </div>

    </div>
  )
}

export default  AppWrap(
  MotionWrap(Footpage, 'app__footpage'),
  'footpage',
  'app__primarybg',
);
