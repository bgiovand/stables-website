import { defineField, defineType } from "sanity"
import blockContent from "schemas/blockContent"

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      required: true,
    }, 
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      required: true,
    },
    {
      name: "isPrivate",
      title: "Private",
      type: "boolean",
      initialValue: false,
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
    {
      name: "paperTypes",
      title: "Paper Types",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "paperType" },
        },
      ],
      validation: (Rule) => Rule.unique(),
      options: {
        sortable: false,
        disableNew: true,
      },
      initialValue: [],
    },
    {
      name: "fillWeightRangeLow",
      title: "Fill Weight Range Low",
      type: "number",
    },
    {
      name: "fillWeightRangeHigh",
      title: "Fill Weight Range High",
      type: "number",
    },
    {
      name: "SKU",
      title: "SKU",
      type: "string",
    },
    {
      name: "industryName",
      title: "Industry Name",
      type: "string",
    },
    {
      name: "pitchType",
      title: "Pitch Type",
      type: "string",
      options: {
        list: [
          { title: "Standard", value: "standard" },
          { title: "Slim", value: "slim" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      initialValue: "standard",
    },
    {
      name: "pitch",
      title: "Pitch",
      type: "number",
    },
    {
      name: "lengthFull",
      title: "Length",
      type: "number",
    },
    {
      name: "lengthFilter",
      title: "Length Filter",
      type: "number",
    },
    {
      name: "mouthDiameter",
      title: "Mouth Diameter",
      type: "number",
    },
    {
      name: "burnerDiameter",
      title: "Burner Diameter",
      type: "number",
    },
    {
      name: "filterType",
      title: "Filter Type",
      type: "string",
    },
  ],

  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      const { product } = selection
      return Object.assign({}, selection, {
        subtitle: product && `by ${product}`,
      })
    },
  },
})
