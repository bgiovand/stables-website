// client.js
import { createClient } from "@sanity/client"

const client = createClient({
  projectId: process.env.SANITY_API_PROJECT_ID || "hwmnpy3d",
  dataset: process.env.SANITY_API_DATASET || "production",
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: "2022-11-24", // use a UTC date string
})

export default client