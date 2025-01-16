import api from "@/api"
import {POSTS_LIMIT} from "@/constants"
import {Home} from "@/app/(home)/Home"

export const revalidate = 3600

export async function generateStaticParams() {
  const {total} = await api.getAll({limit: POSTS_LIMIT, page: 1})
  const pages = Math.ceil(total / POSTS_LIMIT)
  return Array.from({length: pages}, (_, i) => ({params: {page: (i + 1).toString()}}))
}

export default async function Page({params}: {params: Promise<{page: string}>}) {
  const page = parseInt((await params).page)
  const limit = POSTS_LIMIT * page
  const {data: posts, total} = await api.getAll({limit, page: 1})

  return <Home page={page} total={total} posts={posts} />
}
