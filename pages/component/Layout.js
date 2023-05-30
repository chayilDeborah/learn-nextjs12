import React from 'react'

export const metadata = {
    title: 'Learn NextJs12',
    description: 'a repo for practicing Nextjs12',
  } 
const Layout = ({children}) => {
  return (
    <div>i am Layout
        {children}
    </div>
  )
}

export default Layout
// layout contains what you want to be shown on all pages