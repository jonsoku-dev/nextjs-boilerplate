import type { AppProps } from 'next/app'

import { globalStyles } from '@/shared/styles'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      {globalStyles}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
