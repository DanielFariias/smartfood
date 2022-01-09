import type { AppProps } from 'next/app'
import { HomeLayoutProvider } from '../context/HomeLayoutContext'
import GlobalStyles from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HomeLayoutProvider>
        <Component {...pageProps} />
      </HomeLayoutProvider>

      <GlobalStyles />
    </>
  )
}

export default MyApp
