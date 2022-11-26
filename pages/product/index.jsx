import client from "../../client"
import { useRouter } from "next/router"
import Link from "next/link"
import groq from "groq"
import Head from "next/head"
import Image from "next/image"
import Header from "../../src/components/Header"
import Footer from "../../src/components/Footer"
import { H1, H2, H3 } from "../../src/components/Typography"

const Product = ({ products }) => {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Stables</title>
        <meta name="description" content="Stables is The Cone Company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div className="">
          <div className="mx-auto max-w-7xl">
            <H1 title="Products" />

            <div className="flex flex-wrap justify-center">
              {products.length > 0 &&
                products.map(
                  ({
                    _id,
                    title = "",
                    slug = "",
                    lengthFull = "",
                    lengthFilter = "",
                    image = "",
                  }) =>
                    _id && (
                      <div
                        key={_id}
                        className="p-4 bg-stablesBlue rounded-md flex items-center justify-center m-10"
                      >
                        <div>
                          <Link
                            href="/product/[slug]"
                            as={`/product/${slug.current}`}
                          >
                            <h3 className="mt-4 text-2xl text-stablesOrange">
                              {title}
                            </h3>
                            <div className="mt-1 text-lg text-stablesBlue font-light">
                              <span className="">{lengthFull}</span>
                              <span className="">{lengthFilter}</span>
                            </div>
                            <div className="block bg-stablesBlue">
                              <Image
                                src={image ? image : ""}
                                alt={title}
                                width={300}
                                height={300}
                              />
                            </div>
                          </Link>
                        </div>
                      </div>
                    )
                )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const products = await client.fetch(groq`
      *[_type == "product"] | order(publishedAt desc){
        _id,
        title,
        slug,
        lengthFull,
        lengthFilter,
        "image": mainImage.asset->url
      }
    `)
  return {
    props: {
      products,
    },
  }
}

export default Product
