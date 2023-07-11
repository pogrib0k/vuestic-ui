import type { Plugin } from 'vite'
import { readdir, readFile, writeFile, lstat } from 'fs/promises'
import { existsSync } from 'fs'

type Nothing = null | undefined | void
type TransformFnResult = string | Nothing
type TransformFn = (this: { outDir: string }, content: string, path: string) => TransformFnResult | Promise<TransformFnResult>

export const createDistTransformPlugin = (options: {
  name: string,
  dir?: (outDir: string) => string,
  transform: TransformFn,
}) => {
  let outDir = ''

  const processFiles = async (dir: string) => {
    if (!existsSync(dir)) { return }

    return (await readdir(dir))
      .map(async (entryName) => {
        const currentPath = `${dir}/${entryName}`

        if ((await lstat(currentPath)).isDirectory()) {
          return processFiles(currentPath)
        }

        const content = await readFile(currentPath, 'utf8')

        const result = await options.transform.call({ outDir }, content, currentPath)

        if (!result) { return }

        await writeFile(currentPath, result)
      })
  }

  let error = false

  return (): Plugin => ({
    name: options.name,
    configResolved: (config) => {
      outDir = options.dir?.(config.build.outDir) || config.build.outDir
    },
    buildEnd(error) {
      error ||= error
    },
    closeBundle: async () => {
      if (error) { return }
      processFiles(outDir)
    },
  })
}
