'use client'

import { Post } from '@/lib/posts'

export default function PostContent({ post }: { post: Post }) {
  if (!post.content) {
    return <div>No content available</div>
  }

  return (
    <article className="max-w-2xl mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            {post.title}
          </h1>
          <time className="text-sm text-gray-500">
            {post.date}
          </time>
        </header>
        <div 
          className="prose prose-lg prose-slate mx-auto"
          dangerouslySetInnerHTML={{ 
            __html: post.content.replace(
              /<h([1-6]) id="([^"]+)">/g, 
              '<h$1 id="$2" class="scroll-mt-20">'
            ) 
          }} 
        />
      </div>
    </article>
  )
} 