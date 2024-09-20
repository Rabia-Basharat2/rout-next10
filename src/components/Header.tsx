import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='flex gap-4 p-7 bg-blue-500 justify-end'>
        <Link href="/">Home Page</Link>
        <Link href="/about"className='pl-4 pr-4'>About Page</Link>
        <Link href="/contact"className='pl-4 pr-4'>Contact Page</Link>
        <Link href="/address"className='pl-4 pr-4'>Address Page</Link>
    </div>
  )
}

export default Header