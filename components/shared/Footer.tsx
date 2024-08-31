import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row'>
        <Link href='/'>
          <Image src="/assets/images/oceane.png" width={128} height={38} alt='logo2' className='rounded-lg'/>
        </Link>
        <p>Oceane @2024 - Tous droits reserved. <br/> Conception par <Link href='http://armelrik.site' className="text-primary-500">Armel</Link> </p>
      </div>
    </footer>
  )
}

export default Footer