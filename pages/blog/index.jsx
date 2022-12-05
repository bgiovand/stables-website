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
        <div className="container mx-auto grid md:grid-cols-3 gap-10 ">
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
                    className="w-full h-full group bg-stablesBrown/10 rounded-lg"
                  >
                    <div className="">
                      <Image
                        src={image}
                        alt={title}
                        width={200}
                        height={200}
                        className="object-cover w-full h-64 opacity-50 group-hover:opacity-100 transition-all"
                      />
                      <H3 title={title} />
                      <div className="font-thin">{new Date(publishedAt).toLocaleString() }</div>
                      {authorName && (
                        <div className="font-thin">{authorName}</div>
                      )}
                      {authorImage && (
                        <Image
                          src={authorImage ? authorImage : ""}
                          alt={authorName}
                          width={50}
                          height={50}
                          className="object-cover w-12 h-12 rounded-full"
                        />
                      )}
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
