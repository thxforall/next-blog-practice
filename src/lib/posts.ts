import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeHighlight from 'rehype-highlight'

export interface Post {
  slug: string
  title: string
  date: string
  content?: string
}

export async function getPostMetadata(): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), 'src/posts')
  const files = fs.readdirSync(postsDirectory)
  
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '')
    const filePath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)
    
    return {
      slug,
      title: data.title,
      date: data.date,
    }
  })

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPost(slug: string): Promise<Post> {
  const filePath = path.join(process.cwd(), 'src/posts', `${slug}.md`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  
  // unified를 사용하여 마크다운을 HTML로 변환
  const processedContent = await unified()
    .use(remarkParse) // 마크다운을 파싱
    .use(remarkGfm) // GitHub Flavored Markdown 지원
    .use(remarkRehype) // 마크다운 AST를 HTML AST로 변환
    .use(rehypeHighlight) // 코드 블록 구문 강조
    .use(rehypeStringify) // HTML 문자열로 변환
    .process(content)

  const contentHtml = processedContent.toString()
  
  return {
    slug,
    title: data.title,
    date: data.date,
    content: contentHtml,
  }
} 