import { defineField, defineType } from "sanity"
import { CogIcon } from "@sanity/icons"

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: CogIcon,
  fields: [
    {
      name: "title",
      title: "Site Title",
      type: "string",
    },
    {
      name: "description",
      title: "Site Description",
      type: "text",
    },
  ],
})
