import React from 'react'
import LogInWithGoogle from '../../components/LogInWithGoogle/LogInWithGoogle';
import HomePageWrapper from '../../UI/HomePageWrapper/HomePageWrapper';

const LogIn = () => {
  return (
    <HomePageWrapper>
        <LogInWithGoogle />
    </HomePageWrapper>
  )
}

export default LogIn