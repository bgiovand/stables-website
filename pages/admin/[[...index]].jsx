import { NextStudio } from "next-sanity/studio"
import { defineConfig } from "sanity"

import config from "/sanity.config"

console.log(config)

export default function StudioPage() {
  return (
    <>
      <NextStudio config={defineConfig(config)} />
    </>
  )
}