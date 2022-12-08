import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Header from "../src/components/Header"
import Footer from "../src/components/Footer"
import { H1, H2 } from "../src/components/Typography"
import { useState } from "react"
import Contactform from "@/components/Contactform"
import React, { useEffect } from "react"

export default function Contact() {


  

 
  return (
    <div className="bgTexture">
      <Head>
        <title>Stables</title>
        <meta name="description" content="Stables is The Cone Company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="">
        <H1 title="Contact" />
        <H2 title="Get in touch" />

        <section className="">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            
            <Contactform />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
