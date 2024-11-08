import { Hero } from '@/components/sections/Hero'
import { Mission } from '@/components/sections/Mission'
import { Features } from '@/components/sections/Features'
import { Services } from '@/components/sections/Services'
import { Comparison } from '@/components/sections/Comparison'
import { CTA } from '@/components/sections/CTA'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Mission />
      <Features />
      <Services />
      <Comparison />
      <CTA />
      <Footer />
    </main>
  )
}