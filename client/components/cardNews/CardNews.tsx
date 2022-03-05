import Image from 'next/image';
import React, { FC } from 'react';
import { INews } from '../../interfaces/interfaces';

const CardNews: FC<INews> = ({
  createdAt,
  id,
  img,
  source,
  subtitle,
  title,
}) => {
  return (
    <div className='card-news'>
      <div className='card-news__image'>
        <Image src={img} alt='картинка' height={179} width={235} />
      </div>
      <div className='card-news__content'>
        <div className='card-news__content_main'>
          <span>{source}</span>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <div className='card-news__content_footer'>
          <p>{createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default CardNews;
