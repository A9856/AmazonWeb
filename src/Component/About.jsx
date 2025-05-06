import React from 'react'
import { Link } from 'react-router-dom'

export default function About({ title }) {
  return (
    <>
      <section id="about" className="about section">

        <div className="container" data-aos="fade-up">
          <div className="row gx-0">

            <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
              <div className="content">
                <h3>Who We Are</h3>
                <h2>APNA BAZAR – Your Trusted Online Marketplace for Affordable, High-Quality Products Delivered Right to Your Doorstep</h2>
                <p className='text-justify'>
                  Welcome to APNA BAZAR, your go-to online store for a seamless and budget-friendly shopping experience. We offer a wide variety of products including clothing, electronics, home essentials, personal care, and much more—all handpicked to ensure quality and value. At APNA BAZAR, we believe in making everyday shopping easy, reliable, and affordable for everyone. With fast delivery, secure payments, and dedicated customer support, your satisfaction is our priority. Whether you’re shopping for daily needs or special occasions, APNA BAZAR is here to serve you with trust and convenience. Join our growing community of happy customers today!
                </p>
                <div className="text-center text-lg-start">
                  {
                    title === "Home" ?
                      <Link to="/about" className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                        <span>Read More</span>
                        <i className="bi bi-arrow-right"></i>
                      </Link> : null
                  }
                </div>
              </div>
            </div>

            <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
              <img src="assets/img/banner6.jpg" className="img-fluid" alt="" />
            </div>

          </div>
        </div>

      </section>
    </>
  )
}
