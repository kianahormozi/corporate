import dynamic from 'next/dynamic' 
import React from 'react'
import Head from 'next/head'
const OfficeMap = dynamic( import( '@/components/OfficeMap'));
const Footer = dynamic( import( '@/components/footer'));
const Header = dynamic( import( '@/components/Header'));
const AboutUs = dynamic( import( '@/components/AboutUs'));
const Advantages = dynamic( import( '@/components/Advantages'));
const Business = dynamic( import( '@/components/Business'));
const ThemeSalesReport = dynamic( import( '@/components/ThemeSalesReport'));
const Prices = dynamic( import ( '@/components/prices'));
const Testimonials = dynamic( import ( '@/components/Testimonials'));
const Quote = dynamic( import ( '@/components/Quote'));
const Home = () => {
  return (
    <>
      <Head>
      <title>Home Page</title>
      <meta name="description" content="home page." />
      </Head>
      <Header />
      <AboutUs />
      <Advantages />
      <Business />
      <ThemeSalesReport />
      <Prices />
      <Quote />
      <Testimonials />
      <OfficeMap />
      <Footer />
    </>
  );
};
export default Home;