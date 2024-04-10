import { useContext } from "react"
import { Toaster } from "react-hot-toast"
import { AuthContext } from "../../Provider/AuthProvider"
import { InfinitySpin } from "react-loader-spinner"

export const UpdateProfile = () => {
  const {updateUser} = useContext(AuthContext)


const handleUpdateProfile = (e) =>{
  e.preventDefault()
  const form = new FormData(e.currentTarget);
  const name = form.get("name")
  const photo = form.get("photoURL")
  console.log(name, photo)
updateUser(name, photo)
.then(()=>{
  
  console.log("successfully updated profile")
})
.catch((err) => console.log(err.message))

}


  return (
    <div className="w-full max-w-md mx-auto p-8 space-y-2 my-6 rounded-xl text-white bg-[#111827]">
      <h1 className="text-2xl font-bold text-center">Update Profile Here</h1>
      <form onSubmit={handleUpdateProfile} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className="block dark:text-gray-600">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="change your name"
            className="w-full px-4 py-3 text-black rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className="block dark:text-gray-600">
            PhotoURL
          </label>
          <input
            type="text"
            name="photoURL"
            id="photoURL"
            placeholder="photo url link"
            className="w-full px-4 py-3 text-black rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>
        <button
          className="block w-full p-3 text-center rounded-sm bg-green-600"
        >
          update
        </button>
        <Toaster></Toaster>
      </form>
    
    </div>
  )
}
