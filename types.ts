export type Params = Promise<{id: string}>
export type SearchParams = Promise<{[key: string]: string | string[] | undefined}>
export interface Post {
  _id: string
  title: string
  image: string
}

export interface ApiResponseAllPosts {
  total: number
  limit?: number
  page?: number
  data: Post[]
}
