import { redirect } from "react-router-dom"
import { getCurrentUser } from "./api"

export async function requireAuth() {

  try {
    return await getCurrentUser()
  } catch (error) {
    if (error.status !== 401) {
      throw error
    }
    throw redirect("/login")
  }
}
