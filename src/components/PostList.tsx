'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Post } from '@/lib/posts'

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <div className="space-y-12">
      {posts.map((post) => (
        <article key={post.slug} className="border-b border-gray-100 pb-12 last:border-b-0">
          <Link href={`/blog/${post.slug}`} className="block group">
            {post.thumbnail && (
              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 group-hover:text-accent transition-colors">
              {post.title}
            </h2>
            <time className="text-sm text-gray-500">{post.date}</time>
          </Link>
        </article>
      ))}
    </div>
  )
} 