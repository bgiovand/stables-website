import Head from "next/head"
import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import groq from "groq"
import imageUrlBuilder from "@sanity/image-url"
// import { PortableText } from "@portabletext/react"
import client from "@/utils/client"
import { H1 } from "@/components/Typography"
import PortableText from "react-portable-text"
import config from "../../sanity.config"
import { useRouter } from "next/router"



const ptSerializers = {
  h1: (props) => <h1 className="text-4xl text-stablesOrange mb-3" {...props} />,
  h2: (props) => <h2 className="text-3xl text-stablesOrange mb-3" {...props} />,
  h3: (props) => <h3 className="text-2xl text-stablesOrange mb-3" {...props} />,
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
  image: (props) => (
    <figure className="text-base text-gray-200">
      {props && (
        <Image
          alt={props.alt || " "}
          loading="lazy"
          src={imageUrlBuilder(client).image(props).auto("format").url()}
          className="dev"
          width={400}
          height={400}
        />
      )}

      {props.caption && (
        <figcaption className="text-base text-gray-200">
          {props.caption}
        </figcaption>
      )}
    </figure>
  ),
  footnote: (children) => (
    <span className=" text-stablesOrange block dev">{children}</span>
  ),
}

const Post = ({ post = {} }) => {

  

  const router = useRouter()
  

  const {
    title = "Missing title",
    name = "Missing name",
    categories = [],
    authorImage = "",
    mainImage = "",
    // published = new Date(post.publishedAt).toISOString() || "Missing date",
    published = "Missing date",
    publishedAgo = "5 days ago",
    relativePublishedDate = "",
    body = [],
    readTime = "",
    meta = {
      title: title || "Stables",
      description: "Stables is The Cone Company",
      robots: "follow, index",
      url: "https://getstables.com",
      siteName: "Stables",
      author: name || "Stables",
      date: published || "Missing date",
      image: `${"http://localhost:3000"}/api/ogImage?title=${title}&author=${name}&image=${mainImage}`
    },
  } = post

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    description: meta.description,
    author: [
      {
        "@type": "Person",
        name: meta.author,
      },
    ],
    datePublished: "2022-09-14T09:00:00.000Z",
  }

  console.log("base path: " + router.pathname)
  return (
    <main className="bgTexture">
      <Head>
        <title>Stables {title}</title>
        <meta name="description" content="Stables is The Cone Company" />
        <link rel="icon" href="/favicon.ico" />

        <meta name="robots" content={meta.robots} />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`${meta.url}${""}`} />
        <link rel="canonical" href={`${meta.url}${""}`} />
        {/* Open Graph */}
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.siteName} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta name="image" property="og:image" content={meta.image} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@getstablescones" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && meta.author && (
          <>
            <meta property="article:published_time" content={meta.date} />
            <meta
              name="publish_date"
              property="og:publish_date"
              content={meta.date}
            />
            <meta
              name="author"
              property="article:author"
              content={meta.author}
            />
          </>
        )}
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
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

        <div className="flex flex-col w-8/12 mx-auto bg-stablesBlack text-white px-20 py-20 leading-loose font-light text-lg shadow-lg ">
          <PortableText
            content={body}
            serializers={ptSerializers}
            projectId={config.projectId}
            dataset={config.dataset}
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
