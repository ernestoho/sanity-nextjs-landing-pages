export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5ec13ba52723aae829a5e473',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-1jeagfa5',
                  apiId: 'a936d37d-0ca6-45bb-b80d-b9bb6fa21b46'
                },
                {
                  buildHookId: '5ec13ba558e878f5304bb398',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-pyj1ye9b',
                  apiId: '509558ba-d056-4d4c-bb0f-23aef0dae010'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ernestoho/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-pyj1ye9b.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
