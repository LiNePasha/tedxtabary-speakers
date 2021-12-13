import React from 'react'
import Dataa from '../public/data';
import Link from 'next/link'
import Head from 'next/head'

export const getStaticPaths = async () =>{
  const data = Dataa;
  const paths = data.map(post =>{
    return {
      params: {id: post.id.toString()}
    }
  })
  return {
    paths, fallback:false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const data = Dataa[id];
  return {
    props: { post: data },
  }
}

export default function Post({post}) {
  return (
    <>
    <Head>
        <meta name="description" content={`صفحة المتحدث ${post.name} ${post.title} في احداث تيدكس طبري الحجاز`} />
        <meta name="keywords" content={` المتحدث ${post.name + post.title}, المتحدث ${post.name + post.title} في تيدكس في مدرسة حكومة ,tedxtabaryelhegaz | صفحة المتحدث ${post.name + post.title} , TEDxTabaryElHegaz| صفحة المتحدث ${post.name + post.title}  , TEDxTabaryElHegaz Event| صفحة المتحدث  ${post.name + post.title}, تيدكس طبري الحجاز, tedxفي مدرسة حكومة, TEDxYouthTabaryElHegazHS| صفحة المتحدث ${post.name + post.title}, بالعربية نبدع, Talks, Themes, Speakers, Technology, Entertainment, Design, طبري الحاجز `} />
        <title>صفحة المتحدث {post.name + post.title} | تيدكس طبري الحجاز </title>
        <meta property="og:title" content={`TEDxTabaryElHegaz ~  صفحة المتحدث ${post.name + post.title}`} />
        <meta name="title" content={`TEDxTabaryElHegaz ~  صفحة المتحدث ${post.name + post.title}`} />
        <meta name="application-name" content={`TEDxTabaryElHegaz ~  صفحة المتحدث ${post.name + post.title} `} />
        <meta name="apple-mobile-web-app-title" content={`TEDxTabaryElHegaz ~ صفحة المتحدث ${post.name + post.title}`} />
      </Head>
    <section class="banner banner-five" style={{background: `url('images/bg/${post.id}.jpg')`, backgroundSize: "cover"}}>
      <div class="banner-overlay" style={{background: `url('images/bg/${post.id}.jpg')`, backgroundSize: "cover"}}></div>
      <div class="content-right">
        <div class="content">
          <p>{post.name}</p>
          <h2>في حدث ليس سوي ان تريد 2021</h2>
        </div>
      </div>
    </section>

    <section class="page-header">
      <div class="container">
        <div class="content">
          <h4>تفاصيل المتحدثين</h4>
          <ul>
            <li><span><i class="fa fa-home" aria-hidden="true"></i></span> <Link href="/"><a >كل المتحدثين</a></Link> <span>|</span></li>
            <li>المتحدث {post.name}</li>
          </ul>
        </div>
        <div class="content" style={{padding: "0",display: `${post.id ==0 ? 'none' : ''}`}}>
          <Link href={`${post.id +1}`}><a style={{display: `${post.id +1 == Dataa.length ? 'none' : ''}`}} className="btn btn-danger">المتحدث التالي</a></Link>
          <ul style={{display: `${post.id -1 ==0 ? 'none' : ''}`}}>
            <li><Link href={`${post.id -1}`}><a style={{color: "#fff"}} className="btn btn-danger">المتحدث السابق</a></Link> </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="speaker-details">
      <div class="container">
        <div class="row">
          
          <div class="col-12 text-center">
            <div class="speaker-content">
              <h4>{post.title}</h4>
              <br />
              <ul class="speaker-address">
              <a target="_blank" href={post.link}><li><span><i class="fa fa-globe" aria-hidden="true"></i></span>{post.website}</li></a>
              </ul>
            </div>
          </div>
        </div>
        <div class="speaker-statement">
          <h4 className="text-center">العربية</h4>
          <p>{post.body}</p>
          <h4 className="text-center">English</h4>
          <p className="text-left">{post.bodye}</p>
        </div>
      </div>
    </section>

    <section class="speaker-video">
      <div class="container">
        <div class="row justify-content-center">
          
          <div class="col-9 text-center">
          <iframe style={{width: "100%"}} height="315" src={post.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer-seven">
            <div class="overlay">
                <div class="container">
                    <h2>المتحدث {post.name} في تيدكس طبري الحجاز</h2>
                    <ul class="event-social">
                        <li><a target="_blank" href="https://www.facebook.com/TEDxYouthTabaryElHegazHS"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target="_blank" href="https://www.instagram.com/tedxtabaryelhegaz/"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                    </ul>
                    <a target="_blank" href="https://tedxtabaryelhegaz.com" className="btn btn-danger">TedxTabaryElhegaz.com</a>
                    <p>&copy; جميع الحقوق محفوظة لدي <a href="https://tedxtabaryelhegaz.com">تيدكس طبري الحجاز</a>. صممت بواسطة <a target="_blank" href="https://ahmedwaleed.xyz/">أحمد وليد</a></p>
                </div>
            </div>
        </footer>
    </>
  )
}
