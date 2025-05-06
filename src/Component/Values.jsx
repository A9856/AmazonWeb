import React from 'react'

export default function Values() {
    return (
        <>
            <section id="values" className="values section">
                <div className="container section-title" data-aos="fade-up">
                    <h2>Our Values</h2>
                    <p>What we value most<br/></p>
                </div>

                <div className="container">

                    <div className="row gy-4">

                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="card">
                                <img src="assets/img/values-3.png" className="img-fluid" alt="" />
                                <h3> Customer First</h3>
                                <p>We prioritize our customers above all. Every product, service, and feature we offer is designed to provide a smooth, satisfying shopping experience with full transparency and trust..</p>
                            </div>
                        </div>

                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="card">
                                <img src="assets/img/values-2.png" className="img-fluid" alt=""/>
                                    <h3>Quality Assurance</h3>
                                    <p>We are committed to offering only the best. Every item listed on APNA BAZAR is carefully selected to meet high standards of quality, durability, and value.</p>
                            </div>
                        </div>

                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
                            <div className="card">
                                <img src="assets/img/values-1.png" className="img-fluid" alt="" />
                                <h3> Innovation & Convenience.</h3>
                                <p>We constantly evolve to make your shopping easier. From user-friendly design to fast delivery and secure payments, our goal is to simplify every step of your online journey.</p>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}
