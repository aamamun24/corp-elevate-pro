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
                    <h2 className="text-5xl font-bold">Our Services</h2>
                    <p className="text-[#292929] font-medium mt-4 leading-6">
                        Planning and executing business events, from conferences to product launches, to achieve organizational goals and objectives.
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