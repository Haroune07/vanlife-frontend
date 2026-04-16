import { getSingleVan } from "../services/api";

export default async function vanDetailLoader({params}) {
    return await getSingleVan(params.id)
}