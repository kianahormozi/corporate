import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic';
const BreadcrumbComponent = dynamic ( import ('@/components/breadCrumb'));
const AppContent = dynamic(import ('@/components/content'));
const CompanyOverview = dynamic( import('@/components/CompanyOverview'));
const Value = dynamic ( import ( '@/components/Values'));
const Commitment = dynamic ( import ( '@/components/commitment'));
const Excellence = dynamic ( import ( '@/components/excellence'));
const FrequentlyQuestions = dynamic ( import ( '@/components/FrequentlyQuestions'));
const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="About us page." />
      </Head>
      <AppContent headerImage="/images/aboutus-bg.jpg" headerText="درباره شرکت ما">
        <BreadcrumbComponent />
        <CompanyOverview />
        <Value />
        <Excellence />
        <Commitment />
        <FrequentlyQuestions />
      </AppContent>
    </>
  );
}

export default AboutUs;
