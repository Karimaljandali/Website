import Head from 'next/head'
import Image from 'next/image'
import Header from '/components/Header'
import Hero from '/components/Hero'
import Projects from '/components/Projects'
import About from '/components/About'
import Contact from '/components/Contact'
import Footer from '/components/Footer'

export default function Home() {
  return (
    <div className="bg-zinc-900 overflow-y-hidden">
      <Head>
        <title>Karim Aljandali | Freelance React Developer</title>
        <meta name="description" content="React Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className="bg-zinc-900">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
