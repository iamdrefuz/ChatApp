import React from 'react'
import {BsInstagram, BsFacebook , BsTelegram, BsTwitter, BsGithub} from 'react-icons/bs'
import {ImSphere} from 'react-icons/im'
const Footer = () => {
  return (
    <div className='footer'>
        <span>Creator Feruzbek Jumaboyev</span>
        <div className="links">
            <a href="https://instagram.com/f.jumabayev"><BsInstagram/></a>
            <a href="https://t.me/drefuz"><BsTelegram/></a>
            <a href="https://twitter.com/iamdrefuz"><BsTwitter/></a>
            <a href="https://github.com/iamdrefuz"><BsGithub/></a>
            <a href="https://drefuz-portfolio.netlify.app"><ImSphere/></a>
        </div>
    </div>
  )
}

export default Footer