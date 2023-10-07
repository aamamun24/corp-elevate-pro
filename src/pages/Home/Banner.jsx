import banner from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner}` }}>
            <div className="hero-overlay bg-black bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                    <h1 className="mb-5 text-5xl font-bold">Corporate Event Experts</h1>
                    <p className="mb-5">Discover seamless event planning and execution that leaves a lasting impression. Our experienced team specializes in crafting unforgettable corporate events tailored to your unique needs. Let us transform your vision into reality. Explore our services now!</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;