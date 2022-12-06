import client from "../../src/utils/client"
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
        <Image
          alt={value.alt || " "}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit("max").auto("format")}
        />
      )
    },
  },
}

const custom = [
  {
    title: "Wrap",
    image: "/custom-wrap.svg",
  },
  {
    title: "Band",
    image: "/custom-band.svg",
  },
  {
    title: "Filter",
    image: "/custom-filter.svg",
  },
  {
    title: "Watermarking",
    image: "/custom-watermarking.svg",
  },
  {
    title: "Color",
    image: "/colorwheel.svg",
  },
]

const Product = ({ product = {} }) => {
  const {
    _id,
    slug,
    title = "Missing",
    industryName,
    image,
    meta = [
      {
        title: "Fill Weight",
        value: `${product.fillWeightRangeLow}  ➜  ${product.fillWeightRangeHigh} grams`,
      },
      {
        title: "Burner Diameter",
        value: `${product.burnerDiameter} mm`,
      },
      {
        title: "Mouth Diameter",
        value: `${product.mouthDiameter} mm`,
      },
      {
        title: "Filter Type",
        value: `${product.filterType}`,
      },
      {
        title: "Cone Length",
        value: `${product.lengthFull} mm`,
      },
      {
        title: "Filter Length",
        value: `${product.lengthFilter} mm`,
      },
      {
        title: "Pitch",
        value: `${product.pitch}°`,
      },
      {
        title: "Pitch Type",
        value: `${product.pitchType}`,
      },
    ],
    paperType = [
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
    ],
    description = [],
  } = product
  return (
    <div className="bgTexture" key={_id}>
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

          <section className="container flex flex-row items-center justify-center p-4 mx-auto">
            <div className="flex flex-col">
              <Image
                src={image ? image : ""}
                alt={title}
                width={500}
                height={500}
                priority
              />
            </div>
            <div className="flex flex-col">
              <ul>
                {meta.map(({ title, value }, index) => (
                  <li key={index}>
                    <h4 className="text-stablesBrown text-sm font-light mt-2 font-mono tracking-tighter uppercase">
                      {title}
                    </h4>
                    <span className="font-mono font-thin ">{value}</span>
                  </li>
                ))}
                <li>
                  <h4 className="text-stablesBrown text-sm font-light mt-2 font-mono tracking-tighter uppercase">
                    Paper Types
                  </h4>
                  <ul className="flex flex-row">
                    {paperType.map(
                      ({ title, color }, index) => (
                        <li
                          key={index}
                          className="center text-center mr-5 w-1/3"
                        >
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

        <section className="flex flex-col items-center justify-center  py-20">
          <h2 className="text-3xl font-bold text-center text-stablesBrown">
            Related Products
          </h2>
          <div className="flex flex-row flex-wrap justify-center">lorem</div>
        </section>

        <section className="flex flex-col items-center justify-center bg-stablesBrown/20 pb-16 bgTexture">
          <div className="mt-20">
            <H3 title="Customize This Cone" />
            <ul className="flex flex-row justify-center flex-wrap">
              {custom.map(({ title, description, image, color}, index) => (
                <li key={index} className="center text-center mx-5 my-3">
                  <Image
                    src={image}
                    alt={title}
                    width={160}
                    height={160}
                    className="object-contain object-center rounded-full bg-gray-400 border-8 border-stablesBrown/80 mb-2"
                  />
                  <span>{title}</span>
                </li>
              ))}
            </ul>

            <p className="text-center w-2/3 mx-auto my-10 text-2xl text-stablesYellow">
              {
                "We offer various sizes, colors, and designs and can help with the entire process. Let us know how we can assist with your custom cone needs."
              }
            </p>

            <div className="flex flex-row justify-center">
              <Link
                href="/contact"
                className="flex flex-row items-center justify-center px-8 py-3 mt-5 text-2xl text-white bg-stablesOrange rounded-full"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center justify-center bg-stablesBlue bgTexture pb-16">
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
