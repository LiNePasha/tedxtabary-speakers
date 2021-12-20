import Head from 'next/head';
import Link from 'next/link';
import Dataa from '../public/data';

export const getStaticProps = async () => {
  const data = Dataa;
  return {
    props: { posts: data },
  }
}

export default function Home({posts}) {
  

  return (
    <>
      <Head>
        <meta name="description" content="تيدكس طبري الحجاز هو حدث تيدكس مباشر منظم بشكل مستقل في مدينة القاهرة. تم إنشاؤها تحت مسمى ثانوية طبري الحجاز وشعارنا هو بالعربية نبدع" />
        <meta name="keywords" content=" امتحدثين, متحدثين تيدكس في مدرسة حكومة ,tedxtabaryelhegaz | صفحة المتحدثين , TEDxTabaryElHegaz| صفحة المتحدثين  , TEDxTabaryElHegaz Event| صفحة المتحدث احمد جندي, تيدكس طبري الحجاز, tedxفي مدرسة حكومة, TEDxYouthTabaryElHegazHS| صفحة المتحدث احمد جندي, بالعربية نبدع, Talks, Themes, Speakers, Technology, Entertainment, Design, طبري الحاجز " />
        <title>متحدثين تيدكس طبري الحجاز اول تيدكس في مدرسة حكومة</title>
        <meta property="og:title" content="TEDxTabaryElHegaz ~  صفحة المتحدثين " />
        <meta name="title" content="TEDxTabaryElHegaz ~  صفحة المتحدثين  " />
        <meta name="application-name" content="TEDxTabaryElHegaz ~  صفحة المتحدثين  " />
        <meta name="apple-mobile-web-app-title" content="TEDxTabaryElHegaz ~ صفحة المتحدثين  " />
      </Head>

      <div className="box-layout">
        <section className="dark-overlay-left banner banner-dark banner-seven">
            <div className="banner-overlay">
                <div className="container">
                    <div className="banner-seven-content">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="seven-content-right-bg">
                                    <div className="seven-content-right">
                                        <div className="content">
                                            <span className="counter">{posts.length -1}</span>
                                            <p>المتحدثين لدينا</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="seven-content-left">
                                    <div className="content">
                                        <h3>صفحة المتحدثين في احداث تيدكس طبري الحجاز</h3>
                                        <h1>   نحن نشكر جميع المتحدثين الرائعين على مشاركتهم معنا</h1>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </section>

        <section className="dark-overlay-right speakers speakers-nine dark-bg padding-5">
            <div className="container">
                <div className="text-center section-header">
                    <p><em>تعرف علي جميع المتحدثين لدينا</em></p>
                </div>
                <div className="speaker-items">
                    <div className="row">
                        {
                          posts.map( post => (
                              <div key={post.id} className={`col-md-4 col-sm-6 col-xs-12 ${post.id === 0 ? 'first-item' : ''} `}>
                            <div className="speaker-item">
                                <div className="speaker-image">
                                    <Link href={`/${post.id}`}><a><img src={`images/${post.id}.jpg`} alt={`صورة المتحدث ${post.name} `} className="img-responsive"/></a></Link>
                                </div>
                            </div>
                        </div>
                          ))
                        }
                    </div>

                </div>
            </div>
        </section>
    </div>

    <footer class="footer-seven">
            <div class="overlay">
                <div class="container">
                    <h2>جميع المتحدثين في احداثنا الرائعة</h2>
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
