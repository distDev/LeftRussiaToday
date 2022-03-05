import React, { FC } from 'react';

type Props = {};

const Filter: FC = () => {
  return (
    <div className='filter'>
      <input type='text' placeholder='Поиск...' />
      <select name='category' id='14fes'>
        <option disabled hidden selected={true} value='full'>
          Статус
        </option>
        <option value='semi'>Частично</option>
        <option value='semi'>Полностью</option>
      </select>
      <select name='status' id='14fes'>
        <option disabled hidden selected={true} value='full'>
          Категория
        </option>
        <option value='semi'>Техника</option>
        <option value='full'>Продукты</option>
        <option value='semi'>It</option>
        <option value='full'>Автомобили</option>
        <option value='semi'>Одежда</option>
        <option value='full'>Авиация</option>
        <option value='semi'>Финансы</option>
        <option value='semi'>Спорт</option>
      </select>
    </div>
  );
};

export default Filter;
