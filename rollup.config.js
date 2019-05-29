import uglify from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'
import json from 'rollup-plugin-json'
// import postcss from 'rollup-plugin-postcss'
// import postcssModules from 'postcss-modules'

//const cssExportMap = {}

const config = {
    input: 'src/App.js',
    external: ['react'],
    plugins: [
        json(),
        babel({
            exclude: "node_modules/**"
        }),
        uglify()
    ],
    output: {
        format: 'umd',
        name: 'Questions',
        globals: {
            react: "React"
        }
    }
}
export default config
