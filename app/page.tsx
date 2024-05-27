import React from 'react'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Main from '@/components/Main';

const page = () => {
  return (
    <div>
      <Navbar />
      <Main/>
      <Footer />
    </div>
  )
}

export default page