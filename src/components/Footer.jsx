import Logo from "../assets/images/logo.png"

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-gray-400 text-black ">
            <aside>
                <img className="w-20" src={Logo} alt="" />
                <p className="font-bold">
                    <span className="pixel font-bold">All Phone Brands</span> <br />Developed by <strong className="text-rose-500">Md. Adib Arman Shuvro</strong>
                </p>
                <p>Copyright © 2023 - All right reserved</p>
            </aside>
        </footer>
    );
};

export default Footer;