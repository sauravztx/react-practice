import React from 'react'
import ProjectLogo from "../assets/logo.png"
function Logo({width = '100px'}) {
  return (
  <div className='w-60'>
    < img src={ProjectLogo} alt="react logo" />
  </div>
  )
}

export default Logo