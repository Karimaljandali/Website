import Head from 'next/head'
import Image from 'next/image'
import Header from '/components/Header'
import Hero from '/components/Hero'

export default function Home() {
  return (
    <div className="bg-dark">
      <Head>
        <title>Karim Aljandali | Freelance React Developer</title>
        <meta name="description" content="React Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main>
        <Hero />
      </main>
    </div>
  )
}
