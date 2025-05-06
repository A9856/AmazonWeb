import React from 'react'
import Breadcumb from '../../Component/Breadcumb'
import Sidebar from './Sidebar'
import Profile from '../../Component/Profile'

export default function AdminHome() {
    return (
        <>
            <Breadcumb title="Admin" />
            <div className='container-fluid my-3'>
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <Profile title="Admin Profile"/>
                    </div>
                </div>
            </div>
        </>
    )
}
