import { getPostMetadata } from '@/lib/posts'
import PostList from '@/components/PostList'

export default async function BlogPage() {
  const posts = await getPostMetadata()

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold text-gray-800 mb-12 text-center">
        모든 글
      </h1>
      <div className="max-w-xl mx-auto">
        <PostList posts={posts} />
      </div>
    </div>
  )
}
