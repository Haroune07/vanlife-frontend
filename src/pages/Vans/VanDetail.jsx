import { Link, useLoaderData } from "react-router-dom"
import Van from "/src/components/Van"
import "./VanDetail.css"

export default function VanDetail() {
  const van = useLoaderData()
  return (
    <div className="van-detail-container">
      <Link
        to="../"
        relative="path"
        className="back-button"
      >&larr; <span>Back to vans</span></Link>
      <Van van={van} />
    </div>

  )
}

