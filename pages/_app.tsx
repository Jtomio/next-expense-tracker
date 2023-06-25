import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import '../styles/global.css'
import { theme } from '../styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
