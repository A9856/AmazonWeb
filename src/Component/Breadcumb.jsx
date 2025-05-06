import React from 'react'
import { Link } from 'react-router-dom'

export default function Breadcumb({ title }) {
    return (
        <>
        <br/>
        <br/>
        <section id="hero" className="bg-body-tertiary bd">
            <div className="container">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/"className="text-dark">Home</Link></li>
                    <li className="breadcrumb-item text-dark" aria-current="page">{title}</li>
                </ol>
            </div>
        </section>
        </>
    )
}
