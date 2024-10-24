import dynamic from 'next/dynamic' 
import React from 'react'

const OfficeMap = dynamic( import( '@/components/officeMap'));
const Footer = dynamic( import( '@/components/footer'));
const Header = dynamic( import( '@/components/header'));
const AboutUs = dynamic( import( '@/components/aboutUs'));

const Home = () => {
  return (
    <>
        <Header />
        <AboutUs />
        <OfficeMap />
        <Footer />

    </>
  )
}
export default Home