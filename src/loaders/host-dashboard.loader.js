import { getHostVans } from "../services/api";
import { requireAuth } from "../services/auth";

export default async function hostDashboardLoader(){
    const user = await requireAuth()
    return {
        hostVans: await getHostVans(user.id),
        user: user
    }
}