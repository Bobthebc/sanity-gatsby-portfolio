export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '61bca81c3d475b3f518dc3f1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-zmkqs6e8',
                  apiId: 'b72b1d24-0146-4a9f-a34d-beb05c7f6e2c'
                },
                {
                  buildHookId: '61bca81c9480cd3851d84a84',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-dqpoh8oh',
                  apiId: '9c8e14bd-17fa-43dd-90a1-989f83b668dd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Bobthebc/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-dqpoh8oh.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
