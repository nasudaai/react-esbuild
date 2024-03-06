import * as esbuild from 'esbuild';

let ctx = await esbuild.context({
  entryPoints: ['src/main.jsx'],
  bundle: true,
  outdir: 'dev',
  jsx: 'automatic',
});

await ctx.watch()

let { host, port } = await ctx.serve({
  servedir: 'dev',
})

console.log(`http://localhost:${port}`)
