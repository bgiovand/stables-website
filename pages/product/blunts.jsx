import Head from "next/head"
import Image from "next/image"
import Header from "../../src/components/Header"
import Footer from "../../src/components/Footer"
import { H1, H2, H3 } from "../../src/components/Typography"
import Link from "next/link"

export default function Blunts() {
  return (
    <div className="first-letter:">
      <Head>
        <title>Blunts</title>
        <meta name="description" content="Stables is The Cone Company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="">
        <H1 title="Blunt" />
        <H2 title="force trauma" />
        <div className="absolute top-[120px] right-[250px] text-[red] border-[1px] border-dashed border-[red] p-5 px-6 rotate-6 rounded-lg font-mono z-50 uppercase font-black bg-[red] bg-opacity-10 leading-tight ">
          Research & Development
        </div>
        <section className="w-8/12 mx-auto mb-20">
          <div>
            <p className="text-3xl my-20 text-center">
              Finally, a blunt line with premium features to enhance your smoking experience.
            </p>
          </div>
          <div>
            <H3 title="Terpene Infused" />
            <p className="text-center w-6/12 mx-auto">
              Terpene infused paper for a more complex
              flavour profile when you’re smoking.{" "}
              <Link href="/contact">Reach out to our sales team</Link>
              to learn more.
            </p>
          </div>
          <div className="mt-20">
            <H3 title="Premium Paper Weights" />
            <ul className="flex flex-row justify-center">
              {[...Array(3)].map((e, i) => (
                <li key={i} className="center text-center mx-5">
                  <Image
                    src="/weight.svg"
                    alt="Hemp"
                    width={50}
                    height={50}
                    className="w-[120px] h-[120px] rounded-full bg-gray-400 border-8 border-stablesBrown mb-2"
                  />
                  <span>50 gsm</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-20">
            <H3 title="Premium Paper Material" />
            <ul className="flex flex-row">
              {[...Array(4)].map((e, i) => (
                <li key={i} className="center text-center mx-5">
                  <Image
                    src="/colorwheel.svg"
                    alt="Hemp"
                    width={100}
                    height={100}
                    className="w-[120px] h-[120px] object-contain object-center rounded-full bg-gray-400 border-8 border-stablesBrown mb-2"
                  />
                  <span>Custom</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
