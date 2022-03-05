import React, { FC } from 'react'

type Props = {}

const NewsContainer:FC = ({children}) => {
  return (
    <div className='news-container'>{children}</div>
  )
}

export default NewsContainer