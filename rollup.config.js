import sass from 'rollup-plugin-sass';
import typescript from 'rollup-plugin-typescript2';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';

import pkg from './package.json'

export default {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
        strict: false
      }
    ],
    plugins: [
      sass({ insert: true }),
      typescript({ objectHashIgnoreUnknownHack: true }),
        getBabelOutputPlugin({
          presets: ['@babel/preset-env']
        })
    ],
    external: ['react', 'react-dom', 'classnames']
  }