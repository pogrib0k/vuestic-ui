import type { App } from 'vue'
import { inject as vueInject, getCurrentInstance } from 'vue'

/**
 * Similar to `getCurrentInstance` but for plugins, so we can use inject in plugins.
 */
let currentApp: App | null

export const setCurrentApp = (instance: App | null) => {
  if (instance === null) {
    return
  }
  currentApp = instance
}
export const getCurrentApp = () => {
  return currentApp
}

/** Wrapper around vue inject, so it can be used in plugins */
export const inject = ((key: string, value?: any) => {
  console.log(getCurrentInstance())

  if (getCurrentInstance() !== null) {
    return vueInject(key, value)
  }

  console.log(currentApp, currentApp?._context.provides[key])

  const app = currentApp?._context.provides[key]

  return app
}) as unknown as typeof vueInject
