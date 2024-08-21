import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({
          name: {
            label: 'Title',
            validation: {
              isRequired: true,
            },
          },
        }),
        description: fields.text({
          label: 'Description',
          validation: {
            isRequired: true,
          },
        }),
        pubDate: fields.date({
          label: 'Publish Date',
          defaultValue: {
            kind: 'today',
          },
          validation: {
            isRequired: true,
          },
        }),
        heroImage: fields.image({
          label: 'Image',
          directory: 'src/assets/images/posts',
          publicPath: '@assets/images/posts/',
        }),
        content: fields.markdoc({
          label: 'Content',
          extension: 'md',
        }),
      },
    }),
  },
});
