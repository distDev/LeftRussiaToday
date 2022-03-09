import React from 'react';

export const Contacts = () => {
  return (
    <div className='contacts'>
      <div className='contacts__content'>
        <div className='contacts__content_top'>
          <p>
            Если есть вопросы или полезная информация, то написать можно сюда:
          </p>
          <div className='contacts__content_top_links'>
            <a target='_blank' rel='noopener noreferrer' href='#'>
              Telegram
            </a>
            <a target='_blank' rel='noopener noreferrer' href='#'>
              Почта
            </a>
          </div>
        </div>
        <div className='contacts__content_bottom'>
          <p>
            Исходный код проекта:
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/distDev/LeftRussiaToday'
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
