import { Helmet } from "react-helmet-async"
import { City } from "./City"
import { TownHouse } from "./TownHouse"
import { Trusted } from "./Trusted/Trusted"
import { NewsLetter } from "./NewsLetter"

export const Gallery = () => {
  return (
    <div className="md:w-4/5 mx-auto">
        <Helmet>
            <title>NexHaven || Gallery</title>
        </Helmet>
        <City></City>
        <TownHouse></TownHouse>
        <Trusted></Trusted>
        <NewsLetter></NewsLetter>
    </div>
  )
}
