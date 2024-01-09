import React from 'react'
import LogoLink from './logo.svg'
import './navbar.css'
import DangerBtn from '../buttons/danger-btn'

const navbarItems = [
    {
        title: 'Home',
        path: '/home',
    },
    {
        title: 'Location',
        path: '/home',
    },
    {
        title: 'Blog',
        path: '/home',
    },
    {
        title: 'About',
        path: '/home',
    },
    {
        title: 'Contact',
        path: '/home',
    },
]

export default function Navbar() {
  return (
    <div className='container navbar_section'>
        <div className='row align-items-center'>
            <div className='logo'>
                <img src={LogoLink} alt='Trevland logo'/>
            </div>
            <ul className='navbar'>
                {
                    navbarItems.map(item => {
                        return (
                            <li className='navbar_item'>
                                <a href={item.path} className='navbar_item_link'>{item.title}</a>
                            </li>
                        )
                    })
                }
            </ul>
            <div className='booking_now'>
                <DangerBtn title="Booking now" padding={{top: 14, right: 35, bottom: 13, left: 36}}/>
            </div>
        </div>
    </div>
  )
}
