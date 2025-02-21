import { getPost } from '@/lib/posts';
import PostContent from '@/components/PostContent';
import { Metadata } from 'next';

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params
  const post = await getPost(slug)
  
  return {
    title: `${post.title} - JavaScript Clean Code`,
    description: post.title,
  }
}

export default async function BlogPost(props: Props) {
  try {
    const { slug } = await props.params
    const post = await getPost(slug)
    return <PostContent post={post} />
  } catch (error) {
    console.error('Error loading post:', error);
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-red-500">
            포스트를 불러오는데 실패했습니다
          </h1>
        </div>
      </div>
    );
  }
}

export async function generateStaticParams() {
  return [
    { slug: 'type' },
    { slug: 'if' },
    { slug: 'variables' },
    { slug: 'boundary' },
    { slug: 'floatingnumber' },
  ];
}

// Next.js 설정
export const dynamic = 'auto';
export const dynamicParams = true;
export const revalidate = false;
export const fetchCache = 'auto';
export const runtime = 'nodejs';
export const preferredRegion = 'auto';
