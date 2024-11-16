import Head from 'next/head';
import dynamic from 'next/dynamic';
import React from 'react'
const OfficeMap = dynamic ( import ('@/components/OfficeMap'));
const AppContent = dynamic ( import ('@/components/content'));
const CompanyContact = dynamic ( import ('@/components/CompanyContact'));
const ContactUs = () => {
  return (
    <>
     <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact us." />
      </Head>
      <AppContent headerImage="/images/contacts_bg.jpg"  headerText="ارتباط با ما">
        <CompanyContact />
        <OfficeMap />
      </AppContent>
    </>
  )
}
export default ContactUs;
