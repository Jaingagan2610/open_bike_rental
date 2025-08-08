import { config } from 'dotenv'
import express from 'express'
import { dirname, join } from 'path'
import serveStatic from 'serve-static'
import { fileURLToPath } from 'url'

config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()

app.set('trust proxy', true)
app.disable('x-powered-by')

// Serve static files from the build folder
app.use(serveStatic(join(__dirname, 'build')))

// Catch-all route for SPA (React/Vite) to serve index.html
app.get('/', (_, res) => {
    res.sendFile(join(__dirname, 'build', 'index.html'))
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`)
})
