import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styleFooter from "../style_sheets/Footer.module.css"; 
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={`bg-dark text-light ${styleFooter.footer}`}>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className={styleFooter.footerHeader}>About Us</h5>
            <p className={styleFooter.footerText}>
              We are dedicated to creating unforgettable travel experiences.
              Explore Sri Lanka's natural beauty, vibrant culture, and hidden
              treasures with our expert services. Your adventure starts here!
            </p>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
  <h5 className={styleFooter.footerHeader}>Quick Links</h5>
  <ul className="list-unstyled d-flex flex-column gap-2">
    <li>
      <a href="/home" className={styleFooter.footerLink}>
        Home
      </a>
    </li>
    <li>
      <a href="/allservices" className={styleFooter.footerLink}>
        Services
      </a>
    </li>
    <li>
      <a href="/view/hotel" className={styleFooter.footerLink}>
      Hotels
      </a>
    </li>
    <li>
      <a href="/view/cuspackage" className={styleFooter.footerLink}>
      Tour Packages
      </a>
    </li>
  </ul>
</div>


          {/* Contact Section */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className={styleFooter.footerHeader}>Contact Us</h5>
            <p className={styleFooter.footerText}>
              Address: 123 Adventure St., Colombo, Sri Lanka
            </p>
            <p className={styleFooter.footerText}>Phone: +94 77 123 4567</p>
            <p className={styleFooter.footerText}>Email: info@exploresrilanka.com</p>
          </div>

          {/* Social Media Section */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className={styleFooter.footerHeader}>Follow Us</h5>
            <div className="d-flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styleFooter.socialLink}
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styleFooter.socialLink}
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styleFooter.socialLink}
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styleFooter.socialLink}
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className={styleFooter.footerCopy}>
            © {new Date().getFullYear()} Explore Sri Lanka. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
