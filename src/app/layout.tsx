import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'JavaScript Clean Code',
  description: 'JavaScript Clean Code',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="bg-white">
        <header className="border-b border-gray-100">
          <nav className="max-w-2xl mx-auto px-4 py-4">
            <div className="flex justify-center gap-8">
              <Link href="/" className="text-gray-700 hover:text-accent transition-colors">홈</Link>
              <Link href="/blog" className="text-gray-700 hover:text-accent transition-colors">글</Link>
              <Link href="/about" className="text-gray-700 hover:text-accent transition-colors">소개</Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
