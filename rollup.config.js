import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";

const { NODE_ENV } = process.env;
const fileName = NODE_ENV === "production" ? "./lib/prod.js" : "./lib/dev.js";

export default {
  input: "./src/HelloWorld.tsx",
  output: {
    file: fileName,
    format: "cjs"
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
    }),
    babel({
      exclude: "node_modules/**",
      extensions: [".js", ".ts", ".tsx"]
    }),
    resolve({
      extensions: [".js", ".ts", ".tsx"]
    }),
    commonjs()
  ],
  external: ["react"]
};
