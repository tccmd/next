import { Post } from "@/app/ui/post"
import { getPosts } from "@/lib/posts"

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = await getPosts()
 
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Post key={post.id} post={post} />
    </div>
  )
}