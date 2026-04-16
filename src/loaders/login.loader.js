import { redirect } from "react-router-dom";
import { getCurrentUser } from "../services/api";
import { use } from "react";

export default async function loginLoader(params) {
    try {
        const user = await getCurrentUser()
        console.log(user)
        return redirect("/host")
    } catch (err) {

    }

}