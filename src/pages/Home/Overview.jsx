import overview from '../../assets/overview.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Overview = () => {
    return (
        <div data-aos="zoom-out-up" className='flex flex-col md:flex-row gap-12 items-center my-16'>
            <div className='flex-1'>
                <h2 className="text-4xl font-bold"><span className="text-[#ED4A43]">OVERVIEW</span> OF THE EVENT</h2>
                <div className='border-b-4 mt-2 border-[#ED4A43]'></div>
                <p className="text-[#292929] text-justify font-medium mt-4 leading-6">
                    Corporate event management involves the comprehensive planning, coordination, and execution of various events and gatherings for businesses and organizations. These events can range from conferences and product launches to team-building activities and trade shows. The primary objective of corporate event management is to create memorable and effective experiences that align with the client's goals and brand identity. This entails concept development, logistical planning, budget management, marketing and promotion, program management, on-site execution, and post-event evaluation. It plays a vital role in enhancing a company's image, fostering relationships, and achieving business objectives through meticulously orchestrated events.
                </p>
            </div>
            <div className='flex-1'>
                <img className='rounded-md' src={overview} alt="" />
            </div>
        </div>
    );
};

export default Overview;