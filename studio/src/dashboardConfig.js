export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f368008c614e930588d95db',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-va5412sd',
                  apiId: '613cadb9-00b3-46da-b753-c3cd7148311d'
                },
                {
                  buildHookId: '5f368008e1428a0c7e4ef22a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-zrq3xo3w',
                  apiId: 'ac38ab31-27bd-4b1f-bd05-625ab7bd1a0d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mikeyrayvon/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-zrq3xo3w.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
