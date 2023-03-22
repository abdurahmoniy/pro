import React from 'react'
import Content from './Content'
import Footer from './Footer'
import SideBar from './SideBar'
import Header from './SideBar'

export default function Layout() {
  return (
    <div className='flex flex-col flex-1 h-screen'>
      <div className="">
        <SideBar />
        <Content />
      </div>
      {/* <Footer /> */}
    </div>
  )
}
