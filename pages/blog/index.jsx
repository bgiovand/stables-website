import client from "../../client"
import { useRouter } from "next/router"
import Link from "next/link"
import groq from "groq"
import Head from "next/head"
import Image from "next/image"
import Header from "../../src/components/Header"
import Footer from "../../src/components/Footer"

const Blog = ({ posts }) => {
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
        <h1>Blogs</h1>
        <ul>
          {posts.length > 0 &&
            posts.map(
              ({ _id, title = "", slug = "", publishedAt= "" }) =>
                slug && (
                  <li key={_id}>
                    <Link href="/blog/[slug]" as={`/blog/${slug.current}`}>
                      <h2 className="text-stablesOrange">{title}</h2>
                      <span className="font-thin"></span>
                    </Link>
                  </li>
                )
            )}
        </ul>
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const posts = await client.fetch(groq`
      *[_type == "post"] | order(publishedAt desc)
    `)
  return {
    props: {
      posts,
    },
  }
}

export default Blog

