import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

function Error() {
  return (
    <>
    <Head>
        <meta name="description" content="تيدكس طبري الحجاز هو حدث تيدكس مباشر منظم بشكل مستقل في مدينة القاهرة. تم إنشاؤها تحت مسمى ثانوية طبري الحجاز وشعارنا هو بالعربية نبدع" />
        <title>الصفحة غير موجودة | متحدثين تيدكس طبري الحجاز</title>
        <meta property="og:title" content="TEDxTabaryElHegaz ~  الصفحة غير موجودة " />
        <meta name="title" content="TEDxTabaryElHegaz ~  الصفحة غير موجودة  " />
        <meta name="application-name" content="TEDxTabaryElHegaz ~  الصفحة غير موجودة  " />
        <meta name="apple-mobile-web-app-title" content="TEDxTabaryElHegaz ~ الصفحة غير موجودة  " />
      </Head>
    <section class="error text-center">
      <div class="container">
        <h2>٤<span><i class="fa fa-microphone" aria-hidden="true"></i></span>٤</h2>
        <h3>عفوًا ، لم يتم العثور على هذه الصفحة!</h3>
        <p>نحن آسفون حقًا ولكن الصفحة التي طلبتها مفقودة :((</p>
        <Link  href="/"><a class="default-button">الرجوع الي الصفحة المتحدثين</a></Link>
      </div>
    </section>
    </>
  )
}

export default Error
