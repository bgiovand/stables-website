import { defineField, defineType } from "sanity"

export default defineType({
  name: "paperType",
  title: "Paper Material",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      const { paperType } = selection
      return Object.assign({}, selection, {
        subtitle: paperType && `by ${paperType}`,
      })
    },
  },
})
