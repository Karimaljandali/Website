import Head from 'next/head'
import Image from 'next/image'
import Header from '/components/Header'
import Hero from '/components/Hero'
import Projects from '/components/Projects'
import About from '/components/About'
import Contact from '/components/Contact'
import Footer from '/components/Footer'
import Menu from '/components/Menu'
import { useState } from 'react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="bg-stone-900 overflow-y-hidden relative">
      <Head>
        <title>Karim Aljandali | Freelance React Developer</title>
        <meta name="description" content="React Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header setMenu={setMenuOpen} />
      <Menu menu={menuOpen} setMenu={setMenuOpen} />
      <main className="bg-stone-900">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
