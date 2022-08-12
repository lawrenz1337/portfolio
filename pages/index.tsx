import type { NextPage } from 'next'
import Head from 'next/head'
import { Landing } from '../components/Landing'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </>
  )
}

export default Home
