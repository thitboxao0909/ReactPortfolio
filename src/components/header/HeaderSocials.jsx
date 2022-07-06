import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank" rel='noreferrer'><BsLinkedin /></a>
        <a href="https://github.com" target="_blank" rel='noreferrer'><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials