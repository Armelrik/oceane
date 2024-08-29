import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='border-50'>
      <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row'>
        <Link href='/'>
          <Image src="/assets/images/logo-color.svg" width={150} height={90} alt='logo' />
        </Link>

        <p>@2024 Oceane. Tous droits reserved.</p>
      </div>
    </footer>
  )
}

export default Footer