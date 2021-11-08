import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        <meta charset="utf-8" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1" />    
<meta name="theme-color" content="#FF0000" />
<meta name="secound-theme-color" content="#FF0000" />
<link rel="icon" href="images/fav_icon.png" />
<meta name="HandheldFriendly" content="True" />
<meta name="MobileOptimized" content="320" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<link rel="apple-touch-icon" href="images/fav_icon.png" />
<link rel="apple-touch-icon-precomposed" href="images/fav_icon.png" />
<meta http-equiv="cleartype" content="on" />
<meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="تيدكس طبري الحجاز متحدثين" />
<meta property="og:description" content="المتحدثين لدي تيدكس في مدرسة حكومة" />
<meta property="og:url" content="https://www.tedxtabaryelhegaz.com" />
<meta property="og:image" content="https://i.ibb.co/SrKsGkQ/ll.jpg"/>
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@تيدكس_في_مدرسة_حكومة" />
<meta name="twitter:creator" content="@تيدكس_في_مدرسة_حكومة" />
<meta name="twitter:title" content="تيدكس_في_مدرسة_حكومة" />
<meta name="twitter:description" content="TEDxTabaryElHegaz ~  المتحدثين" />
<meta name="twitter:image:src" content="images/fav_icon.png"/>
<meta name="note" content="متحدثين تيدكس طبري الحجاز اول تيدكس في مدرسة حكومة" />
<meta name="subject" content="صفحة المتحدثين لتيدكس طبري الحجاز اول تيدكس في مدرسة حكومة" />
<meta name="identifier-URL" content="https://www.tedxtabaryelhegaz.com" />
<meta name="linkage" content="https://www.tedxtabaryelhegaz.com" />
<meta name="distribution" content="global" />
<meta http-equiv="Expires" content="3"/>
<meta name="classification" content="All" />
<meta name="author" content="تيدكس طبري الحجاز" />
<meta name="owner" content="https://www.tedxtabaryelhegaz.com" />
<meta name="copyright" content="https://www.tedxtabaryelhegaz.com" />
<meta name="web_author" content="Ahmed Waled" />
<meta http-equiv="Cache-control" content="public"/>
<meta name="MSSmartTagsPreventParsing" content="true" />
<meta name="operator" content="متحدثين تيدكس طبري الحجاز" />
<meta name="contactOrganization" content="https://www.tedxtabaryelhegaz.com" />
<meta name="contactStreetAddress1" content="10 ميدان الحجاز" />
<meta name="contactCity" content="cairo" />
<meta name="contactCountry" content="Egypt" />
<meta name="contactPhoneNumber" content="+201014735800, +201025338973" />
<meta name="contactNetworkAddress" content="https://www.tedxtabaryelhegaz.com" />
<meta name="robots" content="index, follow"/>
<meta name="msapplication-starturl" content="https://www.tedxtabaryelhegaz.com"/>
<meta name="msapplication-tooltip" content="متحدثين تيدكس طبري الحجاز اول تيدكس في مدرسة حكومة"/>
<meta http-equiv="pragma" content="no-cache"/>
<meta name="DC.Creator" content="Developed By Ahmed Waled"/>
<meta http-equiv="cleartype" content="on" />
<meta name="HandheldFriendly" content="True" />

    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@700&display=swap" rel="stylesheet"/>
    <link href="assets/css/bootstrap.min.css" rel="stylesheet"/>
    <link href="assets/css/font-awesome.min.css" rel="stylesheet"/>
    <link href="assets/css/banner-bg.css" rel="stylesheet"/>
    <link href="assets/css/rtl.css" rel="stylesheet"/>
    <link href="assets/css/style.css" rel="stylesheet"/>
    <link href="assets/css/responsive.css" rel="stylesheet"/>
        </Head> 
        <body class="dark-layout rtl" dir="rtl">
          <Main />
          <NextScript />
          <script src="assets/js/jquery-3.1.1.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/jquery.easing.min.js"></script>
    <script src="assets/js/custom.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument