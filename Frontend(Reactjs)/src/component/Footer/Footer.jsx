import fb from "../../assets/footer/img1.png";
import insta from "../../assets/footer/instagram.png";
import linke from "../../assets/footer/linkedin.png";
import tiktok from "../../assets/footer/tik-tok.png";
import youtube from "../../assets/footer/youtube.png";
import logoBlack from "../../assets/logo-removebg.png";
const Footer = () => {
  return (
    <div className="w-full h-[60svh] bg-black text-white relative">
      <div className="p-[60px] flex flex-col justify-evenly gap-y-[15vh] h-full w-full">
        <div className="flex items-center justify-center gap-x-28">
          <div className="footer-text custom-underline">
            <h4>Security & Brand</h4>
            <a>Copyright Infringement</a>
            <a>Report Security Issue</a>
            <a>Trademark Notice</a>
          </div>
          <div className="footer-text">
            <h4>Website</h4>
            <a>Accessibility</a>
            <a>Digital Accessibility</a>
            <a>Privacy statement</a>
          </div>
          <div className="footer-text">
            <h4>Get In Touch</h4>
            <a>Contact Harvard</a>
            <a>Maps & Directions</a>
            <a>Jobs</a>
          </div>
        </div>
        <div className="flex justify-between items-center h-auto mb-5">
          <div>
            <p className="text-gray-500">
              Copyright © 2025 The President and Fellows of Harvard <br />
              College
            </p>
          </div>
          <div className="flex justify-center items-center gap-x-12 footer-social">
            <img src={fb} alt="fb" />
            <img src={insta} alt="fb" />
            <img src={tiktok} alt="fb" />
            <img src={linke} alt="fb" />
            <img src={youtube} alt="fb" />
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-center items-center gap-y-[-20px] absolute bottom-8 left-[45%] -translate-x-[45]">
        <img src={logoBlack} className="w-10 sm:w-16 md:w-28 invert" />
        <h1 className="text-4xl font-bold text-center">LUC NGAN</h1>
        <h2 className="text-2xl font-bold text-center">COLLEGE</h2>
      </div>
    </div>
  );
};

export default Footer;
