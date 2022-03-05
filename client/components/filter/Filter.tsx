import React, { FC, useState } from 'react';

type IFilter = {
  handleFilter: (name: string) => void;
};

const Filter: FC<IFilter> = ({ handleFilter }) => {
  const [category, setCategory] = useState('Любой статус');

  const handleCatChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    handleFilter(e.target.value);
  };

  

  console.log(category);

  return (
    <div className='filter'>
      <input type='text' placeholder='Поиск...' />
      <select
        name='status'
        defaultValue={'Любой статус'}
        value={category}
        onChange={handleCatChange}
        id='14fes'
      >
        <option value='Любой статус'>Любой статус</option>
        <option value='Полностью'>Полностью</option>
        <option value='Частично'>Частично</option>
      </select>
      <select name='category' id='14fes'>
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
