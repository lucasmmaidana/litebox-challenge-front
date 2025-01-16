"use client"
import PostBodyMDX from "@/app/postBody.mdx"

export const PostBody: React.FC = () => {
  return (
    <div className="post-body lg:order-2 text-dark-gray">
      <PostBodyMDX />
    </div>
  )
}
