import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='fixed bottom-0 left-0 w-full flex justify-center p-5 bg-blue-200'>
        <Link href="/about"className='pl-4 pr-6'>Privacy</Link>
        <Link href="/about"className='pl-4 pr-6'>Policy</Link>
        <Link href="/contact"className='pl-4 pr-6'>Terms</Link>
        <Link href="/address"className='pl-4 pr-6'>Condition</Link>
    </div>
  )
}

export default Footer