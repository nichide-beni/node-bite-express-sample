import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const port = 3000

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distPath = path.join(__dirname, 'backend')

app.use(express.static(distPath))

app.get('/api', (req, res) => {
  res.send('Hello Express!!');
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
