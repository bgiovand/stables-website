import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Header from "../src/components/Header"
import Footer from "../src/components/Footer"
import Link from "next/link"
import { H1, H2 } from "../src/components/Typography"

export default function Home() {
  return (
    <div className="bgTexture">
      <Head>
        <title>Stables</title>
        <meta name="description" content="Stables is The Cone Company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="">
        <section className="max-w-max min-w-full bgTexture bg-stablesBlue">
          <div className="px-20 py-10">
            <H1 title="Stables" />
            <H2 title="Smoke Easy" />
            <div className="block">
              <Image
                src="/cone.svg"
                alt="Picture of the author"
                width={500}
                height={500}
                className="mx-auto m-10 bgTexture bg-stablesBlue"
              />
            </div>
            <div className="flex justify-center">
              <p className="text-white text-2xl font-light">The Cone Company</p>
            </div>
          </div>
        </section>

        <section class="md:m-20">
          <p class="font-normal text-3xl mx-0 md:mx-5 md:text-5xl leading-tight font-mellow">
            In Cannabis, the Smokers are represented by two separate, yet
            equally important groups. The Licensed Producers who grow the crop
            and the Cone Manufacturers, who provide the papers. These are their
            stories…
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 238.83 72.53"
            className="fill-stablesOrange w-1/4 mx-auto my-20"
          >
            <path d="M0,71.85c0-.8,1.27-1.03,1.27-3V3.38C1.27,1.41,0,1.18,0,.38,0,.11,.33,0,.77,0H15.91c11.66,0,22.1,49.74,22.1,58.93s-10.44,13.3-22.1,13.3H.77c-.44,0-.77-.11-.77-.38Zm15.8-3.12c5.58,0,8.51-4.64,8.51-9.8S21.38,3.5,15.8,3.5c-1.44,0-2.04,.61-2.04,1.67v61.9c0,1.06,.61,1.67,2.04,1.67Z" />
            <path d="M40.96,62.5V3.38c0-1.98-1.22-2.2-1.22-3,0-.27,.28-.38,.72-.38h13.48c.39,0,.72,.11,.72,.38,0,.8-1.22,1.03-1.22,3V62.5c0,4.45,3.04,6.38,7.57,6.38s6.96-2.62,6.96-6.38V3.19c0-2.05-1.21-2.01-1.21-2.81,0-.27,.33-.38,.83-.38h5.86c.55,0,.83,.11,.83,.38,0,.8-1.22,.76-1.22,2.81V62.5c0,4.94-3.98,10.03-14.81,10.03s-17.29-4.45-17.29-10.03Z" />
            <path d="M77.15,71.85c0-.8,1.22-.76,1.22-2.81V3.38c0-1.98-1.22-2.2-1.22-3,0-.27,.28-.38,.72-.38h9.06c2.32,0,3.26,.46,4.42,1.52l15.14,60.19V3.19c0-2.05-1.27-2.01-1.27-2.81,0-.27,.33-.38,.83-.38h5.86c.55,0,.88,.11,.88,.38,0,.8-1.27,.76-1.27,2.81V70.44c0,1.1-1.05,1.79-2.71,1.79h-3.31c-2.38,0-3.48-.72-4.25-1.44-.88-.87-12.43-57.11-17.79-62.05v60.3c0,2.05,1.22,2.01,1.22,2.81,0,.27-.33,.38-.83,.38h-5.86c-.55,0-.83-.11-.83-.38Z" />
            <path d="M126.05,71.85c0-.8,1.27-1.03,1.27-3V3.38c0-1.98-1.27-2.2-1.27-3,0-.27,.33-.38,.77-.38h15.14c11.66,0,22.1,49.74,22.1,58.93s-10.44,13.3-22.1,13.3h-15.14c-.44,0-.77-.11-.77-.38Zm15.8-3.12c5.58,0,8.51-4.64,8.51-9.8s-2.93-55.44-8.51-55.44c-1.44,0-2.04,.61-2.04,1.67v61.9c0,1.06,.61,1.67,2.04,1.67Z" />
            <path d="M167.01,62.5V3.38c0-1.98-1.22-2.2-1.22-3,0-.27,.28-.38,.72-.38h13.48c.39,0,.72,.11,.72,.38,0,.8-1.22,1.03-1.22,3V62.5c0,4.45,3.04,6.38,7.57,6.38s6.96-2.62,6.96-6.38V3.19c0-2.05-1.22-2.01-1.22-2.81,0-.27,.33-.38,.83-.38h5.86c.55,0,.83,.11,.83,.38,0,.8-1.22,.76-1.22,2.81V62.5c0,4.94-3.98,10.03-14.81,10.03s-17.29-4.45-17.29-10.03Z" />
            <path d="M203.2,71.85c0-.8,1.22-.76,1.22-2.81V3.38c0-1.98-1.22-2.2-1.22-3,0-.27,.28-.38,.72-.38h9.06c2.32,0,3.26,.46,4.42,1.52l15.14,60.19V3.19c0-2.05-1.27-2.01-1.27-2.81,0-.27,.33-.38,.83-.38h5.86c.55,0,.88,.11,.88,.38,0,.8-1.27,.76-1.27,2.81V70.44c0,1.1-1.05,1.79-2.71,1.79h-3.31c-2.38,0-3.48-.72-4.25-1.44-.88-.87-12.43-57.11-17.79-62.05v60.3c0,2.05,1.22,2.01,1.22,2.81,0,.27-.33,.38-.83,.38h-5.86c-.55,0-.83-.11-.83-.38Z" />
          </svg>
        </section>

        <section class="m-20">
          <h2 className={styles.title}>Sign up for THE FILTER</h2>
          <p className={styles.description}>
            A industry newsletter for the next generation of coneissieurs
          </p>
          <form className={styles.form} action="https" method="POST">
            <div class="mb-6">
              <label
                for="email-newsletter"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email Newsletter
              </label>
              <input
                type="email"
                id="email-newsletter"
                aria-describedby="Email address for newsletter"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your email"
                autoComplete="email"
                required
              />
              <p
                id="helper-text-explanation"
                class="mt-2 text-sm text-gray-500 dark:text-gray-400"
              >
                We’ll never share your details. Read our{" "}
                <Link
                  href="/privacy"
                  class="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
            <div class="mb-6">
              <button
                type="button"
                class="text-white bg-stablesOrange hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800"
              >
                Sign Up
              </button>
            </div>
          </form>
        </section>

        {/* <section className="bg-white block w-full p-20">
          <Image
            src="/things.svg"
            alt="Things"
            width={500}
            height={500}
            className="mx-auto"
          />
          <H2 title="The Merchandise" />
        </section> */}
      </main>
      <div>
        <Footer />
      </div>
    </div>
  )
}
