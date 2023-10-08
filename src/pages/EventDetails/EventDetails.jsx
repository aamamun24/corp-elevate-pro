import { useLoaderData, useParams } from "react-router-dom";

const EventDetails = () => {
    const { id } = useParams()
    const events = useLoaderData()
    const event = events.find(event => event.id == id)
    const { name, image, price, description } = event;
    return (
        <div className="my-16 max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
            <div className='p-8 shadow-md rounded-lg hover:shadow-2xl flex flex-col'>
                <img className='rounded-lg flex-grow' src={image} alt="" />
                <h2 className='text-2xl font-semibold mt-4'>{name}</h2>
                <h4 className='my-4 text-[#ED4A43] text-xl font-semibold pl-4 border-l-4 border-[#ED4A43]'>Price ${price}</h4>
                <p className='text-lg text-[#292929] text-justify flex-grow'>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default EventDetails;