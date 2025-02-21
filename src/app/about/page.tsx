export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="max-w-xl mx-auto prose prose-lg">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">소개</h1>
        <p className="text-gray-700">
          안녕하세요! 저는 웹 개발자입니다. 
          이 블로그는 Next.js와 TypeScript를 사용하여 만들었습니다.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-12 mb-6">기술 스택</h2>
        <ul className="space-y-2 text-gray-700">
          <li>Next.js</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>
    </div>
  )
}
