import Head from "next/head"
import Image from "next/image"
import Header from "../../src/components/Header"
import Footer from "../../src/components/Footer"
import groq from "groq"
import imageUrlBuilder from "@sanity/image-url"
import { PortableText } from "@portabletext/react"
import client from "../../src/utils/client"
import { H1 } from "@/components/Typography"

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}



const Post = ({ post = {} }) => {
  const {
    title = "Missing title",
    name = "Missing name",
    categories,
    authorImage,
    mainImage = "",
    publishedAt,
    body = [],
  } = post

const ptComponents = {
  
}

  return (
    <main className="bgTexture">
      <Head>
        <title>Stables</title>
        <meta name="description" content="Stables is The Cone Company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <article style={{}} className={``}>
        <div className="flex flex-col items-center justify-center w-8/12 mx-auto py-40">
          
            <H1 title={title} />
            {publishedAt && (
              <div className="text-sm text-gray-500">{publishedAt}</div>
            )}

            {authorImage && (
              <div>
                <Image
                  src={authorImage}
                  alt={`${name}'s picture`}
                  width={50}
                  height={50}
                />
              </div>
            )}
            <span>{name}</span>

            {categories && (
              <ul>
                Posted in
                {categories.map((category) => (
                  <li key={category}>{category}</li>
                ))}
              </ul>
            )}
          
        </div>

        <div className="flex flex-col w-8/12 mx-auto bg-stablesBlack text-white px-20 py-20 leading-loose font-light text-lg shadow-lg h-screen">
          <PortableText value={body} components={ptComponents} />
        </div>
      </article>

      <Footer />
      <Image
        src={mainImage}
        alt={title}
        width={1000}
        height={400}
        className="flex absolute top-0 w-full -z-10 opacity-30"
      />
    </main>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "mainImage": mainImage.asset->url,
  "categories": categories[]->title,
  "authorImage": author->image.asset->url,
  publishedAt,
  body
}`
export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const post = await client.fetch(query, { slug })
  return {
    props: {
      post,
    },
  }
}
export default Post
