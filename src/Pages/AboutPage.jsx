import React from 'react'
import About from '../Component/About'
import Values from '../Component/Values'
import Facts from '../Component/Facts'
import Features from '../Component/Features'
import Testimonials from '../Component/Testimonials'
import Breadcumb from '../Component/Breadcumb'

export default function AboutPage() {
  return (
    <>
    <Breadcumb title="About Us"/>
    <About/>
    <Values/>
    <Facts/>
    <Features/>
    <Testimonials/>
    </>
  )
}
