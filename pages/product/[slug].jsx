import client from "../../client"
import Head from "next/head"
import Image from "next/image"
import Header from "../../src/components/Header"
import Footer from "../../src/components/Footer"
import imageUrlBuilder from "@sanity/image-url"
import { PortableText } from "@portabletext/react"
import { H1, H2, H3, H4 } from "../../src/components/Typography"
import Link from "next/link"

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || " "}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit("max").auto("format")}
        />
      )
    },
  },
}

const paperTypes = [
  {
    title: "Refined\nWhite\n(Ultrathin)",
    description: "White paper",
    image: "/images/white.png",
    color: "#E2E3DE",
  },
  {
    title: "White\nHemp",
    description: "Brown paper",
    image: "/images/brown.png",
    color: "#FFFFFF",
  },
  {
    title: "Natural\nBrown",
    description: "Black paper",
    image: "/images/black.png",
    color: "#776D5B",
  },
]

const Product = ({ product = {} }) => {
  const {
    _id,
    slug,
    title = "Missing",
    industryName,
    image,
    meta = {
      fillWeightRangeLow: product.fillWeightRangeLow || "Missing",
      fillWeightRangeHigh: product.fillWeightRangeHigh || 0,
      burnerDiameter: product.burnerDiameter || 0,
      mouthDiameter: product.mouthDiameter || 0,
      filterType: product.filterType || "",
      lengthFull: product.lengthFull || 0,
      lengthFilter: product.lengthFilter || 0,
      pitch: product.pitch || 0,
      pitchType: product.pitchType || "",
    },
    description = [],
  } = product
  return (
    <div className="bgTexture">
      <Head>
        <title>Stables</title>
        <meta name="description" content="Stables is The Cone Company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <article>
          <H1 title={title} />
          <H3 title={industryName} />
          <div className="block h-20">
            <div className="mx-auto flex absolute text-center left-[50%] transform -translate-x-1/2">
              <Link
                href="/product"
                className="flex flex-col bg-stablesBrown/10 hover:bg-stablesBrown/20 text-stablesBrown rounded-full transition-all before:transition-all bg-opacity-20 pr-6 pl-12 py-3 before:content-['←'] before:translate-x-5 hover:before:translate-x-3 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-2xl before:text-stablesBrown/40 hover:before:text-stablesBrown/80 before:font-bold before:rotate-45"
              >
                Back to Products
              </Link>
            </div>
          </div>
          <div className="mx-auto w-8/12 center text-center text-2xl">
            <PortableText value={description} components={ptComponents} />
          </div>

          <section className="flex flex-row items-center justify-center p-4">
            <div className="flex flex-col w-1/2">
              <Image
                src={image ? image : ""}
                alt={title}
                width={500}
                height={500}
              />
            </div>
            <div className="flex flex-col">
              <ul>
                <li>
                  <h4 className="text-stablesBrown text-sm font-light mt-2 font-mono tracking-tighter uppercase">
                    Fill Weight Range
                  </h4>
                  <span className="font-mono font-thin ">
                    {`${meta.fillWeightRangeLow} ➜ ${meta.fillWeightRangeHigh} grams`}
                  </span>
                </li>
                <li>
                  <h4 className="text-stablesBrown text-sm font-light mt-2 font-mono tracking-tighter uppercase">
                    Burnside Diameter
                  </h4>
                  <span className="font-mono font-thin ">
                    {meta.burnerDiameter} mm
                  </span>
                </li>
                <li>
                  <h4 className="text-stablesBrown text-sm font-light mt-2 font-mono tracking-tighter uppercase">
                    Mouth Diamter
                  </h4>
                  <span className="font-mono font-thin ">
                    {meta.mouthDiameter} mm
                  </span>
                </li>
                <li>
                  <h4 className="text-stablesBrown text-sm font-light mt-2 font-mono tracking-tighter uppercase">
                    Filter Style
                  </h4>
                  <span className="font-mono font-thin ">
                    {meta.filterType}
                  </span>
                </li>
                <li>
                  <h4 className="text-stablesBrown text-sm font-light mt-2 font-mono tracking-tighter uppercase">
                    Length
                  </h4>
                  <span className="font-mono font-thin ">
                    {meta.lengthFull}
                  </span>
                </li>
                <li>
                  <h4 className="text-stablesBrown text-sm font-light mt-2 font-mono tracking-tighter uppercase">
                    Filter Length
                  </h4>
                  <span className="font-mono font-thin ">
                    {meta.lengthFilter}
                  </span>
                </li>
                <li>
                  <h4 className="text-stablesBrown text-sm font-light mt-2 font-mono tracking-tighter uppercase">
                    Pitch
                  </h4>
                  <span className="font-mono font-thin ">{meta.pitch}</span>
                </li>
                <li>
                  <h4 className="text-stablesBrown text-sm font-light mt-2 font-mono tracking-tighter uppercase">
                    Pitch Type
                  </h4>
                  <span className="font-mono capitalize">{meta.pitchType}</span>
                </li>
                <li>
                  <h4 className="text-stablesBrown text-sm font-light mt-2 font-mono tracking-tighter uppercase">
                    Paper Types
                  </h4>
                  <ul className="flex flex-row">
                    {paperTypes.map(
                      ({ title, description, image, color, index }) => (
                        <li
                          key={index}
                          className="center text-center mr-5 w-2/12"
                        >
                          {/* <Image
                          src={image}
                          alt={title}
                          width={50}
                          height={50}
                          className="w-[50px] h-[50px] object-contain object-center rounded-full bg-gray-400 border-[3px] border-stablesBrown"
                        /> */}
                          <div
                            className={`w-[50px] h-[50px] object-contain object-center rounded-full bgTexture border-[3px] border-stablesBrown/90 mx-auto`}
                            style={{
                              backgroundColor: color, // becuse i had to
                            }}
                          ></div>
                          <span className="font-light font-sm text-gray-300">
                            {title}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </li>
              </ul>
            </div>
          </section>
        </article>

        <section className="flex relative my-10">
          <div className="flex flex-row w-1/3 mx-auto">
            <div className="flex flex-col relative mx-auto">
              <Link
                href="/product/[slug]"
                as={`/product/${""}`}
                className="flex flex-col bg-stablesBrown/10 hover:bg-stablesBrown/20 text-stablesBrown rounded-full transition-all before:transition-all bg-opacity-20 pr-6 pl-12 py-3 before:content-['←'] before:translate-x-5 hover:before:translate-x-3 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-2xl before:text-stablesBrown/40 hover:before:text-stablesBrown/80 before:font-bold before:rotate-0"
              >
                Previous
              </Link>
            </div>
            <div className="flex flex-col relative mx-auto">
              <Link
                href="/product/[slug]"
                as={`/product/${""}`}
                className="flex flex-col bg-stablesBrown/10 hover:bg-stablesBrown/20 text-stablesBrown rounded-full transition-all before:transition-all bg-opacity-20 pr-6 pl-12 py-3 before:content-['←'] before:translate-x-5 hover:before:translate-x-3 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-2xl before:text-stablesBrown/40 hover:before:text-stablesBrown/80 before:font-bold before:rotate-180"
              >
                Next
              </Link>
            </div>
          </div>
        </section>
        <br />
        <section className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-center text-stablesBrown">
            Related Products
          </h2>
          <div className="flex flex-row flex-wrap justify-center"></div>
        </section>

        <section className="flex flex-col items-center justify-center">
          <div className="mt-20">
            <H3 title="Customize This Cone" />
            <ul className="flex flex-row justify-center">
              {[...Array(3)].map((e, i) => (
                <li key={i} className="center text-center mx-5">
                  s
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="flex flex-col items-center justify-center bg-stablesBlue bgTexture my-20 pb-16">
          <div className="mt-20">
            <H3 title="Ready to order?" />
            <H4 title="Get in touch today and let's get started!" />
            <div className="flex flex-row justify-center">
              <Link
                href="/contact"
                className="flex flex-row items-center justify-center px-8 py-3 mt-5 text-2xl text-white bg-stablesOrange rounded-full"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "product" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const product = await client.fetch(
    `
    *[_type == "product" && slug.current == $slug][0]{
      _id,
      slug,
      title,
      industryName,
      "image": mainImage.asset->url,
      description,
      fillWeightRangeLow,
      fillWeightRangeHigh,
      burnerDiameter,
      mouthDiameter,
      filterType,
      lengthFull,
      lengthFilter,
      pitch,
      pitchType,
      paperTypes->{title},
    }
  `,
    { slug, meta: {} }
  )
  return {
    props: {
      product,
    },
  }
}

export default Product
