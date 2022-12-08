import { defineField, defineType } from "sanity"
import { Group } from "three"

export default defineType({
  name: "testimonials",
  title: "Testimonials",
  type: "document",
  fields: [
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      description: "e.g. I love this product!",
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "object",
      fields: [
        defineField({
          name: "name",
          title: "Name",
          type: "string",
          description: "e.g. John Doe",
        }),
        defineField({
          name: "company",
          title: "Company",
          type: "reference",
          to: [
            {
              type: "brands",
            },
          ],
        }),
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          description: "e.g. CEO, Founder, etc.",
        }),
        defineField({
          name: "image",
          title: "Profile Image",
          type: "image",
          description: "Square image, 300x300px",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "author.name",
      subtitle: "author.company.title",
      media: "author.image",
    },
  },
})
