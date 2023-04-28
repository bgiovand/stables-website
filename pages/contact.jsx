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
        <H2 title="Work with us" />

        <section className="container flex justify-around">
          <ul className="list-disc list-inside">
            <li>Only the finest, ultra-thin European Paper</li>
            <li>Compatible with every pre-roll machine</li>
            <li>Industry-leading quality and consistency</li>
            <li>15+ years developing Pre-Rolls</li>
            <li>Sustainably sourced materials</li>
          </ul>
        </section>

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
