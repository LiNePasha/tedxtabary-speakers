import Link from 'next/link';
import Head from 'next/head';

export default function First() {
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

    <footer class="footer-seven">
            <div class="overlay">
                <div class="container">
                    <h2> الصفحة غير موجودة</h2>
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

