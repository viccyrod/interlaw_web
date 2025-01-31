const fs = require('fs')
const path = require('path')
const { createCanvas, loadImage, registerFont } = require('canvas')

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, '../public/images')
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true })
}

async function generateOgImage(
  title = 'Global Tax Optimization Experts',
  subtitle = 'Strategic Residency Planning',
  outputPath = 'public/images/og-default.png'
) {
  // Canvas setup with Twitter card dimensions
  const width = 1200
  const height = 630
  const canvas = createCanvas(width, height)
  const ctx = canvas.getContext('2d')

  // Register custom font
  registerFont(path.join(__dirname, '../public/fonts/Inter_18pt-Bold.ttf'), {
    family: 'Inter',
    weight: 'bold'
  })

  // Background gradient (matching our dark theme)
  const gradient = ctx.createLinearGradient(0, 0, 0, height)
  gradient.addColorStop(0, '#000000')
  gradient.addColorStop(1, '#0C0A09') // warm black
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, width, height)

  // Add subtle grid pattern
  ctx.strokeStyle = 'rgba(245, 158, 11, 0.1)' // amber-500 with low opacity
  ctx.lineWidth = 1
  for (let i = 0; i < width; i += 40) {
    ctx.beginPath()
    ctx.moveTo(i, 0)
    ctx.lineTo(i, height)
    ctx.stroke()
  }
  for (let i = 0; i < height; i += 40) {
    ctx.beginPath()
    ctx.moveTo(0, i)
    ctx.lineTo(width, i)
    ctx.stroke()
  }

  // Add glow effect
  ctx.shadowColor = '#F59E0B'
  ctx.shadowBlur = 30
  ctx.fillStyle = '#F59E0B'
  ctx.beginPath()
  ctx.arc(100, height/2, 20, 0, Math.PI * 2)
  ctx.fill()
  ctx.shadowBlur = 0

  // Draw logo
  try {
    const logo = await loadImage(path.join(__dirname, '../public/images/logo-transparent.svg'))
    ctx.drawImage(logo, 60, 60, 240, 60)
  } catch (error) {
    console.warn('Logo not found, skipping...')
  }

  // Add gradient text effect
  const textGradient = ctx.createLinearGradient(0, height/2 - 60, 0, height/2 + 60)
  textGradient.addColorStop(0, '#F59E0B') // amber-500
  textGradient.addColorStop(1, '#EAB308') // yellow-500

  // Draw main title
  ctx.font = 'bold 64px Inter'
  ctx.fillStyle = textGradient
  ctx.textBaseline = 'middle'
  
  // Word wrap the title
  const words = title.split(' ')
  let line = ''
  let lines = []
  let y = height/2 - 40
  
  for (let word of words) {
    const testLine = line + word + ' '
    const metrics = ctx.measureText(testLine)
    if (metrics.width > width - 120 && line !== '') {
      lines.push(line)
      line = word + ' '
    } else {
      line = testLine
    }
  }
  lines.push(line)

  // Draw each line
  lines.forEach((line, i) => {
    ctx.fillText(line.trim(), 60, y + (i * 80))
  })

  // Draw subtitle
  ctx.font = 'bold 32px Inter'
  ctx.fillStyle = '#FFFFFF'
  ctx.fillText(subtitle, 60, height - 80)

  // Add decorative elements
  ctx.strokeStyle = 'rgba(245, 158, 11, 0.3)'
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(60, height - 120)
  ctx.lineTo(width - 60, height - 120)
  ctx.stroke()

  // Save the image
  const buffer = canvas.toBuffer('image/png')
  fs.writeFileSync(path.join(__dirname, '..', outputPath), buffer)
  console.log(`Generated OG image: ${outputPath}`)
}

// Generate default OG image
generateOgImage().catch(console.error)

// Generate additional OG images for different sections
const sections = [
  {
    title: 'Tax Optimization Strategies',
    subtitle: 'Save Up To 45% On Your Taxes Legally',
    output: 'public/images/og-tax.png'
  },
  {
    title: 'Global Residency Programs',
    subtitle: 'Strategic Immigration Solutions',
    output: 'public/images/og-residency.png'
  },
  {
    title: 'Free Tax Strategy Session',
    subtitle: 'Expert Consultation Worth $500',
    output: 'public/images/og-consultation.png'
  }
]

sections.forEach(section => {
  generateOgImage(section.title, section.subtitle, section.output).catch(console.error)
}) 