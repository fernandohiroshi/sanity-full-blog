// To run the admin studio locally with pnpm:
// pnpm sanity dev --config sanity.admin.config.ts

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {ptBRLocale} from '@sanity/locale-pt-br'

export default defineConfig({
  name: 'admin',
  title: 'blog (admin)',

  projectId: 'v0cenb9f',
  dataset: 'production',

  plugins: [
    // Sidebar padrão com todos os tipos de documento disponíveis
    structureTool(),
    // Vision habilitado para você poder fazer queries e debugar
    visionTool({defaultApiVersion: 'v2025-12-12'}),
    ptBRLocale(),
  ],

  schema: {
    types: schemaTypes,
  },
})
