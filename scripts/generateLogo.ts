import { writeFileSync } from 'fs'
import path from 'path'

function generateLogo() {
  const width = 800
  const height = 200

  // Create SVG with both variants
  const variants = [
    { name: 'logo.svg', bg: true },
    { name: 'logo-transparent.svg', bg: false }
  ]

  for (const variant of variants) {
    const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Gradient for text, globe, and separator -->
    <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#F59E0B" />
      <stop offset="100%" style="stop-color:#EAB308" />
    </linearGradient>
    
    <!-- Glow filters with improved settings -->
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
      <feComposite in="SourceGraphic" operator="over" />
    </filter>

    <!-- Globe icon path -->
    <symbol id="globe" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    </symbol>
  </defs>

  ${variant.bg ? `<rect width="${width}" height="${height}" fill="black"/>` : ''}
  
  <!-- Globe icon with gradient and glow -->
  <g transform="translate(20, ${height/2 - 40}) scale(1.5)" filter="url(#glow)">
    <use href="#globe" fill="url(#textGradient)" />
  </g>

  <!-- INTER text with gradient and glow -->
  <g filter="url(#glow)">
    <text x="80" y="${height/2}" 
      font-family="Inter" 
      font-size="120" 
      font-weight="bold" 
      fill="url(#textGradient)"
      dominant-baseline="middle"
      style="paint-order: stroke fill">
      <tspan stroke="url(#textGradient)" stroke-width="2">INTER</tspan>
    </text>
  </g>

  <!-- LAW text with white color and glow -->
  <g filter="url(#glow)">
    <text x="410" y="${height/2}" 
      font-family="Inter" 
      font-size="120" 
      font-weight="bold" 
      fill="white"
      dominant-baseline="middle"
      style="paint-order: stroke fill">
      <tspan stroke="white" stroke-width="2">LAW</tspan>
    </text>
  </g>

  <!-- Separator line with gradient and glow -->
  <g filter="url(#glow)">
    <line x1="370" y1="${height/2 - 40}" x2="370" y2="${height/2 + 40}" 
      stroke="url(#textGradient)" 
      stroke-width="3"/>
  </g>
</svg>`

    // Save the variant
    writeFileSync(path.join(__dirname, `../public/images/${variant.name}`), svg)
    console.log(`Generated ${variant.name}`)
  }
}

generateLogo() 