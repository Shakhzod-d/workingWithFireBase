import React from 'react'

import "./HomePageWrapper.css";

const HomePageWrapper = ({ children }) => {
  return (
    <div className='wrapper'>
        <div className='children'>{children}</div>
    </div>
  )
}

export default HomePageWrapper