'use client';
import axios from 'axios'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const ManageUser = () => {

    const [userList, setuserList] = useState([])
    const router = useRouter();
    const token = localStorage.getItem('token');

    const fetchUsers = () => {
        const res = axios.get('http://localhost:5000/user/getall', {
            headers: {
                'x-auth-token' : token
            }}
        )
        .then((res) => {
            console.log(res.status);
            console.table(res.data);
            setuserList(res.data)
        }).catch((err) => {
            if(err?.response?.status === 403){
                toast.error('Login is required');
                router.push('/login');
            }
        });
    }
    
    useEffect(() => {
      fetchUsers();
    }, [])

    const deleteUser = (id) => {
        axios.delete('http://localhost:5000/user/delete/' + id)
        .then((result) => {
            toast.success('User Deleted Successfully');
            fetchUsers();
        }).catch((err) => {
            console.log(err);
            toast.error('Something went wrong');
        });
    }
    

  return (
    <div className='lg:max-w-[80%] mx-auto py-10'>
        <div className='border rounded-xl shadow-lg p-8'>
            <h1 className='text-center font-bold text-3xl mb-1'>Manage Users</h1>
            <hr />
            <table className='w-full'>
                <thead className='bg-violet-800'>
                    <tr className='text-white'>
                        <th className='p-2 border border-white'>Sr. No.</th>
                        <th className='p-2 border border-white'>Id</th>
                        <th className='p-2 border border-white'>Name</th>
                        <th className='p-2 border border-white'>Email</th>
                        <th className='p-2 border border-white'>City</th>
                        <th colSpan={2} className='p-2 border border-white'>Action</th>
                    </tr>
                </thead>
                <tbody className='bg-violet-200'>
                    {
                        userList.map((user, index) => {
                            return <tr key={user._id}>
                                <td className='p-2 border border-violet-700'>{index+1}</td>
                                <td className='p-2 border border-violet-700'>{user._id}</td>
                                <td className='p-2 border border-violet-700'>{user.name}</td>
                                <td className='p-2 border border-violet-700'>{user.email}</td>
                                <td className='p-2 border border-violet-700'>{user.city}</td>
                                <td className='p-2 border border-violet-700 text-center'>
                                    <button
                                     onClick={() => deleteUser(user._id)}
                                     className='bg-red-500 text-white px-4 py-2 rounded-lg'>Delete</button>
                                </td>
                                <td className='p-2 border border-violet-700 text-center'>
                                    <Link href={'/updateuser/'+user._id} className='bg-blue-500 text-white px-4 py-2 rounded-lg'>Update</Link>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ManageUser;