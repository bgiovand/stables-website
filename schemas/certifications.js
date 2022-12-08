import { defineField, defineType } from "sanity"
import { Group } from "three"

export default defineType({
    name: "certifications",
    title: "Certifications",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            description: "e.g. ISO 9001:2015",
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            description: "e.g. We are certified by the International Organization for Standardization (ISO) for our quality management system.",
        }),
        defineField({
            name: "type",
            title: "Type",
            type: "string",
            options: {
                list: [
                    { title: "ISO", value: "ISO" },
                    { title: "GMP", value: "GMP" },
                    { title: "Other", value: "Other" },
                ],
                layout: "radio",
            },
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
            subtitle: "type",
            media: "image",
        },
    },
})
