import Image from 'next/image';
import React from 'react';
import Pulse from '../UI/pulse/Pulse';

type Props = {};

const MainBanner = () => {
  return (
    <div className='main-banner'>
      <h1>Компании, которые покинули Россию после операции на Украине</h1>
      <div className='main-banner__companies'>
        <Pulse />
        <h3> Всего: </h3>
        <span>78 компаний</span>
      </div>
      <div className='main-banner__logos'>
        <Image src={'/mercedes.png'} width={40} height={40} alt='dell' />
        <Image src={'/hp.png'} width={40} height={40} alt='hp' />
        <Image src={'/paramount.png'} width={50} height={40} alt='paramount' />
      </div>
      <img src='./eagle.png' alt='eagle' className='main-banner__eagle_img' />
    </div>
  );
};

export default MainBanner;
