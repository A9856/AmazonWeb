import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Breadcumb from '../../../Component/Breadcumb'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt/css/dataTables.dataTables.min.css'
import { getMaincategory, deleteMaincategory } from "../../../Redux/ActionCreators/MaincategoryActionCreator"
export default function AdminMaincategory() {
    let dispatch = useDispatch()
    let MaincategoryStateData = useSelector(state => state.MaincategoryStateData)
    function deleteRecord(id) {
        if (window.confirm("Are you sure to Delete that Item : ")) {
            dispatch(deleteMaincategory({ id: id }))
            getAPIData()
        }
    }
    function getAPIData() {
        dispatch(getMaincategory())
        // console.log("🧾 State data length:", MaincategoryStateData.length);
        if (MaincategoryStateData.length) {
            var time = setTimeout(() => {
                $('#myTable').DataTable()
            },300)
            return time
        }
    }
    useEffect(() => {
        let time = getAPIData()
        return () => clearTimeout(time)
    }, [MaincategoryStateData.length])
    return (
        <>
            <Breadcumb title="Admin" />
            <div className='container-fluid my-3'>
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary w-100 p-2 text-center text-light'>Maincategory<Link to="/admin/maincategory/create"><i className='fa fa-plus text-light float-end'></i></Link></h5>
                        <div className="table-responsive">
                            <table id="myTable" className='table table-bordered table-striped table-hover'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Pic</th>
                                        <th>Active</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        MaincategoryStateData.map(item => {
                                            return <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>
                                                    <Link to={`${process.env.REACT_APP_BACKEND_SERVER}${item.pic}`} target='_blank'>
                                                        <img src={`${process.env.REACT_APP_BACKEND_SERVER}${item.pic}`} height={80} width={80} alt="" />
                                                    </Link>
                                                </td>
                                                <td>{item.active ? "Yes" : "No"}</td>
                                                <td><Link to={`/admin/maincategory/update/${item.id}`} className='btn btn-primary'><i className='fa fa-edit'></i></Link></td>
                                                <td>{localStorage.getItem("role")==="Super Admin"?<button className='btn btn-danger' onClick={() => deleteRecord(item.id)}><i className='fa fa-trash'></i></button>:null}</td>
                                            </tr>

                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

// import React, { useEffect,useState } from 'react'
// import Breadcumb from '../../../Component/Breadcumb'
// import Sidebar from '../Sidebar'
// import { Link } from 'react-router-dom'
// import $ from 'jquery';
// import 'datatables.net';
// import 'datatables.net-dt/css/dataTables.dataTables.min.css'
// export default function AdminMaincategory() {
//     let [MaincategoryStateData, setMaincategoryStateData] = useState([])
//     // let table = new DataTable('#myTable');
//     // let tablesRef = useRef()
//     // $('#myTable').DataTable()
//     async function deleteRecord(id) {
//         if (window.confirm("Are you sure to Delete that Item : ")) {
//             let response = await fetch(process.env.REACT_APP_BACKEND_SERVER + "maincategory/" + id, {
//                 method: "DELETE",
//                 headers: {
//                     "content-type": "application/json"
//                 }
//             })
//             response = await response.json()
//             getAPIData()
//         }
//     }

//     async function getAPIData() {
//         let response = await fetch(process.env.REACT_APP_BACKEND_SERVER + "maincategory", {
//             method: "GET",
//             headers: {
//                 "content-type": "application/json"
//             }
//         })
//         response = await response.json()
//         setMaincategoryStateData(response)
//         var time=setTimeout(() => {
//             $('#myTable').DataTable()
//         },300)
//         return time
//     }
//     useEffect(() => {
//         let time=getAPIData()
//         return()=>clearTimeout(time)
//     }, [])
//     return (
//         <>
//             <Breadcumb title="Admin" />
//             <div className='container-fluid my-3'>
//                 <div className="row">
//                     <div className="col-md-3">
//                         <Sidebar />
//                     </div>
//                     <div className="col-md-9">
//                         <h5 className='bg-primary w-100 p-2 text-center text-light'>Maincategory<Link to="/admin/maincategory/create"><i className='fa fa-plus text-light float-end'></i></Link></h5>
//                         <div className="table-responsive">
//                             <table id="myTable" className='table table-bordered table-striped table-hover'>
//                                 <thead>
//                                     <tr>
//                                         <th>ID</th>
//                                         <th>Name</th>
//                                         <th>Pic</th>
//                                         <th>Active</th>
//                                         <th></th>
//                                         <th></th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {
//                                         MaincategoryStateData.map(item => {
//                                             return <tr key={item.id}>
//                                                 <td>{item.id}</td>
//                                                 <td>{item.name}</td>
//                                                 <td>
//                                                     <Link to={`${process.env.REACT_APP_BACKEND_SERVER}${item.pic}`} target='_blank'>
//                                                         <img src={`${process.env.REACT_APP_BACKEND_SERVER}${item.pic}`} height={80} width={80} alt="" />
//                                                     </Link>


//                                                 </td>
//                                                 <td>{item.active ? "Yes" : "No"}</td>
//                                                 <td><Link to={`/admin/maincategory/update/${item.id}`} className='btn btn-primary'><i className='fa fa-edit'></i></Link></td>
//                                                 <td><button className='btn btn-danger' onClick={() => deleteRecord(item.id)}><i className='fa fa-trash'></i></button></td>
//                                             </tr>

//                                         })
//                                     }

//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </>
//     )
// }