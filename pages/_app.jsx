
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div class="animsition">
            <div class="wrapper boxed">
              <Component {...pageProps} />
            </div>
          </div>
}

export default MyApp
