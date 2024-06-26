import React, { useState } from 'react'
import { Link, json } from 'react-router-dom'
// import 
export default function Navbar({ onSearch }) {

    const [input, setinput] = useState('');
    const [result, setresult] = useState([]);
    const fetchdata = (value) => {
        fetch("http://localhost:3001/users")
            .then((response) => response.json())
            .then((json) => {
                // console.log(json);
                // const results = json.filter(user => user.name.toLowerCase().includes(value))  //not work well
                const results = json.filter((user) => {
                    return (
                        value &&
                        user &&
                        user.name &&
                        user.name.toLowerCase().includes(value)
                    )
                })
                setresult(results);
            })
    }
    // console.log(result);
    const handleonchange = (value) => {
        setinput(value);
        fetchdata(value)
        onSearch(value)
    }

    const handleSuggestionClick = (name) => {
        setinput(name);
        setresult([]);
    }

    return (
        <>
            <nav class="bg-black border-gray-200 dark:bg-black dark:border-gray-400">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Holders</span>
                    </a>
                    <button data-collapse-toggle="navbar-multi-level" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div class="flex mt-3 " id="navbar-multi-level">
                        <ul class="flex flex-col font-medium p-4 md:p-0  border bg-black md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   dark:border-gray-700">
                            <li>
                                <Link to="/" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 md:hover:text-blue-700 md:dark:bg-transparent" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link to="/create" >
                                    <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Create </button>
                                    <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/edit/:id" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Edit</Link>
                            </li>
                            <li>
                                <Link to="/signin" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sign in</Link>
                            </li>
                            <li>
                                <Link to="/login" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Log in</Link>
                            </li>
                        </ul>
                        <div>
                            <div className=' p-3 pt-0 -mt-2 ' >
                                <input type="search" value={input} onChange={(e) => handleonchange(e.target.value)} className='bg-gray-100 h-10 rounded w-auto' />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className='search-result bg-white w-52 z-[5000]  right-[8rem] absolute '>
                {result.map((result, id) => (
                    <div key={id} onClick={() => handleSuggestionClick(result.name)} style={{ cursor: "pointer" }} className='h-10 bg-gray-200 border-2 border-white  flex items-center justify-center'>
                        {result.name}
                    </div>
                ))}
            </div>
        </>
    )
}


