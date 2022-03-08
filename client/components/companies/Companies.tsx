import React, { FC, useEffect, useState } from 'react';
import { ICompanie } from '../../interfaces/interfaces';
import { companiesData } from '../../utils/data';
import Cards from '../cards/Cards';
import Filter from '../filter/Filter';
import Container from '../UI/container/Container';
import { UpdateTime } from '../updateTime/UpdateTime';

export const Companies: FC = () => {
  const [initialData, setInitialData] = useState<ICompanie[]>(companiesData);
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('');

  //filter data
  let [allData, setAllData] = useState<ICompanie[]>(initialData);

  const generateStatusForDropdown = () => {
    return [...new Set(companiesData.map((item) => item.status))];
  };

  const generateCategoryForDropdown = () => {
    return [...new Set(companiesData.map((item) => item.category))];
  };
  console.log(name);



  // фильтрация по категориям
  const handleCategoriesFilter = (array: any) => {
    if (category === 'Все категории') {
      return array;
    } else {
      return array.filter((item: any) => item.category === category);
    }
  };

  // фильтрация по статусу
  const handleStatusesFilter = (array: any) => {
    if (status === 'Любой статус') {
      return array;
    } else {
      return array.filter((item: any) => item.status === status);
    }
  };

  // фильтрация
  useEffect(() => {
    let result = initialData;
    result = handleCategoriesFilter(result);
    result = handleStatusesFilter(result);
  

    setAllData(result);
  }, [category, status]);

  return (
    <Container>
      <Filter
        setCategory={setCategory}
        category={category}
      
        status={status}
        setStatus={setStatus}
  
        categories={generateCategoryForDropdown()}
        statuses={generateStatusForDropdown()}
      />
      <UpdateTime />
      <Cards allData={allData.length > 0 ? allData : companiesData} />
    </Container>
  );
};
