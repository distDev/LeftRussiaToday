import React from 'react'
import Cards from '../cards/Cards'
import { Companies } from '../companies/Companies'
import Filter from '../filter/Filter'
import { News } from '../news/News'
import Container from '../UI/container/Container'

type Props = {}

const Main = () => {
  return (
    <div className='main'>
      <Companies />
      <News />
    </div>
  )
}

export default Main