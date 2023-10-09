import logo from '/logo.png'

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-black text-primary-content">
            <aside>
                <img className='w-36' src={logo} alt="logo" />
                <p className="font-bold">
                    Corporate Elevate. <br />Event Elevation Experts
                </p>
                <p>Copyright © 2023 - All right reserved by Abdullah Al Mamun</p>
            </aside>
        </footer>
    );
};

export default Footer;