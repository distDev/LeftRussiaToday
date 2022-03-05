import React, { FC } from 'react'
import Pulse from '../UI/pulse/Pulse';

type Props = {}

export const UpdateTime:FC = () => {

    let time = '2 часа назад'
  return (
    <div className='update-time'>
      <Pulse />{' '}
      <p>
        Последнее обновление: <span>{time}</span>{' '}
      </p>
    </div>
  );
}