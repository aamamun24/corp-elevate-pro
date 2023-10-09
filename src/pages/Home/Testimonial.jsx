import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Testimonial = () => {
    return (
        <div className="bg-[#ED4A43]">
            <div data-aos="flip-left" className="my-16 max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-14">
                <h2 className="text-3xl font-semibold text-white ">TESTIMONIALS <span className="text-2xl">/ See What People Say About Us</span></h2>
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                        <div className='flex mt-8 gap-10'>
                            <div className='flex-1'>
                                <p className=' text-white text-justify'>I'm thrilled to provide a glowing review for this exceptional service. From start to finish, their professionalism and attention to detail were outstanding. The quality of their product/service exceeded my expectations, and their commitment to customer satisfaction was evident throughout. Communication was seamless, making the entire experience not only enjoyable but also stress-free. I wholeheartedly recommend their service to anyone seeking excellence and will undoubtedly be a repeat customer.</p>
                                <h4 className='text-lg font-semibold mt-4'>John Smith</h4>
                            </div>
                            <div>
                                <img className='rounded-md' src={user1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <div className='flex mt-8 gap-10'>
                            <div className='flex-1'>
                                <p className=' text-white text-justify'>I couldn't be happier with the service I received. From the moment I engaged with this company, I was impressed by their dedication to delivering top-notch results. Their team's expertise shone through, and the end product/service was exceptional. What truly stood out was their responsiveness and willingness to go the extra mile to meet my specific needs. The level of professionalism and the quality of the service far exceeded my expectations. </p>
                                <h4 className='text-lg font-semibold mt-4'>Emily Johnson</h4>
                            </div>
                            <div>
                                <img className='rounded-md' src={user2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;