import { defineField, defineType } from "sanity"

export default defineType({
  name: "brands",
  title: "Brands",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
    }),
  ],
})
