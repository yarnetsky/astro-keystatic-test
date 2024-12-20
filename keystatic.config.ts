import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'cloud',
  },
  cloud: {
    project: 'yarnetsky/astro-keystatic-test',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        draft: fields.checkbox({
          label: 'Draft',
          description: 'Set this post as draft to prevent it from being published'
        }),
        pubDate: fields.date({ label: 'Publication date', }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          {
            label: 'Tag',
            itemLabel: props => props.value 
          }
        ),
        description: fields.text({
          label: 'Excerpt',
          multiline: true
        }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'src/assets/images/posts',
              publicPath: '../../assets/images/posts/',
            },
          },
        }),
        heroImage: fields.text({ label: 'Hero Image', }),
      },
    }),
  },
});
