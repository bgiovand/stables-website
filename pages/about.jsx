import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Header from "../src/components/Header"
import Footer from "../src/components/Footer"

export default function About() {
  return (
    <div className="">
      <Head>
        <title>Stables</title>
        <meta name="description" content="Stables is The Cone Company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="max-w-max min-w-full md:max-w-lg">
        <h1 className="text-stablesOrange text-7xl  text-center font-light mt-20 mb-5">
          About Stables
        </h1>

        <section id="profile" className=" mb-20">
          <p className="font-light text-2xl">
            The world deserves a better cone... So, three Canadian Amigos got
            together to create something better for consumers and producers
            alike. Our expertise is unmatched - collectively bringing 20 years
            from the cannabis space. We are the namesake of Bert Kelly’s Jazz
            Stables - a speak easy in Chicago 1920’s and later in NYC in the
            1930’s.
          </p>
        </section>

        <section id="values" className="mb-20">
          <h2 className="text-stablesOrange text-4xl  text-center font-light  mt-20 mb-2">
            Values
          </h2>
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col">
              <h3 className="text-stablesYellow text-xl  text-center font-semibold m-5">
                Quality
              </h3>
              <p className="">
                We are focused on providing the highest quality pre-rolled cones
                and blunts to our Customers. In doing so, we are bringing the
                first high quality North American Hemp Blunts to market. Our
                focus on quality extends beyond the product, making sure we’re
                doing the best to meet your Customers needs.
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-stablesYellow text-xl  text-center font-semibold m-5">
                Cones as a Service
              </h3>
              <p className="">
                We see our product more as a service: we know the struggles
                you’re facing - we’ve lived them. Our job is done when your
                Customers have cone in hand. So, think of Stables more like a
                cone consultancy than simply a single commercial exchange.
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-stablesYellow text-xl  text-center font-semibold m-5">
                Fun &amp; Customization
              </h3>
              <p className="">
                Fun natured at heart. We strive for it to be a part of our
                process. After all we’re in the Cannabis business; it should be
                fun. You should be able to reflect your brands uniqueness in the
                Cones you sell. That is why we’re here to customize to your
                hearts content.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-stablesYellow p-10 pb-0 mb-20">
          <h2 className="text-7xl text-stablesOrange text-center font-semibold  mt-20 mb-2">
            Built by Coneisseurs
          </h2>
          <h2 className="text-stablesBrown text-4xl  text-center font-light  mt-5 mb-2">
            Our Team
          </h2>
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col">
              <Image src="/images/andrew.jpg" width={200} height={200} alt="" />
              <h3 className="text-stablesBrown text-xl  text-center font-semibold m-5 mb-0">
                Benjamin
              </h3>
              <span className="text-stablesBrown font-regular text-center mb-3">
                Chief Something
              </span>
              <p className="text-stablesBrown">
                Benjamin is a serial entrepreneur with a passion for the
                cannabis industry. He has been involved in the industry since
                2013 and has been a part of multiple successful cannabis
                companies. He has a background in business development,
                marketing, and operations. Benjamin is a graduate of the
                University of Waterloo’s Business program.
              </p>
            </div>
            <div className="flex flex-col">
              <Image src="/images/andrew.jpg" width={200} height={200} alt="" />
              <h3 className="text-stablesBrown text-xl  text-center font-semibold m-5 mb-0">
                Benjamin
              </h3>
              <span className="text-stablesBrown font-regular text-center mb-3">
                Chief Something
              </span>
              <p className="text-stablesBrown">
                Benjamin is a serial entrepreneur with a passion for the
                cannabis industry. He has been involved in the industry since
                2013 and has been a part of multiple successful cannabis
                companies. He has a background in business development,
                marketing, and operations. Benjamin is a graduate of the
                University of Waterloo’s Business program.
              </p>
            </div>
            <div className="flex flex-col">
              <Image src="/images/andrew.jpg" width={200} height={200} alt="" />
              <h3 className="text-stablesBrown text-xl  text-center font-semibold m-5 mb-0">
                Benjamin
              </h3>
              <span className="text-stablesBrown font-regular text-center mb-3">
                Chief Something
              </span>
              <p className="text-stablesBrown">
                Benjamin is a serial entrepreneur with a passion for the
                cannabis industry. He has been involved in the industry since
                2013 and has been a part of multiple successful cannabis
                companies. He has a background in business development,
                marketing, and operations. Benjamin is a graduate of the
                University of Waterloo’s Business program.
              </p>
            </div>
          </div>
          <Image
            className="m-auto"
            src="/hand.svg"
            width={300}
            height={558}
            alt="hand"
          />
        </section>
      </main>

      <Footer />
    </div>
  )
}
