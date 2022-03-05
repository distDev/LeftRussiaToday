import React from 'react';
import { companiesData } from '../../utils/data';
import Card from '../card/Card';
import GridContainer from '../UI/gridContainer/GridContainer';

type Props = {};

const Cards = (props: Props) => {
  return (
    <GridContainer>
      {companiesData.map((e) => (
        <Card
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
