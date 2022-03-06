import React, { FC, useState } from 'react';

type IFilter = {
  handleNameFilter: (name: string) => void;
  handleCategoriesFilter: (category: string) => void;
  categories: string[];
};

const Filter: FC<IFilter> = ({
  handleNameFilter,
  handleCategoriesFilter,
  categories,
}) => {
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    handleCategoriesFilter(e.target.value);
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    handleNameFilter(e.target.value);
  };

  return (
    <div className='filter'>
      <input
        type='text'
        value={name}
        onChange={handleNameChange}
        placeholder='Поиск...'
      />
      <select
        id='category'
        defaultValue={'категории'}
        onChange={handleCategoryChange}
        value={category}
      >
        <option value=''>Все категории</option>
        {categories.map((e) => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
