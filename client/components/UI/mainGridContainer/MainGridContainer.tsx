import React, { FC } from 'react'
import './main-grid-container.scss'

type Props = {}

const MainGridContainer: FC = ({children}) => {
  return (
    <div className='main-grid-container'>{children}</div>
  )
}

export default MainGridContainer;