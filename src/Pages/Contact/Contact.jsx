
import computer from '../../assets/computer.svg'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Helmet } from 'react-helmet-async';

export const Contact = () => {
	AOS.init()

const handleContact = (e) =>{
	e.preventDefault()
}


  return (
    <div data-aos="zoom-out-down" data-aos-duration="1000" className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-[#1F2937] text-white dark:bg-gray-100 dark:text-gray-800">
	<Helmet>
        <title>NexHaven || Contact us</title>
      </Helmet>
	<div className="flex flex-col justify-between">
		<div className="space-y-2">
			<h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
			<div className="dark:text-gray-600">If you have any questions, just fill in the contact form, and we will answer you shortly. If you are living nearby, come visit our office</div>
		</div>
		<img src={computer} alt="" className="p-6 h-52 md:h-72" />
	</div>
	<form noValidate="" className="space-y-6">
		<div>
			<label htmlFor="name" className="text-sm">Full name</label>
			<input id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-100" />
		</div>
		<div>
			<label htmlFor="email" className="text-sm">Email</label>
			<input id="email" type="email" className="w-full p-3 rounded dark:bg-gray-100" />
		</div>
		<div>
			<label htmlFor="message" className="text-sm">Message</label>
			<textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-100"></textarea>
		</div>
		<button onClick={handleContact} className="w-full p-3 text-sm font-bold  uppercase rounded dark:bg-violet-600 dark:text-gray-50">Send Message</button>
	</form>
</div>
  )
}
