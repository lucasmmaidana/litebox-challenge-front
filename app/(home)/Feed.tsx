import {Post} from "@/types"
import {Button} from "@/components/ui/Button"
import {Card} from "@/components/ui/Card"
import Link from "next/link"
import {POSTS_LIMIT} from "@/constants"
import {TopicsFilter} from "@/app/(home)/TopicsFilter"
import {SubscribeCTA} from "@/app/(home)/SubscribeCTA"
import {MostViewed} from "@/components/common/MostViewed"
import {PostsGrid} from "./PostsGrid"

interface FeedProps {
  posts: Post[]
  total: number
  page: number
}

export const Feed: React.FC<FeedProps> = ({posts, total, page}) => {
  const MAX_PAGES = Math.ceil(total / POSTS_LIMIT)
  const heroPost = posts.shift()
  const firstPosts = posts.slice(0, 3)
  const groupedPosts = []
  for (let i = 0; i < posts.length; i += 3) {
    groupedPosts.push(posts.slice(i, i + 3))
  }

  return (
    <main className="w-full py-6 ">
      <div className="flex flex-col gap-8">
        {heroPost && (
          <div>
            <span className="hidden lg:block font-bold text-lg mb-6">Today story</span>
            <Card key={heroPost._id} title={heroPost.title} image={heroPost.image} id={heroPost._id} hero />
          </div>
        )}
        <TopicsFilter />
        <div className="lg:flex gap-7">
          <div className="flex flex-col grow gap-8 ">
            <PostsGrid posts={firstPosts} variant="left" />
            <SubscribeCTA className="lg:col-span-2" />
            {groupedPosts.map((posts, index) => (
              <PostsGrid key={index} posts={posts} variant={index % 2 === 0 ? "right" : "left"} />
            ))}
            <div className="lg:col-span-2 flex justify-center my-8 lg:my-10">
              {page < MAX_PAGES ? (
                <Button asChild className="w-full lg:w-auto">
                  <Link href={`/page/${page + 1}`} scroll={false}>
                    Load more
                  </Link>
                </Button>
              ) : (
                <Button disabled>Load more</Button>
              )}
            </div>
          </div>
          <MostViewed />
        </div>
      </div>
    </main>
  )
}
