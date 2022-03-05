import React, { FC } from 'react'
import { newsData } from '../../utils/data';
import CardNews from '../cardNews/CardNews';
import Container from '../UI/container/Container';
import NewsContainer from '../UI/newsContainer/NewsContainer';

type Props = {}

export const News: FC = () => {
  return (
    <Container>
      <h2>Новости</h2>
      <NewsContainer>
        {newsData.map((e) => (
          <CardNews
            key={e.id}
            source={e.source}
            img={e.img}
            id={e.id}
            title={e.title}
            subtitle={e.subtitle}
            createdAt={e.createdAt}
          />
        ))}
      </NewsContainer>
    </Container>
  );
}