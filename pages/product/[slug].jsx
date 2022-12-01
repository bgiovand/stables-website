import client from "../../client"
import Head from "next/head"
import Image from "next/image"
import Header from "../../src/components/Header"
import Footer from "../../src/components/Footer"
import imageUrlBuilder from "@sanity/image-url"
import { PortableText } from "@portabletext/react"
import { H1, H2, H3 } from "../../src/components/Typography"
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
    title: "White",
    description: "White paper",
    image: "/images/white.png",
  },
  {
    title: "Brown",
    description: "Brown paper",
    image: "/images/brown.png",
  },
  {
    title: "Black",
    description: "Black paper",
    image: "/images/black.png",
  },
]

const Product = ({ product = {} }) => {
  const {
    title = "Missing",
    industryName,
    mainImage,
    description = [],
  } = product
  return (
    <div>
      <Head>
        <title>Stables</title>
        <meta name="description" content="Stables is The Cone Company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <article>
          <div className="mx-auto absolute mt-10 flex border-[red] border-[2px] border-solid text-center left-[50%]">
            <Link
              href="/product"
              className="flex flex-col bg-stablesBrown rounded-full bg-opacity-20 pr-8 pl-12 py-3 ml-5 before:content-['←'] before:translate-x-10 hover:before:translate-x-8 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-2xl before:text-stablesBrown before:font-bold "
            >
              Back to Products
            </Link>
          </div>
          <H1 title={title} />
          <H3 title={industryName} />

          <div className="mx-auto w-8/12 center text-center text-2xl">
            <PortableText value={description} components={ptComponents} />
          </div>

          <section className="flex flex-row items-center justify-center p-4">
            <div className="flex flex-col w-1/2">
              <Image
                src={product.image ? product.image : ""}
                alt={title}
                width={500}
                height={500}
              />
            </div>
            <div className="flex flex-col">
              <ul>
                <li>
                  <h4 className="text-stablesBrown text-sm font-light mt-2 font-mono leading-tight uppercase">
                    Fill Weight Range
                  </h4>
                  <span className="font-mono font-thin ">
                    {`${product.meta.fillWeightRangeLow} ➜ ${product.meta.fillWeightRangeHigh} grams`}
                  </span>
                </li>
                <li>
                  <h4 className="text-stablesBrown text-sm font-light mt-2 font-mono leading-tight uppercase">
                    Burnside Diameter
                  </h4>
                  <span className="font-mono font-thin ">
                    {product.meta.burnerDiameter} mm
                  </span>
                </li>
                <li>
                  <h4 className="text-stablesBrown text-sm font-light mt-2 font-mono leading-tight uppercase">
                    Mouth Diamter
                  </h4>
                  <span className="font-mono font-thin ">
                    {product.meta.mouthDiameter} mm
                  </span>
                </li>
                <li>
                  <h4 className="text-stablesBrown text-sm font-light mt-2 font-mono leading-tight uppercase">
                    Filter Style
                  </h4>
                  <span className="font-mono font-thin ">
                    {product.meta.filterType}
                  </span>
                </li>
                <li>
                  <h4 className="text-stablesBrown text-sm font-light mt-2 font-mono leading-tight uppercase">
                    Length
                  </h4>
                  <span className="font-mono font-thin ">
                    {product.meta.lengthFull}
                  </span>
                </li>
                <li>
                  <h4 className="text-stablesBrown text-sm font-light mt-2 font-mono leading-tight uppercase">
                    Filter Length
                  </h4>
                  <span className="font-mono font-thin ">
                    {product.meta.lengthFilter}
                  </span>
                </li>
                <li>
                  <h4 className="text-stablesBrown text-sm font-light mt-2 font-mono leading-tight uppercase">
                    Pitch
                  </h4>
                  <span className="font-mono font-thin ">
                    {product.meta.pitch}
                  </span>
                </li>
                <li>
                  <h4 className="text-stablesBrown text-sm font-light mt-2 font-mono leading-tight uppercase">
                    Pitch Type
                  </h4>
                  <span className="font-mono capitalize">
                    {product.meta.pitchType}
                  </span>
                </li>
                <li>
                  <h4 className="text-stablesBrown text-sm font-light mt-2 font-mono leading-tight uppercase">
                    Paper Types
                  </h4>
                  <ul className="flex flex-row">
                    {paperTypes.map(({ title, description, image, index }) => (
                      <li key={index} className="center text-center mr-5">
                        <Image
                          src={image}
                          alt={title}
                          width={50}
                          height={50}
                          className="w-[50px] h-[50px] object-contain object-center rounded-full bg-gray-400 border-[3px] border-stablesBrown"
                        />
                        <span>{title}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </section>
        </article>

        <Link href="/product/[slug]" as={`/product/${""}`}>
          prev product
        </Link>

        <Link href="/product/[slug]" as={`/product/${""}`}>
          next product
        </Link>
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
      "meta": {
        fillWeightRangeLow,
        fillWeightRangeHigh,
        burnerDiameter,
        mouthDiameter,
        filterType,
        lengthFull,
        lengthFilter,
        pitch,
        pitchType,
      },
      // paperTypes->{title},
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
