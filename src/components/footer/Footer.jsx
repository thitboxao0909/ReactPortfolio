import React from 'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {FaSteamSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo' >TBX</a>
      <ul className='permalink'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href='https://www.facebook.com/profile.php?id=100006609946869' target="_blank" rel='noreferrer'><AiFillFacebook /></a>
        <a href='https://www.instagram.com/thitboxao0909/' target="_blank" rel='noreferrer'><BsInstagram /></a>
        <a href='https://steamcommunity.com/profiles/76561198174848273' target="_blank" rel='noreferrer'><FaSteamSquare /></a>
      </div>

      <div className='footer__copyright'>
        <small> &copy; TbX 2022</small>
      </div>
    </footer>
  )
}

export default Footer