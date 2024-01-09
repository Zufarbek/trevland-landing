import React from 'react'
import './danger-btn.css'

export default function DangerBtn({title, padding}) {
  return (
    <button style={{ padding: `${padding.top}px ${padding.right}px ${padding.bottom}px ${padding.left}px` }} className='booking_now_btn'>{title}</button>
  )
}
