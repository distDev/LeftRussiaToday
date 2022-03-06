import React, { FC } from 'react';
import { ICompanie } from '../../interfaces/interfaces';
import { companiesData } from '../../utils/data';
import Card from '../card/Card';
import GridContainer from '../UI/gridContainer/GridContainer';

type ICards = {
  allData: ICompanie[];
};

const Cards: FC<ICards> = ({allData}) => {

  return (
    <GridContainer>
      {allData.map((e) => (
        <Card
        category={e.category}
          companie={e.companie}
          img={e.img}
          status={e.status}
          id={e.id}
          key={e.id}
        />
      ))}
    </GridContainer>
  );
};

export default Cards;
