import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className='auth-layout'>
       <section className='auth-left-section scrollbar-hide-default'>
         <Link href='/' className='auth-logo' >
           <Image alt='logo' src="/assets/icons/logo.svg" className='h-10 w-auto' width={140} height={60} />
        </Link>
        <div className='pb-6 lg:pb-8 flex-1'>
            {children}
        </div>
       </section>
    </main>
  )
}

export default layout