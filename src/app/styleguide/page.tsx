'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Check, Shield, Globe2, TrendingUp } from 'lucide-react'

export default function StyleGuide() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12">InterLaw Style Guide</h1>

      {/* Colors */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Brand Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Primary Colors */}
          <div>
            <div className="h-24 bg-amber-500 rounded-lg mb-2"></div>
            <p className="text-sm">Primary Amber</p>
            <p className="text-xs text-gray-400">#F59E0B</p>
          </div>
          <div>
            <div className="h-24 bg-yellow-500 rounded-lg mb-2"></div>
            <p className="text-sm">Primary Yellow</p>
            <p className="text-xs text-gray-400">#EAB308</p>
          </div>
          <div>
            <div className="h-24 bg-black rounded-lg mb-2"></div>
            <p className="text-sm">Primary Black</p>
            <p className="text-xs text-gray-400">#000000</p>
          </div>
          <div>
            <div className="h-24 bg-gray-900 rounded-lg mb-2"></div>
            <p className="text-sm">Dark Gray</p>
            <p className="text-xs text-gray-400">#111827</p>
          </div>

          {/* Accent Colors */}
          <div>
            <div className="h-24 bg-amber-400 rounded-lg mb-2"></div>
            <p className="text-sm">Light Amber</p>
            <p className="text-xs text-gray-400">#FBBF24</p>
          </div>
          <div>
            <div className="h-24 bg-amber-600 rounded-lg mb-2"></div>
            <p className="text-sm">Dark Amber</p>
            <p className="text-xs text-gray-400">#D97706</p>
          </div>
          <div>
            <div className="h-24 bg-gray-400 rounded-lg mb-2"></div>
            <p className="text-sm">Text Gray</p>
            <p className="text-xs text-gray-400">#9CA3AF</p>
          </div>
          <div>
            <div className="h-24 bg-red-500 rounded-lg mb-2"></div>
            <p className="text-sm">Accent Red</p>
            <p className="text-xs text-gray-400">#EF4444</p>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Typography</h2>
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl font-bold mb-2">Heading 1</h1>
            <p className="text-sm text-gray-400">Font: Inter Bold, 48px</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-2">Heading 2</h2>
            <p className="text-sm text-gray-400">Font: Inter Bold, 36px</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-2">Heading 3</h3>
            <p className="text-sm text-gray-400">Font: Inter Bold, 30px</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-2">Heading 4</h4>
            <p className="text-sm text-gray-400">Font: Inter Bold, 24px</p>
          </div>
          <div>
            <p className="text-lg mb-2">Body Text Large</p>
            <p className="text-sm text-gray-400">Font: Inter Regular, 18px</p>
          </div>
          <div>
            <p className="text-base mb-2">Body Text Regular</p>
            <p className="text-sm text-gray-400">Font: Inter Regular, 16px</p>
          </div>
          <div>
            <p className="text-sm mb-2">Body Text Small</p>
            <p className="text-sm text-gray-400">Font: Inter Regular, 14px</p>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Buttons</h2>
        <div className="space-y-8">
          {/* Primary Button */}
          <div>
            <h3 className="text-xl mb-4">Primary Button</h3>
            <div className="space-y-4">
              <Button 
                className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-semibold"
              >
                Primary Button
              </Button>
              <p className="text-sm text-gray-400">Used for main calls-to-action</p>
            </div>
          </div>

          {/* Secondary Button */}
          <div>
            <h3 className="text-xl mb-4">Secondary Button</h3>
            <div className="space-y-4">
              <Button 
                variant="outline"
                className="border-amber-500/20 hover:bg-amber-500/10"
              >
                Secondary Button
              </Button>
              <p className="text-sm text-gray-400">Used for secondary actions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Cards</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Feature Card */}
          <div>
            <h3 className="text-xl mb-4">Feature Card</h3>
            <div className="bg-gradient-to-b from-gray-900/90 to-black border border-amber-500/10 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-amber-400" />
              </div>
              <h4 className="text-xl font-bold text-amber-400 mb-2">Feature Title</h4>
              <p className="text-gray-400">Feature description goes here with more details about the specific feature.</p>
            </div>
          </div>

          {/* Strategy Card */}
          <div>
            <h3 className="text-xl mb-4">Strategy Card</h3>
            <div className="bg-gradient-to-b from-gray-900/90 to-black border border-amber-500/10 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-amber-400 mb-4">Strategy Name</h4>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-400">Setup Cost</p>
                  <p className="text-lg font-semibold text-amber-200">From $5k</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Processing Time</p>
                  <p className="text-lg font-semibold text-amber-200">30-45 days</p>
                </div>
              </div>
              <div className="pt-4 border-t border-amber-500/10">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-amber-400 mt-0.5" />
                    <span className="text-gray-300">Benefit description goes here</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Icons */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Icons</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-2">
              <Shield className="w-6 h-6 text-amber-400" />
            </div>
            <p className="text-sm">Shield</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-2">
              <Globe2 className="w-6 h-6 text-amber-400" />
            </div>
            <p className="text-sm">Globe</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-2">
              <TrendingUp className="w-6 h-6 text-amber-400" />
            </div>
            <p className="text-sm">TrendingUp</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-2">
              <ArrowRight className="w-6 h-6 text-amber-400" />
            </div>
            <p className="text-sm">ArrowRight</p>
          </div>
        </div>
      </section>

      {/* Gradients */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Gradients</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="h-32 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg mb-2"></div>
            <p className="text-sm">Primary Gradient</p>
            <p className="text-xs text-gray-400">from-amber-500 to-yellow-500</p>
          </div>
          <div>
            <div className="h-32 bg-gradient-to-b from-gray-900/90 to-black rounded-lg mb-2"></div>
            <p className="text-sm">Background Gradient</p>
            <p className="text-xs text-gray-400">from-gray-900/90 to-black</p>
          </div>
        </div>
      </section>

      {/* Effects */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Effects</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <div className="shadow-lg shadow-amber-500/20 bg-amber-500 h-24 rounded-lg"></div>
            <p className="text-sm mt-2">Shadow Effect</p>
            <p className="text-xs text-gray-400">shadow-lg shadow-amber-500/20</p>
          </div>
          <div>
            <div className="border border-amber-500/10 bg-gray-900 h-24 rounded-lg"></div>
            <p className="text-sm mt-2">Border Effect</p>
            <p className="text-xs text-gray-400">border border-amber-500/10</p>
          </div>
          <div>
            <div className="backdrop-blur-xl bg-black/80 h-24 rounded-lg"></div>
            <p className="text-sm mt-2">Blur Effect</p>
            <p className="text-xs text-gray-400">backdrop-blur-xl bg-black/80</p>
          </div>
        </div>
      </section>
    </div>
  )
} 