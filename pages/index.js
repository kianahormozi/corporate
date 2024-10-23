import dynamic from 'next/dynamic' 
import React from 'react'

const OfficeMap = dynamic( import( '@/components/officeMap'));
const Footer = dynamic( import( '@/components/footer'));
const Header = dynamic( import( '@/components/header'));

const Home = () => {
  return (
    <>
        <Header />
        <OfficeMap />
        <Footer />

    </>
  )
}
export default Home