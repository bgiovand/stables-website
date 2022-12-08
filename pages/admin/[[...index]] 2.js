import Head from "next/head"
import { NextStudio } from "next-sanity/studio"
import { NextStudioHead } from "next-sanity/studio/head"
import { defineConfig } from "sanity"

import config from "../../sanity.config"

export default function StudioPage() {
  return (
    <>
      <Head>
        <NextStudioHead />
      </Head>
      <NextStudio config={defineConfig(config)} />
    </>
  )
}
