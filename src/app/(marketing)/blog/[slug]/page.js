import { Post } from "@/app/ui/post";
import { getPosts } from "@/lib/posts";

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = await getPosts(slug);
 
  return (
    <div>
      <h1>{post.title ?? 'post.title'}</h1>
      <p>{post.content ?? 'post.content'}</p>
      <Post key={post.id} post={post ?? 'post data'} />
    </div>
  )
}