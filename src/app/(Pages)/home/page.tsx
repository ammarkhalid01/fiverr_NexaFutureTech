import Wrapper from '@/app/Wrapper'
import React from 'react'
// import ai2 from '../../../Assets/cobot.avif'
import ai3 from '../../../Assets/cobotRobots.avif'
import ai4 from '../../../Assets/Automation.avif'
import img1 from '../../../Assets/img1.png'
// import ceo from '../../../Assets/ceo.jpg'
import Image from 'next/image'
import Cards from '@/app/Components/Cards';
import Link from 'next/link';
import { AiOutlineSolution } from 'react-icons/ai'
import { FaRobot } from 'react-icons/fa6'
// import { FaQuoteRight } from 'react-icons/fa6'
import { MdOutlinePrecisionManufacturing } from 'react-icons/md'
import { SiInductiveautomation } from 'react-icons/si'
import Numbers from '@/app/Components/Numbers'
// import { FaQuoteLeft } from "react-icons/fa6";


const ourServices = [
    {
        title: 'Off-the-Shelf Automation',
        description: 'We provide expert consultation on integrating off-the-shelf automation solutions to help businesses enhance efficiency without the need for custom-built systems.',
        icon: <AiOutlineSolution />
    },
    {
        title: 'Tailored Manufacturing Automation',
        description: 'We provide expert consultation on developing customized automation strategies tailored to the specific needs of manufacturers',
        icon: <MdOutlinePrecisionManufacturing />
    },
    {
        title: 'Robot Process Automation',
        description: 'We deploy intelligent bots to automate repetitive tasks, reduce errors, and boost productivity.',
        icon: <FaRobot />
    },
    {
        title: 'Reviving Dormant Automation',
        description: 'We restore and optimize underutilized automation systems to improve performance and minimize downtime.',
        icon: <SiInductiveautomation />
    },
]

const Home = () => {
    return (
        <Wrapper>


            <div className='bg-primary min-h-[calc(100vh-8rem)]'>
                <div className="max-w-7xl p-5 flex md:flex-row flex-col gap-10 items-center justify-between w-full mx-auto min-h-[calc(100vh-8rem)]">
                    <div className="text-white md:max-w-[50%] w-full">
                        <h1 className="md:text-5xl slidein [--slidein-delay:300ms] opacity-0 capitalize text-3xl font-semibold leading-tight">Smart consultancy for smarter manufacturing automation</h1>
                        <p className="mt-5 mb-8 text-blue-200 slidein [--slidein-delay:500ms] opacity-0">At Nexafuturtech, we blend transition traditional practices with cutting-edge technology to redefine automation and manufacturing. With passion and precision, we drive your business toward limitless innovation and sustainable growth.</p>
                        <Link href={"/contact"} className='px-12 slidein [--slidein-delay:700ms] opacity-0 py-3.5 rounded-full bg-white text-primary cursor-pointer  font-medium transition-all duration-500 hover:bg-transparent hover:text-white border border-white'>Get Started</Link>
                    </div>
                    <div className="md:max-w-[50%] slidein [--slidein-delay:400ms] opacity-0 w-full flex items-center justify-center">
                        <Image src={img1} className='float-image' alt='img' />
                    </div>
                </div>
            </div>

            <div className="max-w-7xl w-full mx-auto p-5 md:mt-16 mt-10">

                <h2 className='text-center font-semibold text-4xl'>Our Services</h2>
                <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:mt-12 mt-8 gap-4">
                    <Cards ourServices={ourServices} />
                </div>
                <div className="flex items-center justify-center w-full mt-10">
                    <Link href={"/services"} className='px-10 py-3 block bg-primary transition-all duration-500 hover:opacity-80 text-white rounded-full'>View All</Link>
                </div>
            </div>

            <div className="max-w-7xl w-full flex items-center justify-between md:flex-row flex-col gap-6 mx-auto p-5 md:mt-16 mt-10">
                <div className="md:max-w-[50%] w-full">
                    <h2 className='font-semibold leading-tight md:text-3xl text-2xl'>Empowering Innovation through Automation Excellence</h2>
                    <p className='text-zinc-500 md:text-lg mt-4'>We aim to revolutionize automation and manufacturing by leading the integration of manual processes with advanced technologies. With dedication and passion, we strive to propel businesses into a new era of efficiency and sustainable growth, fostering innovation in the industry.</p>
                </div>
                <div className="md:max-w-[40%] w-full">
                    <video className="md:h-[26rem] h-[18rem] rounded-lg bg-white object-cover" autoPlay muted loop>
                        <source src="/video.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>

            <div id='about' className="max-w-7xl w-full flex items-center justify-between md:flex-row flex-col-reverse gap-6 mx-auto p-5 md:mt-28 mt-5">
                <div className="md:max-w-[40%] w-full">
                    <Image src={ai3} alt='img' className='rounded-lg myShadow' />
                </div>
                <div className="md:max-w-[50%] w-full">
                    <h2 className='font-semibold leading-tight text-3xl'>About Us</h2>
                    <p className='text-zinc-500 md:text-lg mt-4'>At NexafuturTech, we specialize in helping manufacturers embrace automation to enhance efficiency, reduce costs, and drive innovation. With expertise in integrating off-the-shelf solutions, custom automation, and process optimization, we empower businesses to stay ahead in the competitive manufacturing landscape. Our mission is to bridge the gap between technology and industry, ensuring seamless automation for a smarter future.</p>
                </div>
            </div>

            <div className="max-w-7xl w-full flex items-center justify-between md:flex-row flex-col gap-6 mx-auto p-5 md:mt-24 mt-5">
                <div className="md:max-w-[50%] w-full">
                    <h2 className='font-semibold leading-tight md:text-3xl text-2xl'>SOLUTIONISTS</h2>
                    <p className='text-zinc-500 md:text-lg mt-4'>At NexafuturTech, we collabolate with
                        leading solutionists to deliver innovative
                        automation solutions customized to your
                        business. With our strategic partnerships
                        and expertise, we ensure your
                        manufacturing processes are streamlined
                        for maximum efficiency and sustainable
                        growth. Empower your future with
                        NexafuturTech. </p>
                </div>
                <div className="md:max-w-[40%] w-full">
                    <Image src={ai4} className='rounded-lg md:h-96 object-cover' alt='img' />
                </div>
            </div>

            <div className="md:mt-20 mt-10">
                <Numbers />
            </div>

            {/* <div className="max-w-6xl w-full flex items-start justify-between md:flex-row flex-col gap-5 mx-auto p-5 md:mt-28 mt-10">
                <div className="md:max-w-[6%] w-full">
                    <Image src={ceo} className='rounded-full myShadow w-full border-zinc-400 border-2' alt='img' />
                </div>
                <div className="md:max-w-[90%] w-full">
                    <h2 className='font-semibold leading-tight md:text-3xl text-2xl capitalize'>founder of Nexafuturtech</h2>
                    <h3 className='font-medium text-zinc-700 capitalize'>Jai Predeev Poinoosawmy</h3>
                    <p className='text-zinc-500 md:text-lg mt-4 relative'> <FaQuoteLeft className='inline pb-2' /> 
                        Nexafuturtech is driven by a passion for innovation and technology, dedicated to helping companies advance their capabilities with a relentless drive for improvement. We are here to make a global impact, positioning ourselves as the trusted partner for businesses embracing transformation. With a clear vision for progress, we empower companies to optimize operations, enhance efficiency, and lead the way in the evolving landscape of automation. <FaQuoteRight className='inline pb-2' />
                    </p>
                </div>
            </div> */}

            <div className="flex items-center justify-center max-w-4xl mx-auto flex-col  md:mt-28 mt-8 text-center p-5">
                <h2 className="md:text-4xl text-3xl font-semibold tracking-tight capitalize text-zinc-800 ">Subscribe to our newsletter</h2>
                <p className="mt-4 text-lg text-gray-500">
                    Subscribe to our newsletter and stay updated with the latest trends, innovations, and insights in automation and smart manufacturing
                </p>
                <form action="https://api.web3forms.com/submit" method="POST" className="mt-6 flex max-w-xl w-full gap-x-2">
                    <input type="hidden" name="access_key" value="1e2a1974-3994-4e26-bf6c-0b687aeef6e4" />
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        required
                        placeholder="Enter your email"
                        autoComplete="email"
                        className="border-zinc-300 w-full flex-auto rounded-md border px-3.5 py-2"
                    />
                    <button className='bg-primary  text-white px-7 py-3 font-medium cursor-pointer transition-all duration-500 hover:opacity-80 rounded-lg'>Subscribe</button>
                </form>
            </div>

        </Wrapper>
    )
}

export default Home