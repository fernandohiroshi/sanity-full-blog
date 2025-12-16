import React from 'react'
import {Home, FileText, Megaphone, Users} from 'lucide-react'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'
import {ptBRLocale} from '@sanity/locale-pt-br'

const siteUrl = process.env.SANITY_STUDIO_SITE_URL || 'http://localhost:3000'

const GoToSitePane: React.FC = () =>
  React.createElement(
    'div',
    {style: {padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem'}},
    React.createElement(
      'a',
      {
        href: siteUrl,
        target: '_blank',
        rel: 'noreferrer',
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.5rem 1rem',
          borderRadius: '999px',
          background: '#2563eb',
          color: 'white',
          fontWeight: 500,
          textDecoration: 'none',
          width: 'fit-content',
          maxWidth: '260px',
        },
      },
      'Meu site',
    ),
  )

export default defineConfig({
  name: 'default',
  title: 'blog',

  projectId: 'v0cenb9f',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Conteúdo')
          .items([
            S.listItem()
              .title('Utilidades')
              .icon(Home)
              .child(S.component(GoToSitePane).title('Meu site')),
            S.documentTypeListItem('post').title('Postagens').icon(FileText),
            S.documentTypeListItem('hero').title('Anúncio').icon(Megaphone),
            S.documentTypeListItem('partner').title('Parceiros').icon(Users),
          ]),
    }),
    ptBRLocale(),
  ],

  studio: {
    components: {
      navbar: () => null,
    },
  },

  schema: {
    types: schemaTypes,
  },
})
