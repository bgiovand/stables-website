import client from "@/utils/client"
import Head from "next/head"
import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import imageUrlBuilder from "@sanity/image-url"
import { PortableText } from "@portabletext/react"
import { H1, H2, H3, H4 } from "@/components/Typography"
import Link from "next/link"
import ContactForm from "@/components/Contactform"
import Compatible from "@/components/Compatible"

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
    image: "/size.svg",
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
      // {
      //   title: "Pitch",
      //   value: `${product.pitch}°`,
      // },
      {
        title: "Pitch Type",
        value: `${product.pitchType}`,
      },
      {
        title: "SKU",
        value: `${product.sku}`,
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

          <div className="relative my-10 py-10 pb-20">
            <div className="mx-auto flex absolute text-center left-[50%] transform -translate-x-1/2 ">
              <Link
                href="/product"
                className="flex flex-col bg-stablesBlue/10 hover:bg-stablesBlue/20 text-stablesBlue rounded-full transition-all before:transition-all bg-opacity-20 pr-6 pl-12 py-3 before:content-['←'] before:translate-x-5 hover:before:translate-x-3 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-2xl before:text-stablesBlue/40 hover:before:text-stablesBlue/80 before:font-bold before:rotate-40"
              >
                Back to Products
              </Link>
            </div>
          </div>

          <section className="flex justify-center my-10 py-10 pb-20 mb-0 bg-stablesBlue/80">
            <div className="flex flex-col w-10/12">
              <h2 className="text-[#667e76] text-2xl font-light mt-2 font-mono tracking-tighter uppercase text-center my-10">
                Specifications
              </h2>

              {slug && (
                <Image
                  src={`/spec/${slug.current}.svg`}
                  width={600}
                  height={100}
                  alt=""
                  className="flex justify-center mx-auto mb-10"
                />
              )}

              {/* <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 349.5126 70.02777"
                  className="flex w-4/5 font-mono stroke-opacity-50 stroke-[#8eb7bd] mx-auto mb-10"
                >
                  <g id="Layer_1-2" data-name="Layer 1">
                    <g>
                      <g>
                        <line
                          class="cls-7"
                          x1="55.83741"
                          y1="6.56226"
                          x2="292.82401"
                          y2="6.56226"
                        />
                        <rect
                          class="cls-3"
                          x="55.51239"
                          y="4.44976"
                          width=".64999"
                          height="4.22501"
                        />
                        <rect
                          class="cls-3"
                          x="292.499"
                          y="4.44976"
                          width=".64999"
                          height="4.22501"
                        />
                      </g>
                      <g>
                        <line
                          class="cls-7"
                          x1="55.83741"
                          y1="62.71555"
                          x2="128.41455"
                          y2="62.71555"
                        />
                        <rect
                          class="cls-3"
                          x="55.51239"
                          y="60.60306"
                          width=".64999"
                          height="4.22499"
                        />
                        <rect
                          class="cls-3"
                          x="128.08954"
                          y="60.60306"
                          width=".64999"
                          height="4.22499"
                        />
                      </g>
                      <g>
                        <line
                          class="cls-7"
                          x1="42.51653"
                          y1="42.81882"
                          x2="42.51653"
                          y2="27.62727"
                        />
                        <rect
                          class="cls-3"
                          x="40.40404"
                          y="42.49382"
                          width="4.22501"
                          height=".64999"
                        />
                        <rect
                          class="cls-3"
                          x="40.40404"
                          y="27.30226"
                          width="4.22501"
                          height=".65001"
                        />
                      </g>
                      <g>
                        <line
                          class="cls-7"
                          x1="322.59284"
                          y1="50.20505"
                          x2="322.59284"
                          y2="20.24103"
                        />
                        <rect
                          class="cls-3"
                          x="320.48035"
                          y="49.88005"
                          width="4.22498"
                          height=".64999"
                        />
                        <rect
                          class="cls-3"
                          x="320.48035"
                          y="19.91604"
                          width="4.22498"
                          height=".64999"
                        />
                      </g>
                      <g>
                        <g>
                          <path
                            class="cls-2"
                            d="m290.84775,19.90927c2.95172,9.98712,2.9516,20.64417,0,30.63138-53.22338-1.75822-107.25527-3.53691-161.71409-5.32895-.4734-6.59694-.4734-13.37663,0-19.97348,54.45852-1.79196,108.49077-3.57086,161.71409-5.32895Z"
                          />
                          <path
                            class="cls-1"
                            d="m129.13367,25.23822c-.47339,6.59692-.47342,13.37656,0,19.97348-24.41227-.80135-48.91047-1.60533-73.46145-2.41148-.71537-5.02397-.71537-10.12645,0-15.15051,24.55102-.80609,49.04914-1.6102,73.46145-2.41148Z"
                          />
                        </g>
                        <g>
                          <path
                            class="cls-6"
                            d="m129.13367,25.23822c-24.41227.80136-48.91047,1.60526-73.46145,2.41148-.71537,5.02393-.71537,10.12646,0,15.15051,24.55102.80627,49.04914,1.61008,73.46145,2.41148,54.45879,1.79221,108.49074,3.57086,161.71409,5.32895,2.95166-9.98726,2.9516-20.64418,0-30.63138-53.22338,1.75801-107.25527,3.53697-161.71409,5.32895Z"
                          />
                          <path
                            class="cls-6"
                            d="m129.13437,25.22822c-.00021.00328-.00045.00685-.0007.00999-.47339,6.59692-.47342,13.37656,0,19.97348"
                          />
                        </g>
                      </g>
                      <text
                        className="text-stablesBlue text-xs"
                        transform="translate(161.73063 9.77258)"
                      >
                        <tspan x="0" y="0">
                          {product.lengthFull + "mm"}
                        </tspan>
                      </text>
                      <text
                        className="text-stablesBlue text-xs"
                        transform="translate(79.455 65.92642)"
                      >
                        <tspan x="0" y="0">
                          {product.lengthFilter + "mm"}
                        </tspan>
                      </text>
                      <text
                        className="text-stablesBlue text-xs"
                        transform="translate(2.22569 38.43391)"
                      >
                        <tspan x="0" y="0">
                          {product.mouthDiameter + "mm"}
                        </tspan>
                      </text>
                      <text
                        className="text-stablesBlue text-xs"
                        transform="translate(306.36668 38.43343)"
                      >
                        <tspan x="0" y="0">
                          {product.burnerDiameter + "mm"}
                        </tspan>
                      </text>
                      <line
                        class="cls-5"
                        x1="35.10956"
                        y1="35.22304"
                        x2="42.51654"
                        y2="35.22304"
                      />
                    </g>
                  </g>
                </svg>
              </div> */}

              <ul className=" grid grid-cols-3 gap-x-10 gap-y-4 m-0 ">
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

          {/* <section className="flex relative my-10">
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
        </section> */}

          <section className="flex flex-col items-center justify-center bg-stablesBrown/20 pb-16 bgTexture">
            <div className="mt-20">
              <H3 title="Customize This Cone" className="text-stablesBlack" />
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
              <h3 className="text-[#365b59] text-5xl text-center font-normal mb-5 ">
                {`Ready to Order?`}
              </h3>

              <p>{`Get in touch today and let's get started!`}</p>
              <ContactForm />
            </div>
          </section>

          <Compatible />
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
  const { slug = "" } = context.params
  const product = await client.fetch(
    `
    *[_type == "product" && slug.current == $slug][0]{
      _id,
      slug,
      title,
      sku,
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
