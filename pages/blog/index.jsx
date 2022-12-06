import client from "@/utils/client"
import { useRouter } from "next/router"
import Link from "next/link"
import groq from "groq"
import Head from "next/head"
import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { H1, H2, H3 } from "@/components/Typography"

const Blog = ({ posts }) => {
  const router = useRouter()

  return (
    <div className="bgTexture">
      <Head>
        <title>Stables</title>
        <meta name="description" content="Stables is The Cone Company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="mx-auto">
        {/* <H2 title="Latest Posts" /> */}
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          {posts.length > 0 &&
            posts.map(
              ({
                _id = "",
                title = "",
                slug = "",
                publishedAt = "",
                authorName = "",
                image = "",
                authorImage = "",
              }) =>
                slug && (
                  <Link
                    href="/blog/[slug]"
                    as={`/blog/${slug.current}`}
                    key={_id}
                    className="group bg-stablesBrown/10 rounded-2xl shadow-lg overflow-hidden trasition-all mx-3 sm:mx-0 h-[32rem]"
                  >
                    <Image
                      src={image}
                      alt={title}
                      width={200}
                      height={200}
                      className="object-cover w-full h-1/3 opacity-70 group-hover:opacity-100 transition-all"
                    />
                    <div className="text-center flex flex-col h-2/3 justify-between px-3 py-5">
                      <H3
                        title={title}
                        className="mb-0 p-0 group-hover:text-stablesOrange line-clamp-3 pb-2 text-5xl"
                      />
                      <div className="">
                        {authorImage && (
                          <Image
                            src={authorImage ? authorImage : ""}
                            alt={authorName}
                            width={50}
                            height={50}
                            className="object-cover mx-auto rounded-full bg-stablesBlue border-2 border-stablesBrown flex flex-row "
                          />
                        )}
                        <div className=" ">
                          {authorName && (
                            <div className="font-thin text-lg mb-2">
                              by {authorName}
                            </div>
                          )}

                          <div className="font-thin text-sm text-gray-500">
                            {new Date(publishedAt).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
            )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const posts = await client.fetch(groq`
      *[_type == "post"] | order(publishedAt desc){
        _id,  
        title,
        "authorName": author->name,
        "authorImage": author->image.asset->url,
        publishedAt,
        slug,
        "image": mainImage.asset->url
      }
    `)
  return {
    props: {
      posts,
    },
  }
}

export default Blog
