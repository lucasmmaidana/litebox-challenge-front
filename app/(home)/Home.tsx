import {Feed} from "./Feed"
import {Footer} from "@/components/common/Footer"
import {Header} from "@/components/common/Header"
import {Post} from "@/types"

export const Home = ({page = 1, total, posts}: {page: number; total: number; posts: Post[]}) => {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen max-w-360 mx-auto px-6 lg:px-16 pb-6 lg:pb-16">
      <Header />
      <Feed posts={posts} total={total} page={page} />
      <Footer />
    </div>
  )
}
