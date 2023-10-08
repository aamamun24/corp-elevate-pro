import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Event = ({ event }) => {
    const { id, name, image, price, description } = event;
    return (
        <div className='p-5 shadow-md rounded-lg hover:shadow-2xl flex flex-col'>
            <img className='rounded-lg flex-grow' src={image} alt="" />
            <h2 className='text-2xl font-semibold mt-4'>{name}</h2>
            <h4 className='my-4 text-[#ED4A43] text-xl font-semibold pl-4 border-l-4 border-[#ED4A43]'>Price ${price}</h4>
            <p className='text-lg text-[#292929] text-justify flex-grow'>
                {description.slice(0, 100)}
            </p>
            <Link to={`/event-details/${id}`}>
                <button className='py-2 px-4 border-2 rounded hover:bg-[#ED4A43] hover:border-2 hover:border-[#ED4A43] text-xl font-semibold hover:text-white text-[#494949] mt-6'>Details</button>
            </Link>
        </div>
    );
};

Event.propTypes = {
    event: PropTypes.object
};

export default Event;