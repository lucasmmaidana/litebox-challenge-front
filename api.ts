import {ApiResponseAllPosts, Post} from "@/types"
import {notFound} from "next/navigation"

const apiUrl = "https://lite-tech-backend.onrender.com"

const api = {
  getAll: async ({limit, page}: {limit?: number; page?: number} = {}): Promise<ApiResponseAllPosts> => {
    const url = new URL(`${apiUrl}/posts`)
    if (limit && page) {
      url.searchParams.append("limit", limit.toString())
      url.searchParams.append("page", page.toString())
    }
    const response = await fetch(url.toString())
    return response.json()
  },
  getById: async (id: string): Promise<Post> => {
    const response = await fetch(`${apiUrl}/posts/${id}`)
    if (!response.ok) notFound()
    return response.json()
  },
  upload: async (data: FormData): Promise<void> => {
    await fetch(`${apiUrl}/posts`, {
      method: "POST",
      body: data,
    })
  },
}

export default api
