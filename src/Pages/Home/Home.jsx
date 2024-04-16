import { useContext } from "react"
import { FeaturedProperties } from "../FeaturedProperties/FeaturedProperties"
import { Banner } from "./Banner"
import { AuthContext } from "../../Provider/AuthProvider"
import { InfinitySpin } from "react-loader-spinner"
import { Helmet } from "react-helmet-async"
import { NewsLetter } from "../Gallery/NewsLetter"

export const Home = () => {
const {loading} = useContext(AuthContext)
if(loading){
  return  <div className="flex justify-center h-96 items-center"><InfinitySpin
    visible={true}
    width="200"
    color="#4fa94d"
    /></div>
}

  return (
    <div className="md:w-4/5 mx-auto">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <FeaturedProperties></FeaturedProperties>
    </div>
  )
}
