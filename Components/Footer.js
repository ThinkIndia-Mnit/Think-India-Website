import Link from "next/link";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 abtTI">
            <h6>About Think India</h6>
            <p className="text-justify">
              Think India is an initiative to bring together the best talent of
              this country and to infuse them with a nation first attitude. An
              active forum of researchers, professionals and students where they
              debate on national issues, raise their concern and offer
              innovative solutions to problems. It is a platform for the leaders
              of tomorrow.it is the only way to win the battle of minds which is
              being relentlessly waged by the forces of anarchy and those who
              want the destruction of India. Think India connects and introduce
              them to the change makers and the process of development.
            </p>
          </div>
          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li>
                <a href="http://scanfcode.com/category/java-programming-language/">
                  Think India
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/android/">MNIT Jaipur</a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/c-language/">
                  YouthFest'22
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/back-end-development/">
                  Web Team
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/templates/">Join Us</a>
              </li>
            </ul>
          </div>
          <div className="col-xs-6 col-md-3">
            <h6>Sections</h6>
            <ul className="footer-links">
              <li>
                <Link href="/Sections/diy">
                  <a>DIY SECTION</a>
                </Link>
              </li>
              <li>
                <Link href="/Sections/heritage">
                  <a>HERITAGE &amp; ENVIORNMENT SECTION</a>
                </Link>
              </li>
              <li>
                <Link href="/Sections/debating">
                  <a>DEBATING SECTION</a>
                </Link>
              </li>
              <li>
                <Link href="/Sections/art">
                  <a>ART &amp; DESIGN SECTION</a>
                </Link>
              </li>
              <li>
                <Link href="/Sections/entp">
                  <a>ENTREPRENEURSHIP SECTION</a>
                </Link>
              </li>
            </ul>
            <h6>Other Team</h6>
            <ul className="footer-links">
              <li>
                <a href="http://scanfcode.com/about/">
                  PUBLICITY &amp; MANAGEMENT
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/contact/">SAANIDHYA MAGAZINE</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright © 2022 All Rights Reserved by
              <a href="#">Think India MNIT Jaipur</a>.
            </p>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a className="facebook" href="#">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a className="twitter" href="#">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a className="youtube" href="#">
                  <i className="fab fa-youtube" />
                </a>
              </li>
              <li>
                <a className="linkedin" href="#">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
              <li>
                <a className="github" href="#">
                  <i className="fab fa-github" />
                </a>
              </li>
              <li>
                <a className="instagram" href="#">
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
