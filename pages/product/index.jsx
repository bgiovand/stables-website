import client from "../../src/utils/client"
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
    <div className="bgTexture">
      <Head>
        <title>Stables</title>
        <meta name="description" content="Stables is The Cone Company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div className="container mx-auto">
          <div className="mx-auto">
            <H1 title="Products" />
            <H3 title="Cones" />

            <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3">
              {products.length > 0 &&
                products.map(
                  ({
                    _id,
                    title = "",
                    slug = "",
                    lengthFull = "",
                    lengthFilter = "",
                    image = "",
                    industryName = "",
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
                                <span className="">
                                  {lengthFull + "/" + lengthFilter}
                                </span>
                                <span className="text-stablesBrown/100 font-light ml-2">
                                  {industryName}
                                </span>
                              </div>
                            </div>

                            <div className="flex justify-center w-300 h-300 p-10 py-20">
                              <Image
                                src={image ? image : ""}
                                alt={title}
                                width={500}
                                height={300}
                                className="object-scale-down"
                              />
                            </div>
                            <div className="flex justify-center pb-5">
                              {/* Hemp */}
                              <span className="bg-[#ffffff] rounded-full w-[10px] h-[10px] block mx-1 has-tooltip ">
                                &nbsp;
                                <span class="tooltip rounded shadow-lg p-1 bg-gray-100 text-red-500 -mt-8">
                                  Some Nice Tooltip Text
                                </span>
                              </span>
                              <span className="bg-[#b0b1a2] rounded-full w-[10px] h-[10px] block mx-1 has-tooltip">
                                &nbsp;
                                <span class="tooltip rounded shadow-lg p-1 bg-gray-100 text-red-500 -mt-8">
                                  Some Nice Tooltip Text
                                </span>
                              </span>
                              <span className="bg-[#cacbbf] rounded-full w-[10px] h-[10px] block mx-1 has-tooltip">
                                &nbsp;
                                <span class="tooltip rounded shadow-lg p-1 bg-gray-100 text-red-500 -mt-8">
                                  Some Nice Tooltip Text
                                </span>
                              </span>
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
        industryName,
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
