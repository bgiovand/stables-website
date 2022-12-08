import { defineField, defineType } from "sanity"

export default defineType({
  name: "compatibility",
  title: "Compatibility",
  type: "document",
  fields: [
    defineField({
      name: "Brand",
      title: "Brand",
      type: "reference",
      to: [
        {
          type: "brands",
        },
      ],
    }),
    defineField({
      name: "Equipment",
      title: "Equipment",
      type: "object",
      fields: [
        defineField({
          name: "EquipmentName",
          title: "Equipment",
          type: "string",
        }),
        defineField({
          name: "EquipmentModel",
          title: "Model",
          type: "string",
        }),
      ],
    }),
  ],
})
