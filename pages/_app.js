import '@/styles/globals.css'
import Layout from './component/Layout'

export const metadata = {
  title: 'Learn NextJs12',
  description: 'a repo for practicing Nextjs12',
} 
export default function App({ Component, pageProps }) {
  return ( 
    <Layout>
      <Component {...pageProps} />
    </Layout>
 )
}
