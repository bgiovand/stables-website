import client from "../../src/utils/client"
import Head from "next/head"
import Image from "next/image"
import Header from "../../src/components/Header"
import Footer from "../../src/components/Footer"
import imageUrlBuilder from "@sanity/image-url"
import { PortableText } from "@portabletext/react"
import { H1, H2, H3, H4 } from "../../src/components/Typography"
import Link from "next/link"
import ContactForm from "../../src/components/Contactform"

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const custom = [
  // {
  //   title: "Wrap",
  //   image: "/custom-wrap.svg",
  // },
  // {
  //   title: "Band",
  //   image: "/custom-band.svg",
  // },
  {
    title: "Filter",
    image: "/custom-filter.svg",
  },
  {
    title: "Watermarking",
    image: "/custom-watermarking.svg",
  },
  {
    title: "Size",
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
        <title>{`Stables • ${title}`}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <article>
          <H1 title={title} className="pb-2" />
          <H3
            title={` ${industryName} • ${product.lengthFull}/${product.lengthFilter}`}
            className="font-thin text-[2rem]"
          />
          <div className="">
            <Image
              src={image ? image : ""}
              alt={title}
              width={600}
              height={40}
              priority
              className="mx-auto  origin-center p-10  "
            />
          </div>

          <div className="mx-auto w-7/12 center text-center text-2xl font-light leading-relaxed">
            <PortableText value={description} />
          </div>

          <div className="relative my-10 py-10">
            <div className="mx-auto flex absolute text-center left-[50%] transform -translate-x-1/2">
              <Link
                href="/product"
                className="flex flex-col bg-stablesBrown/10 hover:bg-stablesBrown/20 text-stablesBrown rounded-full transition-all before:transition-all bg-opacity-20 pr-6 pl-12 py-3 before:content-['←'] before:translate-x-5 hover:before:translate-x-3 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-2xl before:text-stablesBrown/40 hover:before:text-stablesBrown/80 before:font-bold before:rotate-40"
              >
                Back to Products
              </Link>
            </div>
          </div>

          <section className="flex justify-center my-10 py-10 bg-stablesBlue/90">
            <div className="flex flex-col w-10/12">
              <h2 className="text-[#667e76] text-2xl font-light mt-2 font-mono tracking-tighter uppercase text-center my-10">
                Specifications
              </h2>

              <Image
                src="/conte-test.svg"
                width={600}
                height={100}
                alt=""
                className="flex justify-center mx-auto mb-10"
              />

              <ul className=" grid grid-cols-3 gap-x-10 gap-y-4 ">
                {meta.map(({ title, value }, index) => (
                  <li
                    key={index}
                    className="border-t-[1px] border-[#88ada1] pt-2 pb-6"
                  >
                    <span className="font-mono font-thin text-black">
                      {value}
                    </span>
                    <h4 className="text-[#667e76] text-xs font-light mt-0 font-mono tracking-tighter uppercase">
                      {title}
                    </h4>
                  </li>
                ))}
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
            <H3 title="Customize This Cone" className="text-stablesBlack"/>
            <ul className="flex flex-row justify-center flex-wrap">
              {custom.map(({ title, description, image, color }, index) => (
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

            {/* <div className="flex flex-row justify-center">
              <Link
                href="/contact"
                className="flex flex-row items-center justify-center px-8 py-3 mt-5 text-2xl text-white bg-stablesOrange rounded-full"
              >
                Get in touch
              </Link>
            </div> */}
          </div>
        </section>

        <section className="flex flex-col items-center justify-center bg-stablesBlue bgTexture pb-16">
          <div className="mt-20 text-black/40">
            <H3 title="Ready to order?" className="text-[#365b59]" />
            <p>{`Get in touch today and let's get started!`}</p>
            <ContactForm />
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
