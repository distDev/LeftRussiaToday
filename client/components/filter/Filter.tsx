import React, { FC } from 'react';

type IFilter = {
  setCategory: React.Dispatch<React.SetStateAction<string>>;
 
  category: string;

  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  categories: string[];
  statuses: string[];
};

const Filter: FC<IFilter> = ({
  categories,
  category,

  setCategory,

  status,
  setStatus,
  statuses,
}) => {
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  
 
  return (
    <div className='filter'>
    
      <select
        id='category'
        defaultValue={'Все категории'}
        onChange={handleCategoryChange}
        value={category}
      >
        <option value='Все категории'>Все категории</option>
        {categories.map((e) => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </select>
      <select
        id='status'
        defaultValue={'Любой статус'}
        onChange={handleStatusChange}
        value={status}
      >
        <option value='Любой статус'>Любой статус</option>
        {statuses.map((e) => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
