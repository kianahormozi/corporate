import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic';
const BreadcrumbComponent = dynamic ( import ( '@/components/breadCrumb'));
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
      <BreadcrumbComponent />
      <PostCategories />
      
      </AppContent>
    </>
  )
}

export default Cases
