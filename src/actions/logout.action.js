import { redirect } from "react-router-dom";
import { logoutUser } from "../services/api";

export default async function logoutAction() {
  try {
    // 1. Appelle le backend NestJS pour détruire la session (supprime le cookie)
    await logoutUser()
    // 2. Redirige vers la page d'accueil une fois déconnecté
    return redirect("/")
  } catch (error) {
    console.error("Logout failed:", error)
    // En cas d'erreur, on redirige quand même pour "nettoyer" l'interface
    return redirect("/")
  }
};