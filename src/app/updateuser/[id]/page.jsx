'use client';
import axios from 'axios';
import { Formik } from 'formik';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const UpdateUser = () => {

    const { id } = useParams();
    const [userData, setUserData] = useState(null)

    const fetchUserData = async () => {
        const res = await axios.get(`http://localhost:5000/user/getbyid/${id}`);
        console.log(res.data);
        setUserData(res.data);
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    const formSubmit = (values) => {
        console.log(values);
        axios.put(`http://localhost:5000/user/update/` + id, values)
            .then((result) => {
                toast.success('User Updated Successfully');
            }).catch((err) => {
                console.log(err);
                console.log(err?.response?.status);
                toast.error('Something Went Wrong');
            });
    }

    return (
        <div className='lg:max-w-xl mx-auto mt-10'>
            <div className='shadow-lg border rounded-lg p-8'>
                <h1 className='text-center text-2xl font-bold mb-5'>Update user</h1>

                {
                    userData !== null ? (
                        <Formik initialValues={userData} onSubmit={formSubmit}>
                            {(updateForm) => {
                                return <form onSubmit={updateForm.handleSubmit}>

                                    <label htmlFor="name">Name</label>
                                    <input
                                        className='w-full p-2 border rounded-lg my-2 bg-gray-100'
                                        type="text" id='name' onChange={updateForm.handleChange} value={updateForm.values.name} />

                                    <label htmlFor="email">Email</label>
                                    <input
                                        className='w-full p-2 border rounded-lg my-2 bg-gray-100'
                                        type="email" id='email' onChange={updateForm.handleChange} value={updateForm.values.email} />

                                    <label htmlFor="password">password</label>
                                    <input
                                        className='w-full p-2 border rounded-lg my-2 bg-gray-100'
                                        type="password" id='password' onChange={updateForm.handleChange} value={updateForm.values.password} />

                                    <label htmlFor="city">City</label>
                                    <input
                                        className='w-full p-2 border rounded-lg my-2 bg-gray-100'
                                        type="text" id='city' onChange={updateForm.handleChange} value={updateForm.values.city} />

                                    <button
                                        type='submit'
                                        className='bg-black flex items-center gap-2 justify-center mt-6 px-3 py-2 rounded text-white font-bold w-full disabled:bg-gray-600'>Submit</button>

                                </form>
                            }}
                        </Formik>
                    ) : (
                        <p className="text-center mt-10">Loading...</p>
                    )
                }

            </div>
        </div>
    )
}

export default UpdateUser;