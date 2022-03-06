import React, { FC, useState } from 'react';
import { ICompanie } from '../../interfaces/interfaces';
import { companiesData } from '../../utils/data';
import Card from '../card/Card';
import Cards from '../cards/Cards';
import Filter from '../filter/Filter';
import Container from '../UI/container/Container';
import GridContainer from '../UI/gridContainer/GridContainer';
import { UpdateTime } from '../updateTime/UpdateTime';

type Props = {};

export const Companies: FC = () => {
  //filter data
  let [allData, setAllData] = useState<ICompanie[]>(companiesData);
  

  const generateStatusForDropdown = () => {
    return [...new Set(companiesData.map((item) => item.status))];
  };

  const generateCategoryForDropdown = () => {
    return [...new Set(companiesData.map((item) => item.category))];
  };

  // фильтрация по названию
  const handleNameFilter = (name: string): void => {
      const filteredData = companiesData.filter((item) => {
        if (
          item.companie.toLocaleLowerCase().includes(name.toLocaleLowerCase())
        ) {
          return item;
        }
      });

      setAllData(filteredData);
  };

  // фильтрация по категориям
  const handleCategoriesFilter = (category: string): void => {
   const filteredData = companiesData.filter((item) => {
     if (item.category === category) {
       return item;
     }
   });

   setAllData(filteredData);
  };
  

  console.log(allData)

  return (
    <Container>
      <Filter
        categories={generateCategoryForDropdown()}
        handleCategoriesFilter={handleCategoriesFilter}
        handleNameFilter={handleNameFilter}
      />
      <UpdateTime />
      <Cards allData={allData} />
    </Container>
  );
};
