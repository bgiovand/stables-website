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
            <H2 title="Cones" />

            <div className="grid grid-cols-1 gap-8 py-8 px-6 md:grid-cols-3 lg:grid-cols-4">
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
                        className="group flex flex-col justify-center rounded-lg shadow-lg bg-stablesBrown/10
                        hover:bg-stablesBrown/20 transition-all
                        hover:shadow-2xl hover:border-stablesOrange/20 border-2 border-stablesBrown/10"
                      >
                        <div>
                          <Link
                            href="/product/[slug]"
                            as={`/product/${slug.current}`}
                          >
                            <div className="p-4 flex justify-between align-baseline">
                              <h3 className="text-2xl text-white/80 group-hover:text-stablesOrange">
                                {title}
                              </h3>
                              <div className=" text-lg text-stablesBrown/100 font-light">
                                <span className="">{lengthFull + "/" +lengthFilter}</span>
                              </div>
                            </div>

                            <div className="flex justify-center">
                              <Image
                                src={image ? image : ""}
                                alt={title}
                                width={300}
                                height={300}
                                className="rotate-45 leading-0 group-hover:scale-105 ease-in-out duration-200  transition-all"
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
