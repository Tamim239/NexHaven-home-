import keyImage from '../../../assets/gallery/key.jpg'
import 'aos/dist/aos.css';
import AOS from 'aos';

export const Trusted = () => {
    AOS.init()
  return (
    <div className="md:flex  gap-4 items-center">
        
        <div className='md:w-1/2'>
            <img data-aos="zoom-in" data-aos-duration="1000" src={keyImage} alt="" className='h-96 w-full rounded-3xl'/>
        </div>
        <div className='h-96 md:w-1/2 bg-[#F0EFFD] rounded-3xl flex items-center'>
            <div className='p-10'>
            <h1 className="text-5xl font-bold py-2">Trusted By Best Exclusive Agents</h1>
            <ul className='list-disc pl-6'>
                <li>Find excellent deals</li>
                <li>Friendly host & Fast support</li>
                <li>List your own property</li>
            </ul>
            </div>
        </div>

    </div>
  )
}
