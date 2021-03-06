const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-widgets">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-9">
              <div className="foot-about">
                <h2>
                  <a className="foot-logo" href="#">
                    <img
                      src="../../static/images/foot-logo.png"
                      alt=""
                      style={{ height: "35px" }}
                    />
                  </a>
                </h2>

                <p>
                  STUDEM is a joint project between Silba - Initiative for
                  Dialogue and Democracy and CREEDD (Green School).
                </p>

                <ul className="d-flex flex-wrap align-items-center">
                  <li>
                    <a href="https://www.facebook.com/pg/studemproject/">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/studem_md/">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
              {/*<!-- .foot-about -->*/}
            </div>
            {/*<!-- .col -->*/}

            <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
              <div className="foot-contact">
                <h2>Contact</h2>

                <ul>
                  {/*<li>*/}
                  {/*  <i className="fa fa-phone"></i>*/}
                  {/*  <span>+45 555 8484</span>*/}
                  {/*</li>*/}
                  <li>
                    <i className="fa fa-envelope"></i>
                    <span>office@studem.md</span>
                  </li>
                  <li>
                    <i className="fa fa-map-marker"></i>
                    <span>Strada 31 August 14A, Balti, Moldova</span>
                  </li>
                </ul>
              </div>
              {/*<!-- .foot-contact -->*/}
            </div>
            {/*<!-- .col -->*/}
          </div>
          {/*<!-- .row -->*/}
        </div>
        {/*<!-- .container -->*/}
      </div>
      {/*<!-- .footer-widgets -->*/}

      <div className="footer-bar">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="m-0">
                {/*<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->*/}
                Copyright &copy; 2019 All rights reserved | Template by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
                {/*<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->*/}
              </p>
            </div>
            {/*<!-- .col-12 -->*/}
          </div>
          {/*<!-- .row -->*/}
        </div>
        {/*<!-- .container -->*/}
      </div>
      {/*<!-- .footer-bar -->*/}
    </footer>
  );
};

export default Footer;
