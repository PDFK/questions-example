import uglify from 'rollup-plugin-uglify'
import json from 'rollup-plugin-json'
import babel from 'rollup-plugin-babel'
import pkg from './package.json'

const config = {
    input: 'src/index.js',
    // external: Object.keys(pkg.peerDependencies || {}).concat('react-dom'),
    output: {
        format: 'umd',
        name: 'questions',
        globals: {
            react: "React"
        }
    },
    plugins: [
        json(),
        babel({
            exclude: "node_modules/**"
        }),
        uglify.uglify()
    ],
}
export default config
