import React from "react";
import Link from "next/link";
import Head from "next/head";
import Nav from "../../components/nav";
import Header from "../../src/components/Header/Header";
import Meta from "../../src/components/Meta/Meta";
import Welcome from "./components/Welcome";
import IconBoxes from "./components/IconBoxes";

const Home = () => (
  <div>
    <Meta title="Home" />
    <Header />
    <div className="home-page-welcome">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 order-2 order-lg-1">
            <div className="welcome-content">
              <header className="entry-header">
                <h2 className="entry-title">Welcome to STUDEM</h2>
              </header>
              {/*<!-- .entry-header -->*/}

              <div className="entry-content mt-5">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris tempus vestib ulum mauris quis aliquam. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Mauris tempus
                  vestibulum mauris quis aliquam. Integer accumsan sodales odio,
                  id tempus velit ullamcorper id. Quisque at erat eu libero
                  consequat tempus. Quisque molestie convallis tempus. Ut semper
                  purus metus, a euismod sapien sodales ac. Duis viverra
                  eleifend fermentum.
                </p>
              </div>
              {/*<!-- .entry-content -->*/}

              <div className="entry-footer mt-5">
                <a href="#" className="btn gradient-bg mr-2">
                  Read More
                </a>
              </div>
              {/*<!-- .entry-footer -->*/}
            </div>
            {/*<!-- .welcome-content -->*/}
          </div>
          {/*<!-- .col -->*/}

          <div className="col-12 col-lg-6 mt-4 order-1 order-lg-2">
            <img src="static/images/welcome.jpg" alt="welcome" />
          </div>
          {/*<!-- .col -->*/}
        </div>
        {/*<!-- .row -->*/}
      </div>
      {/*<!-- .container -->*/}
    </div>
    {/*<!-- .home-page-icon-boxes -->*/}

    <div className="home-page-icon-boxes">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
            <div className="icon-box">
              <figure className="d-flex justify-content-center">
                <img src="static/images/handshake.svg" alt="Member" />
                <img src="static/images/handshake.svg" alt="Member" />
              </figure>

              <header className="entry-header">
                <h3 className="entry-title">Become a Member</h3>
              </header>

              <div className="entry-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris tempus vestib ulum mauris quis aliquam.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
            <div className="icon-box">
              <figure className="d-flex justify-content-center">
                <img src="static/images/statistics.svg" alt="Democracy" />
                <img src="static/images/statistics.svg" alt="Democracy" />
              </figure>

              <header className="entry-header">
                <h3 className="entry-title">Democracy</h3>
              </header>

              <div className="entry-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris tempus vestib ulum mauris quis aliquam.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
            <div className="icon-box">
              <figure className="d-flex justify-content-center">
                <img src="static/images/balloons.svg" alt="Events" />
                <img src="static/images/balloons.svg" alt="Events" />
              </figure>

              <header className="entry-header">
                <h3 className="entry-title">Events</h3>
              </header>

              <div className="entry-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris tempus vestib ulum mauris quis aliquam.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*<!-- .row -->*/}
      </div>
      {/*<!-- .container -->*/}
    </div>
    {/*<!-- .home-page-icon-boxes -->*/}

    <div className="home-page-events">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="upcoming-events">
              <div className="section-heading">
                <h2 className="entry-title">Upcoming Events</h2>
              </div>
              {/*<!-- .section-heading -->*/}

              <div className="event-wrap d-flex flex-wrap justify-content-between">
                <figure className="m-0">
                  <img src="static/images/event-1.jpg" alt="" />
                </figure>

                <div className="event-content-wrap">
                  <header className="entry-header d-flex flex-wrap align-items-center">
                    <h3 className="entry-title w-100 m-0">
                      <a href="#">Fundraiser for Kids</a>
                    </h3>

                    <div className="posted-date">
                      <a href="#">Aug 25, 2018 </a>
                    </div>
                    {/*<!-- .posted-date -->*/}

                    <div className="cats-links">
                      <a href="#">Ball Room New York</a>
                    </div>
                    {/*<!-- .cats-links -->*/}
                  </header>
                  {/*<!-- .entry-header -->*/}

                  <div className="entry-content">
                    <p className="m-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris tempus vestib ulum mauris.
                    </p>
                  </div>
                  {/*<!-- .entry-content -->*/}

                  <div className="entry-footer">
                    <a href="#">Read More</a>
                  </div>
                  {/*<!-- .entry-footer -->*/}
                </div>
                {/*<!-- .event-content-wrap -->*/}
              </div>
              {/*<!-- .event-wrap -->*/}

              <div className="event-wrap d-flex flex-wrap justify-content-between">
                <figure className="m-0">
                  <img src="static/images/event-2.jpg" alt="" />
                </figure>

                <div className="event-content-wrap">
                  <header className="entry-header d-flex flex-wrap align-items-center">
                    <h3 className="entry-title w-100 m-0">
                      <a href="#">Bring water to the childrens</a>
                    </h3>

                    <div className="posted-date">
                      <a href="#">Aug 25, 2018 </a>
                    </div>
                    {/*<!-- .posted-date -->*/}

                    <div className="cats-links">
                      <a href="#">Ball Room New York</a>
                    </div>
                    {/*<!-- .cats-links -->*/}
                  </header>
                  {/*<!-- .entry-header -->*/}

                  <div className="entry-content">
                    <p className="m-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris tempus vestib ulum mauris.
                    </p>
                  </div>
                  {/*<!-- .entry-content -->*/}

                  <div className="entry-footer">
                    <a href="#">Read More</a>
                  </div>
                  {/*<!-- .entry-footer -->*/}
                </div>
                {/*<!-- .event-content-wrap -->*/}
              </div>
              {/*<!-- .event-wrap -->*/}

              <div className="event-wrap d-flex flex-wrap justify-content-between">
                <figure className="m-0">
                  <img src="static/images/event-3.jpg" alt="" />
                </figure>

                <div className="event-content-wrap">
                  <header className="entry-header d-flex flex-wrap align-items-center">
                    <h3 className="entry-title w-100 m-0">
                      <a href="#">Bring water to the childrens</a>
                    </h3>

                    <div className="posted-date">
                      <a href="#">Aug 25, 2018 </a>
                    </div>
                    {/*<!-- .posted-date -->*/}

                    <div className="cats-links">
                      <a href="#">Ball Room New York</a>
                    </div>
                    {/*<!-- .cats-links -->*/}
                  </header>
                  {/*<!-- .entry-header -->*/}

                  <div className="entry-content">
                    <p className="m-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris tempus vestib ulum mauris.
                    </p>
                  </div>
                  {/*<!-- .entry-content -->*/}

                  <div className="entry-footer">
                    <a href="#">Read More</a>
                  </div>
                  {/*<!-- .entry-footer -->*/}
                </div>
                {/*<!-- .event-content-wrap -->*/}
              </div>
              {/*<!-- .event-wrap -->*/}
            </div>
            {/*<!-- .upcoming-events -->*/}
          </div>
          {/*<!-- .col -->*/}

          <div className="col-12 col-lg-6">
            <div className="featured-cause">
              <div className="section-heading">
                <h2 className="entry-title">Host An Event</h2>
              </div>
              {/*<!-- .section-heading -->*/}

              <div className="cause-wrap d-flex flex-wrap justify-content-between">
                <div className="cause-content-wrap">
                  <div className="entry-content">
                    <p className="m-0">
                      You can host your events at STUDEM. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit. Mauris tempus vestib
                      ulum mauris. Lorem ipsum dolor sit amet, consectetur.
                    </p>
                  </div>
                  {/*<!-- .entry-content -->*/}

                  <div className="entry-footer mt-5">
                    <a href="#" className="btn gradient-bg mr-2">
                      Learn More
                    </a>
                  </div>
                  {/*<!-- .entry-footer -->*/}
                </div>
                {/*<!-- .cause-content-wrap -->*/}
              </div>
              {/*<!-- .cause-wrap -->*/}
            </div>
            {/*<!-- .featured-cause -->*/}
          </div>
          {/*<!-- .col -->*/}
        </div>
        {/*<!-- .row -->*/}
      </div>
      {/*<!-- .container -->*/}
    </div>
    {/*<!-- .home-page-events -->*/}
  </div>
);

export default Home;
