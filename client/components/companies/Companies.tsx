import React, { FC } from 'react'
import Cards from '../cards/Cards';
import Filter from '../filter/Filter';
import Container from '../UI/container/Container';
import { UpdateTime } from '../updateTime/UpdateTime';

type Props = {}

export const Companies: FC = (props: Props) => {
  return (
    <Container>
      <Filter />
      <UpdateTime />
      <Cards />
    </Container>
  );
}