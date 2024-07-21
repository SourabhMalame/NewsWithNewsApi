import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-2">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              NewsWebsite is your go-to source for the latest news from around
              the world. We provide reliable and unbiased news to keep you
              informed.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: contact@newswebsite.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: 123 News St, News City, NC 12345</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#facebook" className="text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#twitter" className="text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#instagram" className="text-white">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#linkedin" className="text-white">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center py-3">
          <p>&copy; 2024 NewsWebsite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
