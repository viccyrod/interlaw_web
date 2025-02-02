'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Clock, User } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  author: string
  date: string
  imageUrl: string
}

const featuredPosts: BlogPost[] = [
  {
    slug: 'paraguay-tax-benefits-2024',
    title: 'Paraguay Tax Benefits: Complete Guide for 2024',
    excerpt: 'Discover how Paraguay&apos;s tax system offers unprecedented benefits for digital entrepreneurs and remote professionals.',
    category: 'Tax Strategy',
    readTime: '8 min read',
    author: 'InterLaw Team',
    date: 'Jan 15, 2024',
    imageUrl: '/images/blog/paraguay-guide.jpg'
  },
  {
    slug: 'digital-nomad-tax-optimization',
    title: 'Tax Optimization Strategies for Digital Nomads',
    excerpt: 'Learn how to legally optimize your tax position while working remotely across different jurisdictions.',
    category: 'Digital Nomads',
    readTime: '6 min read',
    author: 'InterLaw Team',
    date: 'Jan 10, 2024',
    imageUrl: '/images/blog/digital-nomad.jpg'
  }
]

const recentPosts: BlogPost[] = [
  {
    slug: 'residency-comparison',
    title: 'Comparing Global Residency Programs: Which One is Right for You?',
    excerpt: 'An in-depth comparison of popular residency programs including Paraguay, Panama, Dubai, and Malta.',
    category: 'Comparison',
    readTime: '10 min read',
    author: 'InterLaw Team',
    date: 'Jan 5, 2024',
    imageUrl: '/images/blog/residency-comparison.jpg'
  },
  // Add more recent posts...
]

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50">
      {/* Hero Section */}
      <div className="bg-black text-white py-20 sm:py-28">
        <div className="container px-4 sm:px-6 mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-200 bg-clip-text text-transparent">
              Tax Optimization Insights
            </h1>
            <p className="text-lg sm:text-xl text-gray-400">
              Expert analysis and guides on global tax strategies, residency planning, and wealth optimization.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container px-4 sm:px-6 mx-auto py-12 sm:py-20">
        {/* Featured Posts */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 sm:mb-24"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <motion.article 
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 sm:h-64">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4 text-sm">
                      <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-600">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <span className="text-gray-500">
                        {post.date}
                      </span>
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Recent Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900">Recent Articles</h2>
          <div className="grid grid-cols-1 gap-8">
            {recentPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <motion.article 
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row"
                >
                  <div className="relative w-full md:w-72 h-48">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-center gap-4 mb-4 text-sm">
                      <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-600">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <span className="text-gray-500">
                        {post.date}
                      </span>
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-20 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl p-8 sm:p-12 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black">
            Stay Updated
          </h2>
          <p className="text-gray-900 mb-8 max-w-2xl mx-auto">
            Get the latest insights on global tax optimization strategies delivered to your inbox.
          </p>
          <Link href="https://calendly.com/interlaw-io/30min" target="_blank" rel="noopener noreferrer">
            <Button className="bg-black hover:bg-gray-900 text-white px-8 py-6 rounded-full">
              Book a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
} 