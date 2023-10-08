import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Event from "./Event";

const Home = () => {
    const events = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <div className="my-16 max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
                <div className="max-w-xl text-center mx-auto mb-8">
                    <h2 className="text-3xl font-bold">Our Event Services</h2>
                    <p className="text-[#292929] font-medium mt-4 leading-6">
                        Corporate event management involves planning and executing various events for businesses and organizations, such as conferences, meetings, product launches, and parties. The goal is to create successful and memorable experiences that align with the organization's objectives.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        events.map(event => <Event key={event.id} event={event}></Event>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;