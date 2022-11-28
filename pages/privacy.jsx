import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'

export default function Privacy() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stables</title>
        <meta name="description" content="Stables is The Cone Company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="">
        
        <section className="max-w-max min-w-full bg-stablesBlue">
          <div className="px-20 py-10">
            <h1 className="text-white text-5xl font-bold">Privacy Policy</h1>
            <p className="text-white text-2xl font-light">
              </p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
