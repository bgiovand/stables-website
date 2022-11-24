import client from "../../client"
import { useRouter } from "next/router"
import Link from "next/link"
import groq from "groq"
import Head from "next/head"
import Image from "next/image"
import Header from "../../src/components/Header"
import Footer from "../../src/components/Footer"

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
        <div className="bg-white">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
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
                        className="aspect-w-1 aspect-h-1 w-full rounded-lg bg-stablesBlue xl:aspect-w-7 xl:aspect-h-8 border-1 border-stablesOrange border-2"
                      >
                        <Link
                          href="/product/[slug]"
                          as={`/product/${slug.current}`}
                        >
                          <h3 className="mt-4 text-sm text-gray-700">
                            {title}
                          </h3>
                          <p className="mt-1 text-lg font-medium text-gray-900">
                            {lengthFull} / {lengthFilter}
                          </p>
                          <div className="w-full h-48 bg-stablesOrange">
                          <Image
                            src={image ? image : ""}
                            alt={title}
                            width={40}
                            height={40}
                          />
                          </div>
                        </Link>
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
