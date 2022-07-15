import serve from "rollup-plugin-serve";
import liverelorad from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import babel from "rollup-plugin-babel";

// 开发环境需要的插件
const developmentPlugins = () => {
	if (process.env.ENV !== "development") return [];

	return [
		serve({
			contentBase: "",
			host: "localhost",
			port: 3001,
			historyApiFallback: true,
		}),
		liverelorad(),
	];
};

export default {
	input: "./src/mian.js",
	output: [
		{
			file: "dist/tag.esm.js",
			format: "esm",
			exports: "default",
			name: "CustomTag",
		},
		{
			file: "dist/tag.umd.js",
			format: "umd",
			exports: "default",
			name: "CustomTag",
		},
	],
	plugins: [
		commonjs(),
		nodeResolve(),
		terser({
			compress: {
				// drop_console: true,
				ecma: 5,
			},
		}),
		babel({
			exclude: "node_modules/**",
		}),
		...developmentPlugins(),
	],
};
