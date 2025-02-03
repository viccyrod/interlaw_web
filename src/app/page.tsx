import { Hero } from '@/components/sections/Hero'
import { Mission } from '@/components/sections/Mission'
import { Features } from '@/components/sections/Features'
import { Services } from '@/components/sections/Services'
import { Comparison } from '@/components/sections/Comparison'
import { CTA } from '@/components/sections/CTA'
import { About } from '@/components/sections/About'

export default function Home() {
  return (
    <main>
      <Hero />
      <Mission />
      <About />
      <Features />
      <Services />
      <Comparison />
      <CTA />
    </main>
  )
}