'use client'

import Link from 'next/link'
import { Post } from '@/lib/posts'

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <div className="space-y-12">
      {posts.map((post) => (
        <article key={post.slug} className="border-b border-gray-100 pb-12 last:border-b-0">
          <Link href={`/blog/${post.slug}`} className="block group">
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