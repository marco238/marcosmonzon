import resolve from 'rollup-plugin-node-resolve';
import common from 'rollup-plugin-commonjs';
import copy from 'rollup-plugin-copy';

export default {
  input: 'lib/app-shell.js',
  output: {
    dir: 'dist/src',
    format: 'esm'
  },
  plugins: [
    common(),
    resolve(),
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
};