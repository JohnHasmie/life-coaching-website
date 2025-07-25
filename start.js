import { createServer } from 'http'
import { readFileSync, existsSync } from 'fs'
import { join, extname } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const PORT = process.env.PORT || 3000
const DIST_DIR = join(__dirname, 'dist')

// MIME types
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'application/font-woff',
  '.woff2': 'application/font-woff2',
  '.ttf': 'application/font-ttf',
  '.eot': 'application/vnd.ms-fontobject'
}

const server = createServer((req, res) => {
  let filePath = req.url === '/' ? '/index.html' : req.url
  filePath = join(DIST_DIR, filePath)

  // Check if file exists
  if (!existsSync(filePath)) {
    // Try index.html for SPA routing
    filePath = join(DIST_DIR, 'index.html')
  }

  if (!existsSync(filePath)) {
    res.writeHead(404, { 'Content-Type': 'text/html' })
    res.end('<h1>404 Not Found</h1>')
    return
  }

  try {
    const content = readFileSync(filePath)
    const ext = extname(filePath)
    const contentType = mimeTypes[ext] || 'application/octet-stream'

    res.writeHead(200, { 'Content-Type': contentType })
    res.end(content)
  } catch (error) {
    console.error('Error serving file:', error)
    res.writeHead(500, { 'Content-Type': 'text/html' })
    res.end('<h1>500 Internal Server Error</h1>')
  }
})

server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Life Coaching Website running on port ${PORT}`)
  console.log(`📱 Local: http://localhost:${PORT}`)
  console.log(`🌐 Network: http://0.0.0.0:${PORT}`)
})

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully')
  server.close(() => {
    console.log('Process terminated')
  })
}) 