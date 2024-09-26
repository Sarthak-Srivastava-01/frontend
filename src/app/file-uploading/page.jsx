'use client';
import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const FileUploading = () => {

    const [preview, setPreview] = useState('');

    const uploadFile = (e) => {
        const file = e.target.files[0];
        const fd = new FormData();
        fd.append('file', file)
        fd.append('upload_preset', 'mypreset1');
        fd.append('cloud_name', 'dtkpwyyk8');

        axios.post('https://api.cloudinary.com/v1_1/dtkpwyyk8/image/upload', fd)
        .then((result) => {
            toast.success('File Uploaded Successfully');
            console.log(result.data);
            setPreview(result.data.url);
        }).catch((err) => {
            console.log(err);            
            toast.error('Something Went Wrong')
        });

    }
    
  return (
    <div className='flex justify-center items-center flex-col'>
        <label htmlFor="upload-file"
            className='block rounded-lgtext-xl border-2 boeder-dashed p-5 my-5 curso-pointer w-1/3 text-blue-500 text-center'>
            Click here to upload file
        </label>
        <input type="file" id='upload-file' onChange={uploadFile} hidden/>
        {
            preview &&(
                <img src={preview} alt="" className='max-w-[50%]'/>
            )
        }
    </div>
  )
}

export default FileUploading