import Head from 'next/head'
import Image from 'next/image'
import About from '../Components/About'
import Header from '../Components/Header'

function home() {
  return (
    <div>
      <Head>
        <title>Akshar Patel Resume</title>
      </Head>

      <main>
      <Header />
      <About />

     

      </main>
    </div>
  )
}

export default home

