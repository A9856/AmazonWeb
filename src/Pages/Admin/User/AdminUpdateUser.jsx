import React, { useEffect, useState } from 'react'
import Breadcumb from '../../../Component/Breadcumb'
import Sidebar from '../Sidebar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import FormValidator from '../../../Validator/FormValidator'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, updateUser } from "../../../Redux/ActionCreators/UserActionCreater"
export default function AdminUpdateUser() {
    let { id } = useParams()

    let [data, setData] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        cpassword: "",
        role: "Admin",
        active: ""
    })
    let [errorMassage, setErrorMassage] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        password: "",

    })
    let [show, setShow] = useState(false)
    let navigate = useNavigate()
    let UserStateData = useSelector(state => state.UserStateData)
    let dispatch = useDispatch()
    function getInputData(e) {
        var { name, value } = e.target

        // var name = e.target.name
        // var value = e.target.files && e.target.files.length ? "User/" + e.target.files[0].name : e.target.value
        // var value = e.target.files && e.target.files.length ?e.target.files[0]: e.target.value

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
    async function PostInputData(e) {
        e.preventDefault()
        let error = Object.values(errorMassage).find(x => x !== "")
        if (error)
            setShow(true)
        else {
            let item = UserStateData.find(x => x.id !== id && (x.username.toLowerCase() === data.username.toLowerCase() || x.email.toLowerCase()))
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
            dispatch(updateUser({ ...data }))
            // let formData = new FormData()
            // formData.append("_id", data._id)
            // formData.append("name", data.name)
            // formData.append("pic", data.pic)
            // formData.append("active", data.active)
            // dispatch(createUser(formData))

            navigate("/admin/user")

        }
    }

    useEffect(() => {
        dispatch(getUser())
        if (UserStateData.length) {
            let item = UserStateData.find(x => x.id === id)
            if (item.role === "Buyer")
                navigate("/admin/user")
            setData(item)
        }
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
                                    <input type="text" name="name" value={data.name} onChange={getInputData} placeholder='Full Name' className={`form-control border-3 ${show && errorMassage.name ? 'border-danger' : 'border-primary'}`} />
                                    {show && errorMassage.name ? <p className='text-danger'>{errorMassage.name}</p> : null}
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label>Phone*</label>
                                    <input type="text" name="phone" value={data.phone} onChange={getInputData} placeholder='Phone Number' className={`form-control border-3 ${show && errorMassage.phone ? 'border-danger' : 'border-primary'}`} />
                                    {show && errorMassage.phone ? <p className='text-danger'>{errorMassage.phone}</p> : null}
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label>User Name*</label>
                                    <input type="text" name="username" value={data.username} onChange={getInputData} placeholder='User Name' className={`form-control border-3 ${show && errorMassage.username ? 'border-danger' : 'border-primary'}`} />
                                    {show && errorMassage.username ? <p className='text-danger'>{errorMassage.username}</p> : null}
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label>Email Address*</label>
                                    <input type="text" name="email" value={data.email} onChange={getInputData} placeholder='Email Address' className={`form-control border-3 ${show && errorMassage.email ? 'border-danger' : 'border-primary'}`} />
                                    {show && errorMassage.email ? <p className='text-danger'>{errorMassage.email}</p> : null}
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label>Role*</label>
                                    <select name="role" onChange={getInputData} value={data.role} className='form-select border-3 border-primary'>
                                        <option value="Admin">Admin</option>
                                        <option value="Super Admin">Super Admin</option>
                                    </select>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label>Active*</label>
                                    <select name="active" onChange={getInputData} value={data.active} className='form-select border-3 border-primary'>
                                        <option value="1">Yes</option>
                                        <option value="0">NO</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <button type="submit" className='btn btn-primary w-100'>Update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
