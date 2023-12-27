import Link from 'next/link'
import React from 'react'

export default function NavLinks({links}) {
  return (
    <>
        {links.map((link,key)=>{
            const LinkIcon =  link.icon;
            return(
                <Link 
                    key={key}
                    href={link.href}
                    className="flex h-[48px] grow items-center justify-center gap-2 rounded-md  p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                    <LinkIcon className="w-6" /> 
                    <p className="hidden md:block ">{link.nombre}</p>
                </Link>
            )
        })}
    </>
    )
};