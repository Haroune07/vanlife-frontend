import { getCurrentUser } from "../services/api"

export default async function mainLayoutLoader() {
    
    try {
        const user = await getCurrentUser()
        console.log(user);
        
        return {user : user}
    }catch(err){
        return {user : null}
    }
}