import React, { useState } from 'react'
import Breadcumb from '../Component/Breadcumb'
import { Link } from 'react-router-dom'
import FormValidator from '../Validator/FormValidator'
import { createContactUs } from "../Redux/ActionCreators/ContactusActionCreator"
import { useDispatch } from 'react-redux'
export default function ContactUsPage() {
  let [data, setData] = useState("")
  let [errorMessage, setErrorMessage] = useState("")

  let [show, setShow] = useState(false)
  let [message, setMessage] = useState("")

  let dispatch = useDispatch()

  function getInputData(e) {
    let { name, value } = e.target

    setErrorMessage((old) => {
      return {
        ...old,
        [name]: FormValidator(e)
      }
    })
    setData((old) => {
      return {
        ...old,
        [name]: value
      }
    })
  }
  function postData(e) {
    e.preventDefault()
    let error = Object.values(errorMessage).find(x => x !== "")
    if (error)
      setShow(true)
    else {
      dispatch(createContactUs({ ...data, active: true, date: new Date() }))
      setData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      })
      setErrorMessage({
        name: "Name Fiels is Mendatory",
        email: "Email Fiels is Mendatory",
        phone: "Phone Fiels is Mendatory",
        subject: "Subject  Fiels is Mendatory",
        message: "Message Fiels is Mendatory",
      })
      setMessage("Thanks To Share Your Query With Us... Out Team Will Contact You Soon")
    }
  }
  return (
    <>
      <Breadcumb title="Contact Us" />
      <section id="contact" className="contact section">

        <div className="container section-title" data-aos="fade-up">

          <p className='text-light h'>Contact Us</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">

          <div className="row gy-4">

            <div className="col-lg-6">

              <div className="row gy-4">
                <div className="col-md-6">
                  <div className="info-item text-center h" data-aos="fade" data-aos-delay="200">
                    <i className="bi bi-geo-alt"></i>
                    <h3>Address</h3>
                    <p>{process.env.REACT_APP_ADDRESS}</p>

                  </div>
                </div>

                <div className="col-md-6">
                  <div className="info-item text-center h" data-aos="fade" data-aos-delay="300">
                    <i className="bi bi-telephone"></i>
                    <h3>Call Us</h3>
                    <Link className='text-light' to={`${process.env.REACT_APP_PHONE}`} target="_blank" rel='noreferrer'>{process.env.REACT_APP_PHONE}</Link>

                  </div>
                </div>

                <div className="col-md-6">
                  <div className="info-item text-center h" data-aos="fade" data-aos-delay="400">
                    <i className="bi bi-envelope"></i>
                    <h3>Email Us</h3>
                    <Link className='text-light'to={`${process.env.REACT_APP_EMAIL}`} target="_blank" rel='noreferrer'>{process.env.REACT_APP_EMAIL}</Link>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="info-item text-center h" data-aos="fade" data-aos-delay="500">
                    <i className="bi bi-clock"></i>
                    <h3>Whatsapp</h3>
                    <Link className='text-light'to={`https://wa.me/${process.env.REACT_APP_WHATSAPP}`} target="_blank" rel='noreferrer'>{process.env.REACT_APP_WHATSAPP}</Link>
                  </div>
                </div>

              </div>

            </div>

            <div className="col-lg-6">
              <div className="info-item h">
                <p className='text-center mb-3'>{message ? message : "Do you have any query? Please write to Us "}</p>
                <form onSubmit={postData}>
                  <div className="row gy-4">

                    <div className="col-12">
                      <input type="text" name="name" value={data.name} onChange={getInputData} className={`form-control ${show && errorMessage.name ? "border-danger" : ""}`} placeholder="Your Name" />
                      {show && errorMessage.name ? <p>{errorMessage.name}</p> : null}
                    </div>

                    <div className="col-md-6 ">
                      <input type="email" value={data.email} className={`form-control ${show && errorMessage.email ? "border-danger" : ""}`} onChange={getInputData} name="email" placeholder="Your Email" />
                      {show && errorMessage.email ? <p>{errorMessage.email}</p> : null}
                    </div>

                    <div className="col-md-6 ">
                      <input type="text" value={data.phone} onChange={getInputData} className={`form-control ${show && errorMessage.phone ? "border-danger" : ""}`} name="phone" placeholder="Your Phone Number" />
                      {show && errorMessage.phone ? <p>{errorMessage.phone}</p> : null}
                    </div>

                    <div className="col-12">
                      <input type="text" value={data.subject} onChange={getInputData} className={`form-control ${show && errorMessage.subject ? "border-danger" : ""}`} name="subject" placeholder="Subject" />
                      {show && errorMessage.subject ? <p>{errorMessage.subject}</p> : null}
                    </div>


                    <div className="col-12">
                      <textarea className={`form-control ${show && errorMessage.message ? "border-danger" : ""}`} onChange={getInputData} name="message" value={data.message} rows="5" placeholder="Message" ></textarea>
                      {show && errorMessage.message ? <p>{errorMessage.message}</p> : null}
                    </div>

                    <div className="col-12 text-center">
                      <button type="submit" className='btn text-light p'>Send Message</button>
                    </div>

                  </div>
                </form>
              </div>
            </div>

          </div>

        </div>

        <div className="w-100 mt-5">
          <iframe width="100%" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=Civil%20Line%20Prayagraz&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
      </section>
    </>
  )
}
