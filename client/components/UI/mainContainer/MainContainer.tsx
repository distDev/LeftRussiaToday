import React, { FC } from 'react';


type Props = {};

const MainContainer: FC = ({ children }) => {
  return <div className='main-container'>{children}</div>;
};

export default MainContainer;
