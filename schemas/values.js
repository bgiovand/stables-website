import { defineField, defineType } from "sanity"
import { Group } from "three"

export default defineType({
    name: "values",
    title: "Values",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            description: "e.g. Creativity",
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            description: "e.g. We believe in the power of creativity to solve problems.",
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            description: "e.g. 300x300px",
        }),
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "description",
            media: "image",
        },
    },
})