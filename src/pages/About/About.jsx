import about from '../../assets/about.jpg';

const About = () => {
    return (
        <div>
            <div className="hero h-[60vh]" style={{ backgroundImage: `url(${about})` }}>
                <div className="hero-overlay bg-black bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">About</h1>
                    </div>
                </div>
            </div>
            <div className="my-16 max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
                <div>
                    <h2 className='text-2xl font-semibold text-[#292929]'>About Us</h2>
                    <p className="text-[#292929] font-medium mt-4 leading-6 text-justify">
                        Welcome to Corp Elevate Pro, your trusted partner in creating unforgettable corporate events. With years of experience in the industry, we have established ourselves as a premier event management company dedicated to delivering exceptional experiences for businesses of all sizes.
                    </p>
                </div>
                <div className='mt-8'>
                    <h2 className='text-2xl font-semibold text-[#292929]'>Our Mission</h2>
                    <p className="text-[#292929] font-medium mt-4 leading-6 text-justify">
                        At Corp Elevate Pro, our mission is to turn your vision into reality. We understand that each corporate event is unique and requires a tailored approach. Our team of skilled professionals is committed to meticulously planning, executing, and managing every aspect of your event, ensuring it aligns perfectly with your goals and objectives.
                    </p>
                </div>
                <div className='mt-8'>
                    <h2 className='text-2xl font-semibold text-[#292929]'>Our Expertise</h2>
                    <p className="text-[#292929] font-medium mt-4 leading-6 text-justify">
                        Our team brings a wealth of expertise to the table. From intimate board meetings and product launches to large-scale conferences and gala dinners, we have successfully executed a wide range of corporate events. Our in-depth knowledge of industry trends, cutting-edge technology, and creative flair sets us apart, allowing us to deliver innovative solutions that leave a lasting impression.
                    </p>
                </div>
                <div className='mt-8'>
                    <h2 className='text-2xl font-semibold text-[#292929]'>Client-Centric Approach</h2>
                    <p className="text-[#292929] font-medium mt-4 leading-6 text-justify">
                        We firmly believe in building lasting relationships with our clients. Your success is our success, and we are dedicated to going above and beyond to exceed your expectations. Our commitment to open communication, transparency, and a customer-first mindset ensures that your experience with us is seamless and stress-free.
                    </p>
                </div>
                <div className='mt-8'>
                    <h2 className='text-2xl font-semibold text-[#292929]'>Our Team</h2>
                    <p className="text-[#292929] font-medium mt-4 leading-6 text-justify">
                        Behind every successful event is a passionate and dedicated team. Meet our talented professionals who work tirelessly to bring your vision to life. From event planners and designers to logistics experts and technical specialists, our team is the driving force behind our impeccable track record.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;