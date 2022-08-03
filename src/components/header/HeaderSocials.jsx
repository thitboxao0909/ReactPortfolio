import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaSteamSquare} from 'react-icons/fa'
import {GiNotebook} from 'react-icons/gi'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/ho%C3%A0ng-%C4%91%E1%BB%97-4b708011a/" target="_blank" rel='noreferrer'><BsLinkedin /></a>
        <a href="https://github.com/thitboxao0909" target="_blank" rel='noreferrer'><BsGithub /></a>
        <a href='blog.namhoangdo.com' target="_blank" rel='noreferer'><GiNotebook /></a>       
    </div>
  )
}

export default HeaderSocials