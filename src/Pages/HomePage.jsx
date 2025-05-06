import React, { useEffect } from 'react'
import Values from '../Component/Values'
import Facts from '../Component/Facts'
import Features from '../Component/Features'
import ProductSlider from '../Component/ProductSlider'
import Product from '../Component/Product'
import Testimonials from '../Component/Testimonials'
import Category from '../Component/Category'
import About from '../Component/About'
import { Link } from 'react-router-dom'
import {getMaincategory} from"../Redux/ActionCreators/MaincategoryActionCreator"
import {getProduct} from"../Redux/ActionCreators/ProductActionCreator"
import { useDispatch, useSelector } from 'react-redux'
export default function HomePage() {
  let MaincategoryStateData = useSelector(state => state.MaincategoryStateData)
  let ProductStateData = useSelector(state => state.ProductStateData)

  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMaincategory())
  }, [MaincategoryStateData.length])

  useEffect(() => {
    dispatch(getProduct())
  }, [ProductStateData.length])
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 9"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="9" aria-label="Slide 10"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <section id="hero" className="hero section">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                    <h1 data-aos="fade-up">We offer modern and top brands products for male</h1>
                    <p data-aos="fade-up" data-aos-delay="100">We Deals in Top 50+ brands and provide upto 90% Descount on top and latest fashion brands.<br/>
                    "TrendTreasures" suggests a collection of valuable and fashionable items that are currently popular or in-demand. It conveys the idea that customers can discover unique, trendy products, much like finding hidden gems or treasures in the marketplace. The name implies a curated experience where style and value come together, making it an attractive choice for an e-commerce platform focused on trendy goods.
                    </p>
                    <div className="d-flex flex-column flex-md-row" data-aos="fade-up" data-aos-delay="200">
                      <Link to="/shop?mc=Male" className="btn-get-started">Shop Now<i className="bi bi-arrow-right"></i></Link>
                    </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out">
                    <img src="/assets/img/banner7.jpg" className="img-fluid animated" alt="" />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="carousel-item">
            <section id="hero" className="hero section">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                    <h1 data-aos="fade-up">We offer modern and top brands products for female</h1>
                    <p data-aos="fade-up" data-aos-delay="100">We Deals in Top 50+ brands and provide upto 90% Descount on top and latest fashion brands.<br/>
                    "TrendTreasures" suggests a collection of valuable and fashionable items that are currently popular or in-demand. It conveys the idea that customers can discover unique, trendy products, much like finding hidden gems or treasures in the marketplace. The name implies a curated experience where style and value come together, making it an attractive choice for an e-commerce platform focused on trendy goods.</p>
                    <div className="d-flex flex-column flex-md-row" data-aos="fade-up" data-aos-delay="200">
                      <Link to="/shop?mc=Female" className="btn-get-started">Shop Now<i className="bi bi-arrow-right"></i></Link>
                    </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out">
                    <img src="/assets/img/banner2.jpg" className="img-fluid animated" alt="" />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="carousel-item">
            <section id="hero" className="hero section">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                    <h1 data-aos="fade-up">We offer modern and top brands products for kids</h1>
                    <p data-aos="fade-up" data-aos-delay="100">We Deals in Top 50+ brands and provide upto 90% Descount on top and latest fashion brands.<br/>
                    "TrendTreasures" suggests a collection of valuable and fashionable items that are currently popular or in-demand. It conveys the idea that customers can discover unique, trendy products, much like finding hidden gems or treasures in the marketplace. The name implies a curated experience where style and value come together, making it an attractive choice for an e-commerce platform focused on trendy goods.</p>
                    <div className="d-flex flex-column flex-md-row" data-aos="fade-up" data-aos-delay="200">
                      <Link to="/shop?mc=Kids" className="btn-get-started">Shop Now<i className="bi bi-arrow-right"></i></Link>
                    </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out">
                    <img src="/assets/img/banner3.jpg" className="img-fluid animated" alt="" />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="carousel-item">
            <section id="hero" className="hero section">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                    <h1 data-aos="fade-up">We offer modern and top brands products for kids</h1>
                    <p data-aos="fade-up" data-aos-delay="100">We Deals in Top 50+ brands and provide upto 90% Descount on top and latest fashion brands.<br/>
                    "TrendTreasures" suggests a collection of valuable and fashionable items that are currently popular or in-demand. It conveys the idea that customers can discover unique, trendy products, much like finding hidden gems or treasures in the marketplace. The name implies a curated experience where style and value come together, making it an attractive choice for an e-commerce platform focused on trendy goods.</p>
                    <div className="d-flex flex-column flex-md-row" data-aos="fade-up" data-aos-delay="200">
                      <Link to="/shop?mc=Kids" className="btn-get-started">Shop Now<i className="bi bi-arrow-right"></i></Link>
                    </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out">
                    <img src="/assets/img/banner4.jpg" className="img-fluid animated" alt="" />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="carousel-item">
            <section id="hero" className="hero section">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                    <h1 data-aos="fade-up">We offer modern and top brands products for kids</h1>
                    <p data-aos="fade-up" data-aos-delay="100">We Deals in Top 50+ brands and provide upto 90% Descount on top and latest fashion brands.<br/>
                    "TrendTreasures" suggests a collection of valuable and fashionable items that are currently popular or in-demand. It conveys the idea that customers can discover unique, trendy products, much like finding hidden gems or treasures in the marketplace. The name implies a curated experience where style and value come together, making it an attractive choice for an e-commerce platform focused on trendy goods.</p>
                    <div className="d-flex flex-column flex-md-row" data-aos="fade-up" data-aos-delay="200">
                      <Link to="/shop?mc=Kids" className="btn-get-started">Shop Now<i className="bi bi-arrow-right"></i></Link>
                    </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out">
                    <img src="/assets/img/banner5.jpg" className="img-fluid animated" alt="" />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="carousel-item">
            <section id="hero" className="hero section">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                    <h1 data-aos="fade-up">We offer modern and top brands products for kids</h1>
                    <p data-aos="fade-up" data-aos-delay="100">We Deals in Top 50+ brands and provide upto 90% Descount on top and latest fashion brands.<br/>
                    "TrendTreasures" suggests a collection of valuable and fashionable items that are currently popular or in-demand. It conveys the idea that customers can discover unique, trendy products, much like finding hidden gems or treasures in the marketplace. The name implies a curated experience where style and value come together, making it an attractive choice for an e-commerce platform focused on trendy goods.</p>
                    <div className="d-flex flex-column flex-md-row" data-aos="fade-up" data-aos-delay="200">
                      <Link to="/shop?mc=Kids" className="btn-get-started">Shop Now<i className="bi bi-arrow-right"></i></Link>
                    </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out">
                    <img src="/assets/img/banner6.jpg" className="img-fluid animated" alt="" />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="carousel-item">
            <section id="hero" className="hero section">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                    <h1 data-aos="fade-up">We offer modern and top brands products for kids</h1>
                    <p data-aos="fade-up" data-aos-delay="100">We Deals in Top 50+ brands and provide upto 90% Descount on top and latest fashion brands.<br/>
                    "TrendTreasures" suggests a collection of valuable and fashionable items that are currently popular or in-demand. It conveys the idea that customers can discover unique, trendy products, much like finding hidden gems or treasures in the marketplace. The name implies a curated experience where style and value come together, making it an attractive choice for an e-commerce platform focused on trendy goods.</p>
                    <div className="d-flex flex-column flex-md-row" data-aos="fade-up" data-aos-delay="200">
                      <Link to="/shop?mc=Kids" className="btn-get-started">Shop Now<i className="bi bi-arrow-right"></i></Link>
                    </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out">
                    <img src="/assets/img/banner7.jpg" className="img-fluid animated" alt="" />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="carousel-item">
            <section id="hero" className="hero section">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                    <h1 data-aos="fade-up">We offer modern and top brands products for kids</h1>
                    <p data-aos="fade-up" data-aos-delay="100">We Deals in Top 50+ brands and provide upto 90% Descount on top and latest fashion brands.<br/>
                    "TrendTreasures" suggests a collection of valuable and fashionable items that are currently popular or in-demand. It conveys the idea that customers can discover unique, trendy products, much like finding hidden gems or treasures in the marketplace. The name implies a curated experience where style and value come together, making it an attractive choice for an e-commerce platform focused on trendy goods.</p>
                    <div className="d-flex flex-column flex-md-row" data-aos="fade-up" data-aos-delay="200">
                      <Link to="/shop?mc=Kids" className="btn-get-started">Shop Now<i className="bi bi-arrow-right"></i></Link>
                    </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out">
                    <img src="/assets/img/banner8.jpg" className="img-fluid animated" alt="" />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="carousel-item">
            <section id="hero" className="hero section">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                    <h1 data-aos="fade-up">We offer modern and top brands products for kids</h1>
                    <p data-aos="fade-up" data-aos-delay="100">We Deals in Top 50+ brands and provide upto 90% Descount on top and latest fashion brands.<br/>
                    "TrendTreasures" suggests a collection of valuable and fashionable items that are currently popular or in-demand. It conveys the idea that customers can discover unique, trendy products, much like finding hidden gems or treasures in the marketplace. The name implies a curated experience where style and value come together, making it an attractive choice for an e-commerce platform focused on trendy goods.</p>
                    <div className="d-flex flex-column flex-md-row" data-aos="fade-up" data-aos-delay="200">
                      <Link to="/shop?mc=Kids" className="btn-get-started">Shop Now<i className="bi bi-arrow-right"></i></Link>
                    </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out">
                    <img src="/assets/img/banner9.jpg" className="img-fluid animated" alt="" />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="carousel-item">
            <section id="hero" className="hero section">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                    <h1 data-aos="fade-up">We offer modern and top brands products for kids</h1>
                    <p data-aos="fade-up" data-aos-delay="100">We Deals in Top 50+ brands and provide upto 90% Descount on top and latest fashion brands.<br/>
                    "TrendTreasures" suggests a collection of valuable and fashionable items that are currently popular or in-demand. It conveys the idea that customers can discover unique, trendy products, much like finding hidden gems or treasures in the marketplace. The name implies a curated experience where style and value come together, making it an attractive choice for an e-commerce platform focused on trendy goods.</p>
                    <div className="d-flex flex-column flex-md-row" data-aos="fade-up" data-aos-delay="200">
                      <Link to="/shop?mc=Kids" className="btn-get-started">Shop Now<i className="bi bi-arrow-right"></i></Link>
                    </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out">
                    <img src="/assets/img/banner10.jpg" className="img-fluid animated" alt="" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <About title="Home" />
      <Category title="Maincategory" />
      <Product/>
      <Values />
      {
        MaincategoryStateData.filter(x => x.active).map((item) => {
          return <ProductSlider key={item.id} title={item.name} data={ProductStateData.filter((x) => x.active && x.maincategory === item.name)} />
        })
      }
      <Facts />
      <Category title="Subcategory" />
      <Features />
      <Testimonials />
      <Category title="Brand" />
    </>
  )
}