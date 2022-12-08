import { deskTool } from "sanity/desk"

// Import Schema Types
import postType from "schemas/post"
import paperType from "schemas/paper"
import personType from "schemas/person"
import categoryType from "schemas/category"
import productType from "schemas/product"

const projectId = process.env.SANITY_API_PROJECT_ID
const dataset = process.env.SANITY_API_DATASET

const config = {
  name: "Stables",
  title: "Stables",
  basePath: "/admin",
  projectId,
  dataset,
  plugins: [deskTool()],
  schema: {
    types: [
      postType,
      paperType,
      personType,
      categoryType,
      productType,
    ],
  },
}

export default config