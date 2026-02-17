
export default {
  basePath: 'https://pani79.github.io/laProfeApp',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
