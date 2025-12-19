import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'v0cenb9f',
    dataset: 'production',
  },
  deployment: {
    autoUpdates: true,
  },
})
