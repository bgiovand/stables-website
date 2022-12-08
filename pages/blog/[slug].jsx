import Head from "next/head"
import Image from "next/image"
import Header from "../../src/components/Header"
import Footer from "../../src/components/Footer"
import groq from "groq"
import imageUrlBuilder from "@sanity/image-url"
// import { PortableText } from "@portabletext/react"
import client from "../../src/utils/client"
import { H1 } from "@/components/Typography"
import PortableText from "react-portable-text"

const Post = ({ post = {} }) => {
 const {
   title = "Missing title",
   name = "Missing name",
   categories = [],
   authorImage = "",
   mainImage = "",
   published = new Date(post.publishedAt).toISOString() || "Missing date",
   publishedAgo = "5 days ago",
   relativePublishedDate = "",
   body = [],
   readTime = "",
 } = post

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <Image
          alt={value.alt || " "}
          loading="lazy"
          src={imageUrlBuilder(client).image(value).auto("format").url()}
          className=""
          width={520}
          height={320}
        />
      )
    },
  },
}

 const ptSerializers = {
   h1: (props) => (
     <h1 className="text-4xl text-stablesOrange mb-3" {...props} />
   ),
   h2: (props) => (
     <h2 className="text-3xl text-stablesOrange mb-3" {...props} />
   ),
   h3: (props) => (
     <h3 className="text-2xl text-stablesOrange mb-3" {...props} />
   ),
   h4: (props) => <h4 className="text-xl text-stablesOrange mb-3" {...props} />,
   h5: (props) => <h5 className="text-lg text-stablesOrange mb-3" {...props} />,
   normal: (props) => (
     <p className="text-base text-gray-200 my-3 block" {...props} />
   ),
   span: (props) => <span className="text-base text-gray-500" {...props} />,
   li: ({ children }) => <li className="color-[red]">{children}</li>,
   ul: (props) => <ul className="text-base text-gray-200" {...props} />,
   ol: (props) => <ol className="text-base text-gray-200" {...props} />,
   link: (props) => (
     <a
       className="text-base text-stablesOrange"
       target="_blank"
       rel="noopener noreferrer"
       {...props}
     />
   ),
   strong: (props) => <strong className="text-base text-gray-200" {...props} />,
   em: (props) => <em className="text-base text-gray-200" {...props} />,
   del: (props) => <del className="text-base text-gray-200" {...props} />,
   code: (props) => <code className="text-base text-gray-200" {...props} />,
   blockquote: (props) => (
     <blockquote className="text-base text-[red]" {...props} />
   ),
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
          {published && (
            <div className="text-sm text-gray-500">{published}</div>
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
            <ul className="flex">
              {categories.map((category) => (
                <li
                  key={category}
                  className="rounded-lg bg-stablesYellow/30 px-2 py-1 mx-1"
                >
                  {category}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex flex-col w-8/12 mx-auto bg-stablesBlack text-white px-20 py-20 leading-loose font-light text-lg shadow-lg h-screen">
          {/* <PortableText value={body} components={ptComponents} />
           */}
          <PortableText
            content={body}
            serializers={ptSerializers}
            imageOptions={{ w: 320, h: 240, fit: "max" }}
            components={ptComponents}
            projectId="hwmnpy3d"
            dataset="production"
          />
        </div>
      </article>

      <Footer />
      <Image
        src={mainImage ? mainImage : ""}
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
