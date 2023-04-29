import { deskTool } from "sanity/desk"
import {
  dashboardTool,
  sanityTutorialsWidget,
  projectUsersWidget,
  projectInfoWidget,
} from "@sanity/dashboard"
// import { scheduledPublishing } from "@sanity/scheduled-publishing"


// Import Schema Types
import postType from "schemas/post"
import paperType from "schemas/paper"
import personType from "schemas/person"
import categoryType from "schemas/category"
import productType from "schemas/product"
import blockContent from "schemas/blockContent"
import newsLetter from "schemas/newsLetter"
import siteSettings from "schemas/siteSettings"
import brands from "schemas/brands"
import testimonials from "schemas/testimonials"
import compatibility from "schemas/compatibility"
import values from "schemas/values"
import certifications from "schemas/certifications"

const config = {
  name: "Stables",
  title: "Stables",
  basePath: "/admin",
  projectId: process.env.NEXT_PUBLIC_SANITY_API_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_API_DATASET,
  plugins: [
    deskTool({}),
    dashboardTool({
      widgets: [
        sanityTutorialsWidget(),
        projectInfoWidget(),
        projectUsersWidget(),
      ],
    }),
    // scheduledPublishing(),
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
      brands,
      testimonials,
      compatibility,
      values,
      certifications,
    ],
  },
}

export default config