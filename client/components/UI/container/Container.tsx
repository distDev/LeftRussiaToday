import React, { FC } from 'react'


type Props = {}

const Container: FC = ({children}) => {
  return (
    <div className='container'>{children}</div>
  )
}

export default Container