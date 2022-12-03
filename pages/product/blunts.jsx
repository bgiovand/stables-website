import Head from "next/head"
import Image from "next/image"
import Header from "../../src/components/Header"
import Footer from "../../src/components/Footer"
import { H1, H2, H3 } from "../../src/components/Typography"
import Link from "next/link"
import { inherit } from "tailwindcss/colors"

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
        <div
          className="absolute top-[120px] right-[250px]  text-white shadow-md   border-[1px] border-[red] p-5 px-6 rotate-12 rounded-lg font-mono z-50 uppercase font-black bg-[red] bg-opacity-60 leading-tight bgTexture"
          style={{ textShadow: "0 0 10px #000" }}
        >
          Under Development
        </div>
        <section className="w-8/12 mx-auto mb-20">
          <div>
            <p className="text-3xl my-20 text-center">
              Finally, a blunt line with premium features to enhance your
              smoking experience.
            </p>
          </div>
          <div>
            <H3 title="Terpene Infused" />
            <p className="text-center w-6/12 mx-auto">
              Terpene infused paper for a more complex flavour profile when
              you’re smoking.{" "}
              <Link href="/contact">Reach out to our sales team</Link>
              to learn more.
            </p>
          </div>
          <div className="mt-20">
            <H3 title="Premium Paper Weights" />
            <ul className="flex flex-row justify-center flex-wrap">
              {[...Array(3)].map((e, i) => (
                <li key={i} className="center text-center mx-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 108 108"
                    className="w-[120px] h-[120px] rounded-full bg-gray-400 border-4 border-stablesBrown mb-2"
                    width="100%"
                  >
                    <g
                      style={{
                        transformOrigin: "center",
                        transform: `scale(1.${i * 2})`,
                      }}
                    >
                      <path
                        d="M34.9697,45.1899c.5794-2.3646,1.6726-4.1538,3.2814-5.3682,1.6084-1.2145,3.6753-1.8219,6.2009-1.8219h19.9772c2.5251,0,4.5925,.6074,6.2009,1.8219,1.6084,1.2145,2.6938,3.0036,3.2573,5.3682l4.9221,20.1463c.7718,3.1688,.4785,5.6698-.881,7.5038-1.3594,1.8336-3.5826,2.7503-6.6711,2.7503H37.6239c-3.0881,0-5.3122-.9168-6.6711-2.7503-1.3594-1.834-1.6528-4.335-.8805-7.5038l4.8976-20.1463Zm15.2246-8.5893c-1.2869-.7723-2.3163-1.7978-3.0886-3.0765-.7718-1.2787-1.1579-2.6899-1.1579-4.234,0-1.56,.3861-2.9881,1.1579-4.2828,.7723-1.2947,1.8016-2.3284,3.0886-3.1002,1.2865-.7723,2.702-1.1584,4.2465-1.1584s2.9592,.3861,4.2461,1.1584c1.2869,.7718,2.3202,1.8055,3.1007,3.1002,.78,1.2947,1.17,2.7227,1.17,4.2828,0,1.5441-.3861,2.9553-1.1579,4.234-.7723,1.2787-1.806,2.3042-3.1007,3.0765-1.2947,.7718-2.7141,1.1579-4.2582,1.1579s-2.96-.3861-4.2465-1.1579Zm.1928-3.0403h8.1069v10.9056h-8.1069v-10.9056Zm5.5736-2.7866c.4344-.4262,.6515-.9207,.6515-1.4837,0-.5794-.217-1.0859-.6515-1.5203-.4344-.434-.9409-.6515-1.5199-.6515-.5634,0-1.0617,.2174-1.4962,.6515-.434,.4344-.6515,.9409-.6515,1.5203,0,.5466,.2174,1.0371,.6515,1.4716,.4344,.4344,.9327,.6515,1.4962,.6515,.579,0,1.0855-.2131,1.5199-.6394Z"
                        fill="#603813"
                      />
                      <text
                        transform="translate(40.1698 64.4442)"
                        fill="currentColor"
                        font-family="inherit"
                        font-size="22"
                        font-weight="500"
                        className=""
                      >
                        <tspan x="0" y="0" letter-spacing="">
                          {i + 1}0
                        </tspan>
                      </text>
                    </g>
                  </svg>

                  <span>{i + 1}0 gsm</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-20">
            <H3 title="Premium Paper Material" />
            <ul className="flex flex-row justify-center flex-wrap">
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
