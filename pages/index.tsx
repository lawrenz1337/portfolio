import type { NextPage } from 'next'
import Head from 'next/head'
import { Landing } from '../components/Landing'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mykhailo Diachuk | Full-Stack Developer</title>
        <meta name="description" content="Frontend 🤝 Backend 🔥 JavaScript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </>
  )
}

export default Home
