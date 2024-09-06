import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsMedium} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    
    <div className="header__socials">

        <a href="https://www.linkedin.com/in/shyam-kumar-sah-4232b0227/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/shyam343" target="_blank" rel='noreferrer'><BsGithub/></a>
        <a href="https://www.codechef.com/users/sah_123" target="_blank" rel='noreferrer'><BsMedium/></a>
    </div>
  )
}

export default HeaderSocials