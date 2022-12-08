import { deskTool } from "sanity/desk"

// Import Schema Types
import postType from "schemas/post"
import paperType from "schemas/paper"
import personType from "schemas/person"
import categoryType from "schemas/category"
import productType from "schemas/product"
import blockContent from "schemas/blockContent"
import newsLetter from "schemas/newsLetter"
import { CogIcon } from "@sanity/icons"
import siteSettings from "schemas/siteSettings"

const config = {
  name: "Stables",
  title: "Stables",
  basePath: "/admin",
  projectId: process.env.SANITY_API_PROJECT_ID || "hwmnpy3d",
  dataset: process.env.SANITY_API_DATASET || "production",
  plugins: [
    deskTool({
    }),
  ],
  schema: {
    types: [
      postType,
      paperType,
      personType,
      categoryType,
      productType,
      blockContent,
      newsLetter,
      siteSettings,
    ],
  },
}

export default config