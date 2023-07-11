import { removeEmptyFiles } from './../plugins/remove-empty-files';
import vue from '@vitejs/plugin-vue';
import { dirname, join } from "pathe"
import { defineViteConfig } from "../utils/define-vite-config"
import { readPackage } from "../utils/read-package"
import { LibraryFormat } from "../types/vite"
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import { removeSideEffectedChunks } from '../plugins/remove-side-effected-chunks';
import { appendComponentCss } from '../plugins/append-component-css';
import { componentVBindFix } from '../plugins/component-v-bind-fix';
import { camelCase } from '../utils/camel-case';

type BuildFormat = 'iife' | 'es' | 'cjs' | 'esm-node'

const normalizeFormat = (format: BuildFormat | 'esm' | 'esm-node'): LibraryFormat => {
  if (format === 'esm' || format === 'esm-node') {
    return 'es'
  }

  return format
}

export const createViteConfig = (options: {
  format: BuildFormat | 'esm' | 'esm-node',
  cwd: string,
  outDir?: string,
  entry?: string,
  name?: string,
  plugins?: {
    componentVBindFix?: boolean,
  }
}) => {
  const { cwd, format } = options

  const packageJson = readPackage(join(cwd, 'package.json'))

  const dependencies = [
    ...Object.keys(packageJson.dependencies || {}), 
    ...Object.keys(packageJson.peerDependencies || {})
  ]

  const isESM = ['es', 'esm-node'].includes(format)
  const isNode = format === 'esm-node'

  const entry = options.entry || 'src/main.ts'
  const outDir = options.outDir || 'dist'

  const config = defineViteConfig({
    root: cwd,

    // TODO: user should be able to override this
    resolve: {
      alias: {
        '@': join(cwd, dirname(entry)),
        '~/': join(cwd, dirname(entry)),
      },
    },

    build: {
      lib: {
        entry: join(cwd, entry),
        fileName: () => 'main.js',
        formats: [normalizeFormat(format)],
        name: camelCase(options.name ?? packageJson.name),
      },

      outDir: join(cwd, outDir, format),
      cssCodeSplit: isESM,
      sourcemap: true,

      rollupOptions: {
        external: dependencies,

        ...(isNode ? {
          // TODO: check if we need it
          // input: join(cwd, options.entry),

          output: {
            // sourcemap: true,
            // dir: join(cwd, options.outDir, format),
            format: 'esm',
            entryFileNames: '[name].mjs',
            chunkFileNames: '[name].mjs',
            assetFileNames: '[name].[ext]',
          },
        } : {})
      },

      minify: 'terser' as const,
      terserOptions: {
        // https://stackoverflow.com/questions/57720816/rails-webpacker-terser-keep-fnames
    
        // disable mangling class names (for vue class component)
        keep_classnames: true,
    
        // disable mangling functions names
        keep_fnames: true,
      },
    },

    plugins: [
      vue({
        isProduction: true,
        exclude: [/\.md$/, /\.spec\.ts$/, /\.spec\.disabled$/],
      })
    ]
  })


  if (isESM) {
    config.plugins.push(chunkSplitPlugin({ 
      strategy: 'unbundle',
    }))
    if (!isNode) {
      config.plugins.push(appendComponentCss())
    }
    config.plugins.push(removeSideEffectedChunks())
    config.plugins.push(removeEmptyFiles())
    if (options.plugins?.componentVBindFix || true) { config.plugins.push(componentVBindFix()) }
  }

  return config
}