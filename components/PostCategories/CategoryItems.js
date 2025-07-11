import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Container } from 'react-bootstrap'; 

export const caseItems = [
  { id: 1, 
    caseSlug:'post1',
    title: 'تمرکز بر اتحاد و هدف مشترک', 
    Statement:"post 1",
    description:[
      "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.",
      "معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است.",
    ], 
    image: '/images/1.jpg', 
    category: 'Business Solutions',
    clientName:'گلبرگ',
    location:'زیتون کارمندی خ فیاض',
    started:'16 مرداد 1400',
    completed:'18شهریور 1400',
    value:'13000$',
    testimonials: [
      {
        clientImage:'/images/Fotolia_2.jpg',
        client: "کامران",
        position: "مدیر بازاریابی",
        feedback:
          "معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است",
      },
      {
        clientImage:'/images/Fotolia.jpg',
        client: "سارا",
        position: "کارشناس فروش",
        feedback:
          "معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند",
      },
    ],
   },
  { 
    id: 2, 
    caseSlug:'post2', 
    Statement:"post 2",
    title: 'تمرکز بر هدف مشترک', 
    description:[
      "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.",
      "معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است.",
    ],    image: '/images/8.jpg', 
    category: 'Consumer Products',
    clientName:'گلبرگ',
    location:'زیتون کارمندی خ فیاض',
    started:'16 مرداد 1400',
    completed:'18شهریور 1400',
    value:'13000$',
    testimonials: [
      {
        clientImage:'/images/Fotolia.jpg',
        client: "الهام",
        position: "کارشناس طراحی",
        feedback: "کیفیت کار شما بسیار عالی بود، ممنون.",
      },
      {
        clientImage:'/',
        client: "مهدی",
        position: "مدیر توسعه",
        feedback: "من از همکاری با تیم شما بسیار لذت بردم.",
      },
    ],
   },
  { 
    id: 3, 
    caseSlug:'post3', 
    title: 'تمرکز بر اتحاد ', 
    Statement:"post 3",
    description:[
      "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.",
      "معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است.",
    ],    image: '/images/3.jpg', 
    category: 'Consumer Products',
    clientName:'گلبرگ',
    location:'زیتون کارمندی خ فیاض',
    started:'20 مرداد 1400',
    completed:'18شهریور 1400',
    value:'13000$',
    testimonials: [
      {
        clientImage:'/images/Fotolia_2.jpg',
        client: "کامران",
        position: "مدیر بازاریابی",
        feedback:
          "معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است",
      },
      {
        clientImage:'/images/Fotolia.jpg',
        client: "سارا",
        position: "کارشناس فروش",
        feedback:
          "معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند",
      },
    ],
   },
  { 
    id: 4, 
    caseSlug:'post4', 
    Statement:"post 4",
    title: 'تمرکز بر اتحاد و هدف مشترک', 
    description:[
      "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.",
      "معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است.",
    ],    image: '/images/4.jpg', 
    category: 'Consumer Products',
    clientName:'گلبرگ',
    location:'زیتون کارمندی خ فیاض',
    started:'20 مرداد 1403',
    completed:'28 شهریور 1400',
    value:'13000$',
    testimonials: [
      {
        clientImage:'/images/Fotolia_2.jpg',
        client: "کامران",
        position: "مدیر بازاریابی",
        feedback:
          "معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است",
      },
      {
        clientImage:'/images/Fotolia.jpg',
        client: "سارا",
        position: "کارشناس فروش",
        feedback:
          "معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند",
      },
    ],
   },
  { 
    id: 5, 
    caseSlug:'post5', 
    title: 'اتحاد و هدف مشترک', 
    Statement:"post 5",
    description:[
      "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.",
      "معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است.",
    ],    image: '/images/5.jpg', 
    category: 'bag',
    clientName:'گلبرگ',
    location:'زیتون کارمندی خ فیاض',
    started:'20 مرداد 1400',
    completed:'18 شهریور 1400',
    value:'13500$',
    testimonials: [
      {
        clientImage:'/images/Fotolia_2.jpg',
        client: "کامران",
        position: "مدیر بازاریابی",
        feedback:
          "معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است",
      },
      {
        clientImage:'/images/Fotolia.jpg',
        client: "سارا",
        position: "کارشناس فروش",
        feedback:
          "معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند",
      },
    ],
   },
  { id: 6, 
    caseSlug:'post6', 
    Statement:"post 6",
    title: 'تمرکز بر اتحاد و هدف مشترک', 
    description:[
      "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.",
      "معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است.",
    ],    image: '/images/6.jpg', 
    category: 'Consumer Products',
    clientName:'گلبرگ',
    location:'زیتون کارمندی خ فیاض',
    started:'20 مرداد 1400',
    completed:'18 شهریور 1400',
    value:'100$',
    testimonials: [
      {
        clientImage:'/images/Fotolia_2.jpg',
        client: "کامران",
        position: "مدیر بازاریابی",
        feedback:
          "معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است",
      },
      {
        clientImage:'/images/Fotolia.jpg',
        client: "سارا",
        position: "کارشناس فروش",
        feedback:
          "معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند",
      },
    ],
   },
  { 
    id: 7, 
    caseSlug:'post7', 
    Statement:"post 7",
    title: 'تمرکز بر اتحاد و هدف ', 
    description:[
      "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.",
      "معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است.",
    ],    image: '/images/7.jpg', 
    category: 'Consumer Products',
    clientName:'گلبرگ',
    location:'زیتون کارمندی خ فیاض',
    started:'20 مرداد 1399',
    completed:'18 شهریور 1400',
    value:'100$',
    testimonials: [
      {
        clientImage:'/images/Fotolia_2.jpg',
        client: "کامران",
        position: "مدیر بازاریابی",
        feedback:
          "معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است",
      },
      {
        clientImage:'/images/Fotolia.jpg',
        client: "سارا",
        position: "کارشناس فروش",
        feedback:
          "معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند",
      },
    ],
   },
  { 
    id: 8, 
    caseSlug:'post8', 
    Statement:"post 8",
    title: 'تمرکز بر اتحاد و هدف مشترک', 
    description:[
      "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.",
      "معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است.",
    ],    image: '/images/8.jpg', 
    category: 'bag',
    clientName:'گلبرگ',
    location:'زیتون کارمندی خ فیاض',
    started:'20 مرداد 1400',
    completed:'18 شهریور 1400',
    value:'120$',
    testimonials: [
      {
        clientImage:'/images/Fotolia_2.jpg',
        client: "کامران",
        position: "مدیر بازاریابی",
        feedback:
          "معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است",
      },
      {
        clientImage:'/images/Fotolia.jpg',
        client: "سارا",
        position: "کارشناس فروش",
        feedback:
          "معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند",
      },
    ],
   },
  { 
    id: 9, 
    caseSlug:'post9', 
    title: 'تمرکز بر اتحاد ',
    Statement:"post 9", 
    description:[
      "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.",
      "معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است.",
    ],    image: '/images/9.jpg', 
    category: 'Consumer Products',
    clientName:'گلبرگ',
    location:'زیتون کارمندی خ فیاض',
    started:'20 مرداد 1400',
    completed:'18 شهریور 1401',
    value:'100$',
    testimonials: [
      {
        clientImage:'/images/Fotolia_2.jpg',
        client: "کامران",
        position: "مدیر بازاریابی",
        feedback:
          "معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است",
      },
      {
        clientImage:'/images/Fotolia.jpg',
        client: "سارا",
        position: "کارشناس فروش",
        feedback:
          "معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند",
      },
    ],
   },
  { 
    id: 10, 
    caseSlug:'post10', 
    title: 'تمرکز بر اتحاد و هدف مشترک', 
    Statement:"post 10",
    description:[
      "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.",
      "معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است.",
    ],    image: '/images/10.jpg', 
    category: 'java',
    clientName:'گلبرگ',
    location:'زیتون کارمندی خ فیاض',
    started:'20 مرداد 1398',
    completed:'18 شهریور 1400',
    value:'100$',
    testimonials: [
      {
        clientImage:'/images/Fotolia_2.jpg',
        client: "کامران",
        position: "مدیر بازاریابی",
        feedback:
          "معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است",
      },
      {
        clientImage:'/images/Fotolia.jpg',
        client: "سارا",
        position: "کارشناس فروش",
        feedback:
          "معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند",
      },
    ],
   },
  { 
    id: 11, 
    caseSlug:'post11', 
    title: 'تمرکز بر اتحاد و هدف مشترک', 
    Statement:"post 11",
    description:[
      "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.",
      "معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است.",
    ],    image: '/images/11.jpg', 
    category: 'Consumer Products',
    clientName:'گلبرگ',
    location:'زیتون کارمندی خ فیاض',
    started:'20 مرداد 1400',
    completed:'18 شهریور 1400',
    value:'200$',
    testimonials: [
      {
        clientImage:'/images/Fotolia_2.jpg',
        client: "کامران",
        position: "مدیر بازاریابی",
        feedback:
          "معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است",
      },
      {
        clientImage:'/images/Fotolia.jpg',
        client: "سارا",
        position: "کارشناس فروش",
        feedback:
          "معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند",
      },
    ],
   },
  { 
    id: 12, 
    caseSlug:'post12', 
    title: 'تمرکز بر اتحاد و هدف مشترک', 
    Statement:"post 12",
    description:[
      "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.",
      "معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است.",
    ],    image: '/images/12.jpg', 
    category: 'java',
    clientName:'گلبرگ',
    location:'زیتون کارمندی خ فیاض',
    started:'20 مرداد 1400',
    completed:'18 شهریور 1400',
    value:'3300$',
    testimonials: [
      {
        clientImage:'/images/Fotolia_2.jpg',
        client: "کامران",
        position: "مدیر بازاریابی",
        feedback:
          "معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است",
      },
      {
        clientImage:'/images/Fotolia.jpg',
        client: "سارا",
        position: "کارشناس فروش",
        feedback:
          "معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند",
      },
    ],
   },
];

// تابع برای دریافت تمام داده‌ها
export const getAllItems = async () => {
  return caseItems;
};

// تابع برای دریافت داده بر اساس slug
export const getItemsBySlug = async (caseSlug) => {
  return caseItems.find((item) => item.caseSlug === caseSlug);
};
const CategoryItems = () => {
  const [selectedFilter, setSelectedFilter] = useState('همه');
  const [filteredItems, setFilteredItems] = useState(caseItems);
  const filters = ['همه', 'Business Solutions', 'Consumer Products', 'bag', 'java'];

  const handleFilterButtonClick = (category) => {
    setSelectedFilter(category);
  };

  useEffect(() => {
    if (selectedFilter === 'همه') {
      setFilteredItems(caseItems);
    } else {
      setFilteredItems(caseItems.filter((item) => item.category === selectedFilter));
    }
  }, [selectedFilter]);

  return (
    <Container>
      <div className="button-filter">
        {filters.map((category, index) => (
          <button
            onClick={() => handleFilterButtonClick(category)}
            className={`button-category ${selectedFilter === category ? 'active' : ''}`}
            key={`filters-${index}`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="items-filter">
        {filteredItems.map((item) => (
          <div key={item.id} className="item">
            <Link href={`/case/${item.caseSlug}`}>
              <Image 
                src={item.image} 
                alt={item.title} 
                width={320} 
                height={200} 
              />
              <div className="item-overlay">{item.Statement}</div>
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CategoryItems;
