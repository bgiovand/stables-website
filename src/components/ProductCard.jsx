import React from "react"
import Link from "next/link"
import Image from "next/image"
import client from "../../src/utils/client"
import groq from "groq"


export default function ProductCard({ product }) {

    const {
        _id,
        slug = "",
        title = "",
        lengthFull = "",
        lengthFilter = "",
        image = "",
        industryName = "",
    } = product
    

    return (
      <div
        key={_id}
        className="group flex flex-col justify-center rounded-lg shadow-lg bg-stablesBrown/10
                        hover:bg-stablesBrown/20 transition-all
                        hover:shadow-2xl hover:border-stablesOrange/20 border-2 border-stablesBrown/10"
      >
        <div>
          <Link href="/product/[slug]" as={`/product/${slug}`}>
            <h3 className="text-4xl text-stablesOrange group-hover:text-stablesOrange text-center p-5">
              {title}
            </h3>
            <span className="block text-center mx-auto">
              {industryName + " "}
              &middot;
              {" " + lengthFull + "/" + lengthFilter}
            </span>

            {/* <div className="p-0 flex justify-between align-baseline">
                              <div className=" text-lg text-stablesBrown/100 font-light">
                                <span className="text-stablesBrown/100 font-light ml-2">
                                 
                                </span>
                              </div>
                            </div> */}

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