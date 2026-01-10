export default {
  name: 'project',
  title: 'Portfolio Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'images',
      title: 'Project Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      validation: Rule => Rule.required().min(1).max(10),
      description: 'Upload up to 10 images. First image will be the cover.',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: '2BHK', value: '2bhk' },
          { title: '3BHK', value: '3bhk' },
          { title: 'Villa', value: 'villa' },
          { title: 'Kitchen', value: 'kitchen' },
          { title: 'Wardrobe', value: 'wardrobe' },
        ],
        layout: 'dropdown',
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      options: {
        list: [
          { title: 'Raipur', value: 'Raipur' },
          { title: 'Bilaspur', value: 'Bilaspur' },
          { title: 'Korba', value: 'Korba' },
        ],
        layout: 'dropdown',
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'area',
      title: 'Area (e.g., 1500 sq.ft)',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'style',
      title: 'Design Style',
      type: 'string',
      options: {
        list: [
          { title: 'Modern', value: 'Modern' },
          { title: 'Contemporary', value: 'Contemporary' },
          { title: 'Minimalist', value: 'Minimalist' },
          { title: 'Luxury', value: 'Luxury' },
          { title: 'Classic', value: 'Classic' },
          { title: 'Scandinavian', value: 'Scandinavian' },
          { title: 'Industrial', value: 'Industrial' },
          { title: 'Traditional', value: 'Traditional' },
        ],
        layout: 'dropdown',
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required().max(200),
    },
    {
      name: 'featured',
      title: 'Featured on Homepage?',
      type: 'boolean',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'location',
      media: 'images.0',
    },
  },
}
