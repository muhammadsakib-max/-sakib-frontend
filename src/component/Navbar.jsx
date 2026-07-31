import { Button } from '@heroui/react';
import React from 'react'
import '../index.css'

const Navbar = () => {

  return (
    <>
    <div className='w-full primary-color min-h-[1vh]'></div>
    <nav className='flex items-center justify-between px-4 max-w-[80vw] mx-auto py-5'>
        <div className='flex items-center gap-2'>
            <div className='h-4 w-4 rounded-full primary-color'></div>
            <h3>SAKIB</h3>
            <h4>frontend</h4>
        </div>
        <div className='flex items-center gap-24'>
            <div>
                <ul className='flex items-center gap-8'>
                    <li> <a href="">Home</a> </li>
                    <li> <a href="">Services</a> </li>
                    <li> <a href="">About</a> </li>
                    <li> <a href="">Experience</a> </li>
                    <li> <a href="">Journal</a> </li>
                </ul>
            </div>
            <div className='flex items-center gap-4'>
                <Button variant="outline">Download CV</Button>
                <Button>Start a Project</Button>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar