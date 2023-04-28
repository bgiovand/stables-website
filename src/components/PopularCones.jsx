import client from "../../src/utils/client"
import Link from "next/link"
import groq from "groq"
import Image from "next/image"
import React from "react"

const PopularCones = () => {
  const [products, setProducts] = React.useState([])
  React.useEffect(() => {
    const fetchData = async () => {
      
      
      const query = groq`*[_type == "product"]{
        _id,
        title,
        slug,
        lengthFull,
        lengthFilter,
        industryName,
        "image": mainImage.asset->url
      }[0...3]`
      const result = await client.fetch(query)
      setProducts(result)
    }
    fetchData()
  }, [])
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-6">
      {products &&
        products.length > 0 &&
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
                className="group flex  rounded-lg shadow-lg bg-stablesBrown/10
                        hover:bg-stablesBrown/20 transition-all
                        hover:shadow-2xl hover:border-stablesOrange/20 border-2 border-stablesBrown/10 cursor-pointer z-50"
              >
                <div>
                  <Link href="/product/[slug]" as={`/product/${slug.current}`}>
                    <h3 className="text-4xl text-stablesOrange group-hover:text-stablesOrange text-center pt-8 pb-2">
                      {title}
                    </h3>
                    <span className="block text-center mx-auto">
                      {industryName + " "}
                      &middot;
                      {" " + lengthFull + "/" + lengthFilter}
                    </span>

                    <div className="flex justify-center w-300 h-300 p-10 py-14">
                      <Image
                        src={image ? image : ""}
                        alt={title}
                        width={500}
                        height={300}
                        className="object-scale-down"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            )
        )}
    </div>
  )
}

export default PopularCones