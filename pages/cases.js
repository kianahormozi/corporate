import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic';
const Breadcrumb =  dynamic ( import ( "@/components/Breadcrumb"));
const AppContent = dynamic ( import ('@/components/content'));
const PostCategories = dynamic ( import ('@/components/PostCategories'));
function Cases() {
  return (
    <>
      <Head>
        <title>Cases</title>
        <meta name="description" content="cases page." />
      </Head>
      <AppContent headerImage='/images/careers_bg.jpg' headerText="پروژه ها">
      <Breadcrumb />
      <PostCategories />
      
      </AppContent>
    </>
  )
}

export default Cases
