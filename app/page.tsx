import React from 'react'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Main from '@/components/Main';
import '@/public/styles/globals.css'

const page = () => {
  return (
    <div>
      <Header />
      <Main/>
      <Footer />
    </div>
  )
}

export default page