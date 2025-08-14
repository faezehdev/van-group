import React from 'react'
import PlayIcon from '../../shared/icon/PlayIcon'
export default function HeroSection() {
  return (
    <div className='bg-foreground flex justify-center items-center min-h-screen'>
      <span className="PlayIcon">
        <PlayIcon width={80} height={80}/>
      </span>
    </div>
  )
}
