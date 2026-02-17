
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://pani79.github.io/laProfeApp/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/laProfeApp"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 470, hash: 'ee5b818642fa2fd492a441cd0c7c7d50350b6ca5af6bdfb9898139af2a6bd1b7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 983, hash: 'cfe4e2a5bef58535179f206a868e765d192a7a700ece2d85b60438cd5da8348a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21584, hash: 'd6b09f553769be092b8b751dfce9ae7c65b91d774c7743f02ce65e09ffdc64ce', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
