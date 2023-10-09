import contact from '../../assets/contact.jpg';

const Contact = () => {
    return (
        <div>
            <div className="hero h-[60vh]" style={{ backgroundImage: `url(${contact})` }}>
                <div className="hero-overlay bg-black bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Contact Us</h1>
                    </div>
                </div>
            </div>
            <div className="my-16 max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
                <div className="flex flex-col md:flex-row gap-10 justify-between p-4">
                    <div className="flex-1 p-4">
                        <h2 className="text-2xl font-semibold">We are here for you! Arrange a event.</h2>
                        <p className="mt-2 text-justify">
                            Have questions or need assistance? Contact us today, and our dedicated team will be happy to help. We look forward to hearing from you!
                        </p>
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold">Opening Hours</h3>
                            <p>Sat - Thu (9:00 am - 5:00 pm)</p>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold">Email Us</h3>
                            <p className="text-blue-500">bdmamun@gmail.com</p>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold">Address</h3>
                            <p>
                                Gazipur<br />
                                Dhaka, Bangladesh
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 p-4">
                        <h2 className="text-2xl font-semibold">Contact Form</h2>
                        <form className="mt-4">
                            <div className="mb-4">
                                <label className="block text-sm font-semibold">Name</label>
                                <input type="text" className="border rounded w-full py-2 px-3" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold">Email</label>
                                <input type="email" className="border rounded w-full py-2 px-3" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold">Phone</label>
                                <input type="tel" className="border rounded w-full py-2 px-3" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-semibold">Message</label>
                                <textarea rows="4" className="border rounded w-full py-2 px-3"></textarea>
                            </div>
                            <button type="submit" className="bg-[#ED4A43] text-white py-2 px-4 rounded">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;