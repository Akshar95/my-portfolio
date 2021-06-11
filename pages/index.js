import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './Components/Header'

function home() {
  return (
    <div>
      <Head>
        <title>Akshar Patel Resume</title>
      </Head>

      <main>
      {/* home/header */}
      <Header />

     

      </main>
    </div>
  )
}

export default home

