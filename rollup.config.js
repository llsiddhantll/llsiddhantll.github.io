import SveltePlugin from 'rollup-plugin-svelte'
import ServePlugin from 'rollup-plugin-serve'
import LiveReloadPlugin from 'rollup-plugin-livereload'
import { terser as TerserPlugin } from 'rollup-plugin-terser'
import CommonJSPlugin from 'rollup-plugin-commonjs'
import NodeResolvePlugin from 'rollup-plugin-node-resolve'
import JSONPlugin from 'rollup-plugin-json'
import SVGPlugin from 'rollup-plugin-svg'
import HTMLPlugin from 'rollup-plugin-bundle-html'
import AliasPlugin from 'rollup-plugin-alias'

const dev = process.env.ROLLUP_WATCH

module.exports = {
  input: 'src/index.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'website',
    file: 'public/bundle.js'
  },

  plugins: [
    SveltePlugin({
      dev,
      css: css => {
        css.write('public/bundle.css')
      }
    }),
    CommonJSPlugin(),
    NodeResolvePlugin({
      browser: true,
      dedupe: importee =>
        importee === 'svelte' || importee.startsWith('svelte/')
    }),
    AliasPlugin({
      resolve: ['.js'],
      entries: [
        { find: 'components', replacement: 'src/components' },
        { find: 'pages', replacement: 'src/pages' },
        { find: 'data', replacement: 'src/data' },
        { find: 'assets', replacement: 'src/assets' }
      ]
    }),
    JSONPlugin(),
    SVGPlugin(),
    HTMLPlugin({
      template: '<html><head></head><body></body></html>',
      // or html code: '<html><head></head><body></body></html>'
      dest: 'public',
      filename: 'index.html'
    }),

    !dev && TerserPlugin(),

    dev &&
      ServePlugin({
        contentBase: 'public',
        port: 3000
      }),
    dev && LiveReloadPlugin('public')
  ]
}
