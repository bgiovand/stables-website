import client from "../../client"
import Head from "next/head"
import Image from "next/image"
import Header from "../../src/components/Header"
import Footer from "../../src/components/Footer"
import imageUrlBuilder from "@sanity/image-url"
import { PortableText } from "@portabletext/react"

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

const Product = ({ product = {} }) => {
  const {
    title = "Missing",
    industryName,
    mainImage,
    description = [],
    paperTypes,
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
          <div>
            <h2>Cone &middot; {industryName}</h2>
            <h1 className="text-stablesOrange text-7xl font-ultralight text-left m-8">
              {title}
            </h1>
          </div>
          <section className="container flex flex-wrap justify-between items-center mx-auto">
            <div className="flex flex-col">
              <ul>
                <li>
                  <h4 className="text-stablesOrange text-1xl font-semibold mt-2">
                    Fill Weight Range
                  </h4>
                  {product.fillWeightRangeLow} &#8594;{" "}
                  {product.fillWeightRangeHigh} grams
                </li>
                <li>
                  <h4 className="text-stablesOrange text-1xl font-semibold mt-2">
                    Burnside Diameter
                  </h4>
                  {product.burnerDiameter} mm
                </li>
                <li>
                  <h4 className="text-stablesOrange text-1xl font-semibold mt-2">
                    Mouth Diamter
                  </h4>
                  {product.mouthDiameter} mm
                </li>
                <li>
                  <h4 className="text-stablesOrange text-1xl font-semibold mt-2">
                    Filter Style
                  </h4>
                  {product.filterType}
                </li>
                <li>
                  <h4 className="text-stablesOrange text-1xl font-semibold mt-2">
                    Length
                  </h4>
                  {product.lengthFull}
                </li>
                <li>
                  <h4 className="text-stablesOrange text-1xl font-semibold mt-2">
                    Filter Length
                  </h4>
                  {product.lengthFilter}
                </li>
                <li>
                  <h4 className="text-stablesOrange text-1xl font-semibold mt-2">
                    Pitch
                  </h4>
                  {product.pitch}
                </li>
                <li>
                  <h4 className="text-stablesOrange text-1xl font-semibold mt-2">
                    Pitch Type
                  </h4>
                  {product.pitchType}
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              {/* {paperTypes && (
                <ul>
                  Paper Types
                  {paperTypes.map((paper) => (
                    <li key={paper}>{paper}</li>
                  ))}
                </ul>
              )} */}

              <PortableText value={description} components={ptComponents} />
            </div>
            <div className="flex flex-col">
              <Image
                src={urlFor(product.mainImage)
                  .width(320)
                  .height(240)
                  .fit("max")
                  .auto("format")}
                width={320}
                height={240}
                alt="sd"
              />
            </div>
          </section>
        </article>
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
    *[_type == "product" && slug.current == $slug][0]
  `,
    { slug }
  )
  return {
    props: {
      product,
    },
  }
}

export default Product
