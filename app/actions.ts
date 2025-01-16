"use server"
import api from "@/api"
import {revalidatePath} from "next/cache"

export async function uploadPost(
  prevState:
    | {
        message: string
        success: boolean
        error: boolean
      }
    | undefined,
  formData: FormData
) {
  try {
    await api.upload(formData)
    revalidatePath("/")
    return {message: "Post uploaded successfully", success: true, error: false}
  } catch {
    return {message: "Failed to upload post", success: false, error: true}
  }
}
