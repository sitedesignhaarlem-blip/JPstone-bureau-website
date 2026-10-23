// Serves the built static pages on http://localhost:4321 for the checks (npm run preview).
// `astro preview` does not work with the Vercel adapter. The portal pages need Vercel (`vercel dev`).
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const root = fs.existsSync('dist/client') ? 'dist/client' : 'dist';
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.jpg': 'image/jpeg', '.png': 'image/png', '.mp4': 'video/mp4', '.webm': 'video/webm', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.ico': 'image/x-icon', '.json': 'application/json', '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8' };
http.createServer((req, res) => {
  let file = path.join(root, decodeURIComponent(req.url.split('?')[0]));
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
  if (!fs.existsSync(file)) { res.statusCode = 404; file = path.join(root, '404.html'); }
  res.setHeader('Content-Type', types[path.extname(file)] ?? 'application/octet-stream');
  fs.createReadStream(file).pipe(res);
}).listen(4321, () => console.log(`Serving ${root} on http://localhost:4321`));
