import { deskTool } from "sanity/desk"

// Import Schema Types
import postType from "schemas/post"
import paperType from "schemas/paper"
import personType from "schemas/person"
import categoryType from "schemas/category"
import productType from "schemas/product"
import blockContent from "schemas/blockContent"

const projectId = process.env.SANITY_API_PROJECT_ID
const dataset = process.env.SANITY_API_DATASET

const config = {
  name: "Stables",
  title: "Stables",
  basePath: "/admin",
  projectId: process.env.SANITY_API_PROJECT_ID || "hwmnpy3d",
  dataset: process.env.SANITY_API_DATASET || "production",
  plugins: [deskTool()],
  schema: {
    types: [
      postType,
      paperType,
      personType,
      categoryType,
      productType,
      blockContent,
    ],
  },
}

export default config