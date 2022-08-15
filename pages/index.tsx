import type { NextPage } from 'next'
import Head from 'next/head'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import { Landing } from '../components/Landing'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mykhailo Diachuk | Full-Stack Developer</title>
        <meta name="description" content="Frontend 🤝 Backend 🔥 JavaScript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Home
