import Link from 'next/link'
import GitHubLink from '@/components/GitHubLink'

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <div className="text-center space-y-8">
        <h1 className="text-4xl font-semibold text-gray-800">
          JavaScript Clean Code
        </h1>
        <p className="text-lg text-gray-700">
          더 나은 JavaScript 코드를 작성하기 위한 클린 코드 가이드
        </p>
        <div className="flex justify-center gap-4">
          <Link 
            href="/blog" 
            className="px-6 py-2 bg-accent text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            글 보기
          </Link>
          <GitHubLink />
        </div>
      </div>
    </main>
  )
}
