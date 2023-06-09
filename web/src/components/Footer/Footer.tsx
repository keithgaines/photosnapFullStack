import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerlogo">
        <img src="/shared/desktop/logo.svg" alt='logo-white' className="header-logo-img" />
        <div className="socialicons">
          <span><img src="/shared/desktop/facebook.svg" alt="facebook icon" /></span>
          <span><img src="/shared/desktop/youtube.svg" alt="youtube icon" /></span>
          <span><img src="/shared/desktop/twitter.svg" alt="twitter icon" /></span>
          <span><img src="/shared/desktop/pinterest.svg" alt="pinterest icon" /></span>
          <span><img src="/shared/desktop/instagram.svg" alt="instagram icon" /></span>
        </div>
      </div>

      <div className="footerlinks">
        <ul>
          <a href="/">
            <li>Home</li>
          </a>
          <a href="/stories">
            <li>Stories</li>
          </a>
          <a href="/features">
            <li>Features</li>
          </a>
          <a href="/pricing">
            <li>Pricing</li>
          </a>
        </ul>
      </div>
      <div className="copyright">
        <p>Copyright 2019. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
