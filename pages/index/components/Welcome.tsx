const Welcome = () => (
  <div className="home-page-welcome">
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6 order-2 order-lg-1">
          <div className="welcome-content">
            <header className="entry-header">
              <h2 className="entry-title">Welcome to STUDEM</h2>
            </header>

            <div className="entry-content mt-5">
              <p>
                STUDEM is a ... Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                tempus vestibulum mauris quis aliquam. Integer accumsan sodales
                odio, id tempus velit ullamcorper id. Quisque at erat eu libero
                consequat tempus. Quisque molestie convallis tempus. Ut semper
                purus metus, a euismod sapien sodales ac. Duis viverra eleifend
                fermentum.
              </p>
            </div>

            <div className="entry-footer mt-5">
              <a href="#" className="btn gradient-bg mr-2">
                Read More
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6 mt-4 order-1 order-lg-2">
          <img src="../../static/images/welcome.jpg" alt="Welcome to STUDEM" />
        </div>
      </div>
    </div>
  </div>
);

export default Welcome;