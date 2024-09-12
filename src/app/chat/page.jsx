'use client';
import React, { useRef, useState } from 'react'

const Chat = () => {

    const [chat, setChat] = useState([])

    const inputRef = useRef(null);

    const addChat = (e) => {
        if(e.code === 'Enter') {
            const newChat = {text : e.target.value, sent_date : new Date()};
            setChat([...chat, newChat]);
            e.target.value = '';
        }
    }

    const addChatBtn = (e) => {
        const newChat = {text : inputRef.current.value, sent_date : new Date()};
        setChat([...chat, newChat]);
        inputRef.current.value = '';
    }

    return (
        <div>
            {/* Content */}
            <div className="relative h-screen">
                <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    {/* Title */}
                    <div className="text-center">
                        <a
                            className="inline-block mb-4 flex-none focus:outline-none focus:opacity-80"
                            aria-label="Preline"
                        >
                            <svg
                                fill="#2563eb"
                                height="50px"
                                width="50px"
                                version="1.1"
                                id="Capa_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 60 60"
                                xmlSpace="preserve"
                                stroke="#2563eb"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <g>
                                        {" "}
                                        <path d="M57.348,0.793H12.652C11.189,0.793,10,1.983,10,3.446v7.347h34.348c2.565,0,4.652,2.087,4.652,4.653v25.347h1.586 L60,50.207V3.446C60,1.983,58.811,0.793,57.348,0.793z" />{" "}
                                        <path d="M44.348,12.793H2.652C1.189,12.793,0,13.983,0,15.446v43.761l9.414-9.414h34.934c1.463,0,2.652-1.19,2.652-2.653V15.446 C47,13.983,45.811,12.793,44.348,12.793z M11,22.793h12c0.553,0,1,0.448,1,1s-0.447,1-1,1H11c-0.553,0-1-0.448-1-1 S10.447,22.793,11,22.793z M36,38.793H11c-0.553,0-1-0.448-1-1s0.447-1,1-1h25c0.553,0,1,0.448,1,1S36.553,38.793,36,38.793z M36,31.793H11c-0.553,0-1-0.448-1-1s0.447-1,1-1h25c0.553,0,1,0.448,1,1S36.553,31.793,36,31.793z" />{" "}
                                    </g>{" "}
                                </g>
                            </svg>
                        </a>
                        <h1 className="text-xl font-bold text-gray-800 sm:text-2xl">
                            Welcome to Preline Chats
                        </h1>
                        <p className="mt-3 text-gray-600">
                            End to end encrypted 🔐
                        </p>
                    </div>
                    {/* End Title */}
                    <ul className="mt-16 space-y-5">
                        {/* Chat Bubble */}
                        {
                            chat.map((msg, index) => {
                                return <li key={index} className="max-w-2xl ms-auto flex justify-end gap-x-2 sm:gap-x-4">
                                            <div className="grow text-end space-y-3">
                                                {/* Card */}
                                                <div className="inline-block bg-blue-600 rounded-lg p-4 shadow-sm">
                                                    <p className="text-sm text-white">{msg.text}</p>
                                                </div>
                                                {/* End Card */}
                                            </div>
                                            <span className="shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-white border-2 border-blue-200 overflow-hidden">
                                                <img src="https://static.vecteezy.com/system/resources/previews/027/312/306/non_2x/portrait-of-a-dj-with-headphone-isolated-essential-workers-avatar-icons-characters-for-social-media-and-networking-user-profile-website-and-app-3d-render-illustration-png.png" className="text-sm font-medium text-white leading-none" />
                                            </span>
                                        </li>
                            })
                        }
                        {/* End Chat Bubble */}
                    </ul>
                </div>
                <div className="max-w-4xl mx-auto sticky bottom-0 z-10 bg-white border-t border-gray-200 pt-2 pb-4 sm:pt-4 sm:pb-6 px-4 sm:px-6 lg:px-0">
                    {/* Textarea */}
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Input */}
                        <div className="relative">
                            <input
                                ref={inputRef}
                                type='text'
                                onKeyDown={addChat}
                                className="p-4 pb-12 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                placeholder="Type here..."
                                defaultValue={""}
                            />
                            {/* Toolbar */}
                            <div className="absolute bottom-px inset-x-px p-2 rounded-b-lg bg-white">
                                <div className="flex justify-between items-center">
                                    {/* Button Group */}
                                    <div className="flex items-center">
                                        {/* Mic Button */}
                                        <button
                                            type="button"
                                            className="inline-flex shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:bg-gray-100 focus:z-10 focus:outline-none focus:bg-gray-100"
                                        >
                                            <svg
                                                className="shrink-0 size-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <rect width={18} height={18} x={3} y={3} rx={2} />
                                                <line x1={9} x2={15} y1={15} y2={9} />
                                            </svg>
                                        </button>
                                        {/* End Mic Button */}
                                        {/* Attach Button */}
                                        <button
                                            type="button"
                                            className="inline-flex shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:bg-gray-100 focus:z-10 focus:outline-none focus:bg-gray-100"
                                        >
                                            <svg
                                                className="shrink-0 size-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                                            </svg>
                                        </button>
                                        {/* End Attach Button */}
                                    </div>
                                    {/* End Button Group */}
                                    {/* Button Group */}
                                    <div className="flex items-center gap-x-1">
                                        {/* Mic Button */}
                                        <button
                                            type="button"
                                            className="inline-flex shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:bg-gray-100 focus:z-10 focus:outline-none focus:bg-gray-100"
                                        >
                                            <svg
                                                className="shrink-0 size-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                                                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                                                <line x1={12} x2={12} y1={19} y2={22} />
                                            </svg>
                                        </button>
                                        {/* End Mic Button */}
                                        {/* Send Button */}
                                        <button
                                            onClick={addChatBtn}
                                            type="button"
                                            className="inline-flex shrink-0 justify-center items-center size-8 rounded-lg text-white bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-none focus:bg-blue-500"
                                        >
                                            <svg
                                                className="shrink-0 size-3.5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                                            </svg>
                                        </button>
                                        {/* End Send Button */}
                                    </div>
                                    {/* End Button Group */}
                                </div>
                            </div>
                            {/* End Toolbar */}
                        </div>
                        {/* End Input */}
                    </div>
                    {/* End Textarea */}
                </div>
            </div>
            {/* End Content */}

        </div>
    )
}

export default Chat