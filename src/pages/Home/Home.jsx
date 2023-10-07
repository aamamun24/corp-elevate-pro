import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Event from "./Event";

const Home = () => {
    const events = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <div>
                {
                    events.map(event => <Event key={event.id} event={event}></Event>)
                }
            </div>
        </div>
    );
};

export default Home;