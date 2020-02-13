import { createDefaultConfig } from '@open-wc/building-rollup';
import babel from 'rollup-plugin-babel';
import deepmerge from 'deepmerge';
import progress from 'rollup-plugin-progress';
import resolve from 'rollup-plugin-node-resolve';
import copy from 'rollup-plugin-copy';

const modeConfig = env => require(`./rollup/rollup.${env}.js`)({env});

const basicConfig = createDefaultConfig({ input: 'lib/app-shell.js' });

module.exports = ({ env }) => {
  return deepmerge(basicConfig, {
    input: 'lib/app-shell.js',
    output: {
      dir: 'dist/src',
      format: 'esm'
    },
    plugins: [
      babel({
        exclude: 'node_modules/**'
      }),
      resolve(),
      progress({
        clearLine: false // default: true
      }),
      copy({
        targets: [
          { 
            src: 'index.html',
            dest: 'dist'
          },
          {
            src: 'assets',
            dest: 'dist'
          }
        ]
      })
    ]
  },
  modeConfig(env.mode)
)};