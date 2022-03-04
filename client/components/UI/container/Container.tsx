import React, { FC } from 'react'
import './container.scss'

type Props = {}

const Container: FC = ({children}) => {
  return (
    <div className='container'>{children}</div>
  )
}

export default Container