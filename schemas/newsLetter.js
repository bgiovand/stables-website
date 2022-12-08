import { defineField, defineType } from "sanity"
import { EnvelopeIcon } from "@sanity/icons"

export default defineType({
  title: "Newsletter",
  name: "newsLetter",
  icon: EnvelopeIcon,
  type: "document",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      title: "Release Date",
      name: "releaseDate",
      type: "datetime",
    }),
    defineField({
      title: "Body",
      name: "body",
      type: "blockContent",
    }),
  ],
})
