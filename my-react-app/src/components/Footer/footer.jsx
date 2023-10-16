import React from 'react';
import './footer.css';
import instagram from '../../../src/images/icons8-instagram-50.png';
import github from '../../../src/images/icons8-github-64.png';
import twitter from '../../../src/images/icons8-twitter-60.png';
import youtube from '../../../src/images/icons8-youtube-50.png';
import initials from '../../../src/images/initials.jpg';

const Footer = () => {
  return (
    <div className="exactf w-[100%] ">
      <footer className="footer">
        <div className="container-foot ">
          <div className="rowt">
            <div className="footer-col">
              <ul>
                <li className="lineh">
                  <a href="#">
                    <p>
                      I and my team hope you enjoyed looking at our portfolio.{' '}
                    </p>
                    <p>All together,happy forever</p>
                    <p>
                      Everything is possible through Christ that strengthens us
                      at A.N WebDev.
                    </p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="head-foot">Contact Us</h4>
              <ul className=" img-foot flex-col justify-center">
                <li>
                  <a href="https://www.instagram.com/yahs_luv/">
                    <img className="img-logo" src={instagram} alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/fiopefoluwa">
                    <img className="img-logo" src={github} alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/yahs_luv123">
                    <img className="img-logo" src={twitter} alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/">
                    <img className="img-logo" src={youtube} alt="" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="head-foot">Useful Link</h4>
              <ul className="list-foot flex-col">
                <li>
                  <a href="https://www.theverge.com/tech">Tech News</a>
                </li>
                <li>
                  <a href="#">Customer Service</a>
                </li>
                <li>
                  <a href="https://maps.app.goo.gl/UUWjm8S3wLrZR9Vx9">
                    Office Location{' '}
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="head-foot">Product</h4>
              <ul className="list-foot flex-col">
                <li>
                  <a href="#">Blog Creation</a>
                </li>
                <li>
                  <a href="#">Website Design</a>
                </li>
                <li>
                  <a href="#">Video Management</a>
                </li>
                <li>
                  <a href="#"></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="normal">
            <div>
              <img className="footer-logo" src={initials} alt="" />
            </div>
            <div className="footer-copyright">
              <p>Terms&Conditions apply.</p>
              <p>@{new Date().getFullYear()}CodeInn.All right reserved.</p>
            </div>
          </div>
          <div className="respons">
            <div className="footer-copyright">
              <p>Terms&Conditions apply.</p>
              <img className="footer-logo" src={initials} alt="" />
              <p>@{new Date().getFullYear()}CodeInn.All right reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
