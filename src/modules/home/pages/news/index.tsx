import { Link } from "react-router-dom"
import { PagePath } from "@/shared/core/enum/page.enum"

const NewsPage = () => {
  return (
    <Link to={PagePath.TEMPLATE}>Template</Link>
  )
}

export default NewsPage