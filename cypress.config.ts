import { defineConfig } from 'cypress'
import { env } from './cypress/support/env';

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1280,
  e2e: {
    env: {
      login: env.login,
      password: env.password,
    },
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {} as Cypress.Browser, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args.push('--incognito')
          return launchOptions
        }
      })

      return config
    },
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.ts',
  },
})