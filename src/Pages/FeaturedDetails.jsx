import { useEffect, useState } from "react"
import { useLoaderData, useParams } from "react-router-dom"

export const FeaturedDetails = () => {

const [details, setDetails] = useState([])

const data = useLoaderData()
const {id} = useParams()
const idInt = parseInt(id)
// console.log(data, id)

useEffect(()=>{
    const isMatch = data.find(match => match.id === idInt)
    if(isMatch){
setDetails(isMatch)
    }

},[data, idInt])
console.log(details)

  return (
    <div>FeaturedDetails</div>
  )
}
