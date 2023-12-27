import DropDownContainer from '@/app/ui/dashboard/DropDownContainer'
import React from 'react'

export default function Layout({children}) {
  return (
    <div>
      <DropDownContainer>
        {children}
      </DropDownContainer>
    </div>
  )
}
