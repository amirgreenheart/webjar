import type { AppProps } from 'next/app'
import "../styles/globals.css";
import axios from "axios";
import { Layout } from '@/components/layout';
axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_API_URL;
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
