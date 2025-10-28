import fs from 'fs'
import path from 'path'
import ttf2woff from 'ttf2woff'
import ttf2woff2 from 'ttf2woff2'

const fontsDir = path.resolve(process.cwd(), 'src/assets/fonts/Lato')

if (!fs.existsSync(fontsDir)) {
  console.error('Fonts dir not found:', fontsDir)
  process.exit(1)
}

const files = fs.readdirSync(fontsDir).filter((f) => f.endsWith('.ttf'))

for (const file of files) {
  const inPath = path.join(fontsDir, file)
  const base = file.replace(/\.ttf$/i, '')
  const ttf = fs.readFileSync(inPath)

  // woff
  try {
    const woffBuf = Buffer.from(ttf2woff(ttf).buffer)
    fs.writeFileSync(path.join(fontsDir, base + '.woff'), woffBuf)
    console.log('Written', base + '.woff')
  } catch (err) {
    console.error('Failed to write woff for', file, err)
  }

  // woff2
  try {
    const woff2Buf = ttf2woff2(ttf)
    fs.writeFileSync(path.join(fontsDir, base + '.woff2'), woff2Buf)
    console.log('Written', base + '.woff2')
  } catch (err) {
    console.error('Failed to write woff2 for', file, err)
  }
}
