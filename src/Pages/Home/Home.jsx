import { FeaturedProperties } from "../FeaturedProperties/FeaturedProperties"
import { Banner } from "./Banner"

export const Home = () => {
  return (
    <div className="w-4/5 mx-auto">
      <Banner></Banner>
      <FeaturedProperties></FeaturedProperties>
    </div>
  )
}
