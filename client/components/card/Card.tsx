import Image from 'next/image';
import React, { FC } from 'react';
import { ICompanie } from '../../interfaces/interfaces';

const Card: FC<ICompanie> = ({ status, id, companie, img }) => {
  return (
    <div className='card'>
      <div className='card__image_container'>
        <Image width={97} height={87} src={img} alt={companie} />
      </div>
      <div className='card__text'>
        <p>
          Компания: <span>{companie}</span>
        </p>
        <p>
          Статус:
          <span className={status === 'Частично' ? 'purple' : 'red'}>
            {status}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Card;
