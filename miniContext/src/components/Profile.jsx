import React, { useContext } from 'react'
import UserContext from '../context/UserContext'


function Profile() {
    const {user} = useContext(UserContext)
  if(!user) return <div className='bg-orange-500 text-white p-4 '>Please Login</div>
  return <div className='bg-blue-500 text-white p-4'>Welcome {user.username}</div>
}

export default Profile