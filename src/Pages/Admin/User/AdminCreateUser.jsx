import React, { useEffect, useState } from 'react'
import Breadcumb from '../../../Component/Breadcumb'
import Sidebar from '../Sidebar'
import { Link, useNavigate } from 'react-router-dom'
import FormValidator from '../../../Validator/FormValidator'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, createUser } from "../../../Redux/ActionCreators/UserActionCreater"
export default function AdminCreateUser() {

    let [data, setData] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        cpassword: "",
        role: "Admin",
        active: true
    })
    let [errorMassage, setErrorMassage] = useState({
        name: "Name Field Is Mendatory",
        username: "User Name Field Is Mendatory",
        email: "Email Address Field Is Mendatory",
        phone: "Phone Number Field Is Mendatory",
        password: "Password Field Is Mendatory",

    })
    let [show, setShow] = useState(false)
    let navigate = useNavigate()

    let UserStateData = useSelector(state => state.UserStateData)
    let dispatch = useDispatch()

    function getInputData(e) {
        var { name, value } = e.target

        // var name = e.target.name
        // var value = e.target.files && e.target.files.length ? "User/" + e.target.files[0].name : e.target.value
        //var value = e.target.files && e.target.files.length ?e.target.files[0] : e.target.value
        setErrorMassage((old) => {
            return {
                ...old,
                [name]: FormValidator(e)
            }
        })
        setData((old) => {
            return {
                ...old,
                [name]: name === "active" ? (value === "1" ? true : false) : value
            }
        })
    }
    function PostInputData(e) {
        e.preventDefault()
        if (data.password === data.cpassword) {
            let error = Object.values(errorMassage).find(x => x !== "")
            if (error)
                setShow(true)
            else {
                let item = UserStateData.find(x => x.username.toLowerCase() === data.username.toLowerCase() || x.email.toLowerCase() === data.email.toLowerCase())
                if (item) {
                    setShow(true)
                    setErrorMassage((old) => {
                        return {
                            ...old,
                            'username': item.username === data.username ? 'User  With Same User Name Already Exist' : '',
                            'email': item.email === data.email ? 'User  With Same Email Address Already Exist' : ''
                        }
                    })
                    return
                }
                dispatch(createUser({ ...data }))
                // let formData = new FormData() 01/04/2025
                // formData.append("name", data.name)
                // formData.append("pic", data.pic)
                // formData.append("active", data.active)
                // dispatch(createUser(formData))
                navigate("/admin/user")
            }
        }
        else {
            setShow(true)
            setErrorMassage((old) => {
                return {
                    ...old,
                    'password': 'Password and Confirm Password Does not Matched',
                }
            })
            return
        }
    }
    useEffect(() => {
        dispatch(getUser())
    }, [UserStateData.length])
    return (
        <>
            <Breadcumb title="Admin" />
            <div className='container-fluid my-3'>
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary w-100 p-2 text-center text-light'>User<Link to="/admin/user"><i className='fa fa-long-arrow-left text-light float-end'></i></Link></h5>
                        <form onSubmit={PostInputData}>
                            <div className="row">

                                <div className="col-md-6 mb-3">
                                    <label>Name*</label>
                                    <input type="text" name="name" onChange={getInputData} placeholder='Full Name' className={`form-control border-3 ${show && errorMassage.name ? 'border-danger' : 'border-primary'}`} />
                                    {show && errorMassage.name ? <p className='text-danger'>{errorMassage.name}</p> : null}
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label>Phone*</label>
                                    <input type="text" name="phone" onChange={getInputData} placeholder='Phone Number' className={`form-control border-3 ${show && errorMassage.phone ? 'border-danger' : 'border-primary'}`} />
                                    {show && errorMassage.phone ? <p className='text-danger'>{errorMassage.phone}</p> : null}
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label>User Name*</label>
                                    <input type="text" name="username" onChange={getInputData} placeholder='User Name' className={`form-control border-3 ${show && errorMassage.username ? 'border-danger' : 'border-primary'}`} />
                                    {show && errorMassage.username ? <p className='text-danger'>{errorMassage.username}</p> : null}
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label>Email Address*</label>
                                    <input type="text" name="email" onChange={getInputData} placeholder='Email Address' className={`form-control border-3 ${show && errorMassage.email ? 'border-danger' : 'border-primary'}`} />
                                    {show && errorMassage.email ? <p className='text-danger'>{errorMassage.email}</p> : null}
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label>Password*</label>
                                    <input type="password" name="password" onChange={getInputData} placeholder='Password' className={`form-control border-3 ${show && errorMassage.password ? 'border-danger' : 'border-primary'}`} />
                                    {show && errorMassage.password ? <p className='text-danger'>{errorMassage.password}</p> : null}
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label>Confirma Password*</label>
                                    <input type="password" name="cpassword" onChange={getInputData} placeholder='Confirm Password' className={`form-control border-3 ${show && errorMassage.password ? 'border-danger' : 'border-primary'}`} />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label>Role*</label>
                                    <select name="role" onChange={getInputData} className='form-select border-3 border-primary'>
                                        <option value="Admin">Admin</option>
                                        <option value="Super Admin">Super Admin</option>
                                    </select>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label>Active*</label>
                                    <select name="active" onChange={getInputData} className='form-select border-3 border-primary'>
                                        <option value="1">Yes</option>
                                        <option value="0">NO</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <button type="submit" className='btn btn-primary w-100'>Create</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
