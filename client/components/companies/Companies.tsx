import React, { FC, useState } from 'react';
import { ICompanie } from '../../interfaces/interfaces';
import { companiesData } from '../../utils/data';
import Cards from '../cards/Cards';
import Filter from '../filter/Filter';
import Container from '../UI/container/Container';
import { UpdateTime } from '../updateTime/UpdateTime';

type Props = {};

export const Companies: FC = () => {
  const [allData, setAllData] = useState<ICompanie[]>(companiesData);



  const handleFilter = (name: string): void => {
    const filterData = companiesData.filter((item) => {
      if (name === 'Любой статус') {
        return companiesData;
      } else if (item.status === name) {
        return item
      }
    });

    setAllData(filterData);
  };
  console.log(allData);
  return (
    <Container>
      <Filter handleFilter={handleFilter} />
      <UpdateTime />
      
      <Cards allData={allData} />
    </Container>
  );
};
