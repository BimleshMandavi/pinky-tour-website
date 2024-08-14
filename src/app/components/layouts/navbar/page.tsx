import { Button, Stack } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <nav className='h-[75.14px] w-[412px] border-b-2 border-stone-300'>
        <div className='flex justify-between h-full w-full items-center px-3'>
            <div>
         <Image src="/menu.svg" 
        alt='menu'
        height={24}
        width={24}
        priority
     
     />
            </div>
            <div>
                <Image src="/logo.svg" 
        alt='logo'
        height={31.15}
        width={129}
        priority
     
     />
        </div>
      <Button className='w-[70.24px] h-[22.46px] bg-[#43E305] text-[7.65px] text-white'>Login</Button>
      <Button className='w-[70.24px] h-[22.46px] bg-[#0A225F] text-[7.65px] text-white' >Register</Button>
   
        </div>
    </nav>
  )
}

export default page
