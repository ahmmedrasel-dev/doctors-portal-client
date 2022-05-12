import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../assets/images/footer.png'

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer
      style={{
        background: `url(${footer})`,
        backgroundSize: 'cover'
      }}
      className="p-10 text-base-content max-w-7xl mx-auto">
      <div className='footer mb-8'>
        <div>
          <span className="footer-title">Services</span>
          <Link to='/about' className="link link-hover">Branding</Link>
          <Link to='/about' className="link link-hover">Design</Link>
          <Link to='/about' className="link link-hover">Marketing</Link>
          <Link to='/about' className="link link-hover">Advertisement</Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to='/home' className="link link-hover">About us</Link>
          <Link to='/home' className="link link-hover">Contact</Link>
          <Link to='/home' className="link link-hover">Jobs</Link>
          <Link to='/home' className="link link-hover">Press kit</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link to='/about' className="link link-hover">Terms of use</Link>
          <Link to='/about' className="link link-hover">Privacy policy</Link>
          <Link to='/about' className="link link-hover">Cookie policy</Link>
        </div>
      </div>

      <div className='text-center'>
        <p>Copyright &copy; {year} - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;