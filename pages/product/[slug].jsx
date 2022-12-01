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

                <PortableText value={description} components={ptComponents} />
              </div>
            </div>
            <div className="flex flex-col">
              <ul>
                <li>
                  <h4 className="text-stablesOrange text-1xl font-semibold mt-2">
                    Fill Weight Range
                  </h4>
                  {product.meta.fillWeightRangeLow} &#8594;{" "}
                  {product.meta.fillWeightRangeHigh} grams
                </li>
                <li>
                  <h4 className="text-stablesOrange text-1xl font-semibold mt-2">
                    Burnside Diameter
                  </h4>
                  {product.meta.burnerDiameter} mm
                </li>
                <li>
                  <h4 className="text-stablesOrange text-1xl font-semibold mt-2">
                    Mouth Diamter
                  </h4>
                  {product.meta.mouthDiameter} mm
                </li>
                <li>
                  <h4 className="text-stablesOrange text-1xl font-semibold mt-2">
                    Filter Style
                  </h4>
                  {product.meta.filterType}
                </li>
                <li>
                  <h4 className="text-stablesOrange text-1xl font-semibold mt-2">
                    Length
                  </h4>
                  {product.meta.lengthFull}
                </li>
                <li>
                  <h4 className="text-stablesOrange text-1xl font-semibold mt-2">
                    Filter Length
                  </h4>
                  {product.meta.lengthFilter}
                </li>
                <li>
                  <h4 className="text-stablesOrange text-1xl font-semibold mt-2">
                    Pitch
                  </h4>
                  {product.meta.pitch}
                </li>
                <li>
                  <h4 className="text-stablesOrange text-1xl font-semibold mt-2">
                    Pitch Type
                  </h4>
                  {product.meta.pitchType}
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
