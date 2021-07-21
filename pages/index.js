import Head from 'next/head'
import Image from 'next/image'
import About from '../Components/About'
import Header from '../Components/Header'
import Home from '../Components/Home'

function home() {
  return (
    <div>
      <Head>
        <title>Neha Resume</title>
      </Head>

      <main>
      <Header />
      <Home />
      <About />

     

      </main>
    </div>
  )
}

export default home

