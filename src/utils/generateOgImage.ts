import { createCanvas, loadImage, registerFont } from 'canvas'
import fs from 'fs'
import path from 'path'

interface OgImageOptions {
  title: string;
  subtitle?: string;
  imagePath?: string;
  outputPath: string;
}

export async function generateOgImage({
  title,
  subtitle = 'InterLaw - Global Tax Optimization',
  imagePath = './public/images/og-background.jpg',
  outputPath
}: OgImageOptions): Promise<void> {
  // Set up canvas
  const width = 1200
  const height = 630
  const canvas = createCanvas(width, height)
  const ctx = canvas.getContext('2d')

  // Register custom fonts
  registerFont('./public/fonts/Inter-Bold.ttf', { family: 'Inter', weight: 'bold' })
  registerFont('./public/fonts/Inter-Regular.ttf', { family: 'Inter' })

  // Load and draw background image
  const background = await loadImage(imagePath)
  ctx.drawImage(background, 0, 0, width, height)

  // Add gradient overlay
  const gradient = ctx.createLinearGradient(0, 0, 0, height)
  gradient.addColorStop(0, 'rgba(0, 0, 0, 0.7)')
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0.9)')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, width, height)

  // Add golden accent
  const accentGradient = ctx.createLinearGradient(0, height - 5, width, height)
  accentGradient.addColorStop(0, '#F59E0B')
  accentGradient.addColorStop(1, '#FCD34D')
  ctx.fillStyle = accentGradient
  ctx.fillRect(0, height - 5, width, 5)

  // Draw title
  ctx.font = 'bold 64px Inter'
  ctx.fillStyle = '#FFFFFF'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  // Word wrap title
  const words = title.split(' ')
  let line = ''
  const lines = []

  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    const width = ctx.measureText(line + " " + word).width
    if (width < 1000) {
      line += " " + word
    } else {
      lines.push(line)
      line = word
    }
  }
  lines.push(line)

  // Draw wrapped title
  const lineHeight = 80
  const totalHeight = lines.length * lineHeight
  const startY = (height - totalHeight) / 2 - 40

  lines.forEach((line, index) => {
    ctx.fillText(line, width / 2, startY + index * lineHeight)
  })

  // Draw subtitle
  ctx.font = '32px Inter'
  ctx.fillStyle = '#F59E0B'
  ctx.fillText(subtitle, width / 2, startY + totalHeight + 60)

  // Draw logo
  const logo = await loadImage('./public/logo.svg')
  const logoWidth = 200
  const logoHeight = (logoWidth * logo.height) / logo.width
  ctx.drawImage(logo, 50, height - logoHeight - 50, logoWidth, logoHeight)

  // Save image
  const buffer = canvas.toBuffer('image/jpeg', { quality: 0.9 })
  fs.writeFileSync(path.join(process.cwd(), outputPath), buffer)
}

// Example usage:
// generateOgImage({
//   title: 'Save Up to 45% on Your Taxes with Strategic Residency Planning',
//   outputPath: './public/og-images/home.jpg'
// }) 