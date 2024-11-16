import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
const BreadcrumbComponent = dynamic ( import ( '@/components/breadCrumb'));
const AppContent = dynamic ( import ( '@/components/content'));
const ServicesContent = dynamic ( import ('@/components/ServicesContent'));
const OurServices = () => {
  return (
    <>
    <Head>
        <title>Our Services</title>
        <meta name="description" content="Our services ." />
    </Head>
    <AppContent headerImage="/images/services.jpg" headerText="خدمات ما">
        <BreadcrumbComponent />
        <ServicesContent />
    </AppContent>
      
    </>
  )
}

export default OurServices
