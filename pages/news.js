import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic';
const BreadcrumbComponent = dynamic ( import ( '@/components/breadCrumb'));
const AppContent = dynamic ( import ('@/components/content'));
const Blog = dynamic ( import ('@/components/blog'));
const News = () => {
  return (
    <>
     <Head>
        <title>News</title>
        <meta name="description" content="news page." />
      </Head>
      <AppContent headerImage='/images/blog_bg.jpg' headerText="اخبار">
      <BreadcrumbComponent />
      <Blog />
      </AppContent>
    </>
  )
}

export default News
