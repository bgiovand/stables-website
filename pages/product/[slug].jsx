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
          <Link href="/product">Back to Products</Link>
          <H1 title={title} />
          <H3 title={industryName} />

          <div className="mx-auto w-8/12 center text-center text-2xl">
            <PortableText value={description} components={ptComponents} />
          </div>

          <section className="flex flex-row items-center justify-center p-4">
            {/* Link to go back to products page */}

            <div className="flex flex-col w-1/2">
              <Image
                src={product.image ? product.image : ""}
                alt={title}
                width={500}
                height={500}
              />
              <div className="flex flex-col">
                {product.paperTypes && (
                  <ul>
                    Paper Types
                    {product.paperTypes.map((paper) => (
                      <li key={paper}>{paper}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <ul>
                <li>
                  <h4 className="text-stablesBrown text-sm font-light mt-2 font-mono leading-tight uppercase">
                    Fill Weight Range
                  </h4>
                  <span className="font-mono font-thin ">
                    {product.meta.fillWeightRangeLow} &#8594;{" "}
                    {product.meta.fillWeightRangeHigh} grams
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
      id,
      slug,
      title,
      industryName,
      "image": mainImage.asset->url,
      description,
      paperTypes -> {
        paperType
      },
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
      }
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
