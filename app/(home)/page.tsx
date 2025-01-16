import api from "@/api"
import {Home} from "./Home"
import {POSTS_LIMIT} from "@/constants"

export const revalidate = 3600

export default async function HomePage() {
  const {data: posts, total} = await api.getAll({limit: POSTS_LIMIT, page: 1})

  return <Home page={1} total={total} posts={posts} />
}
