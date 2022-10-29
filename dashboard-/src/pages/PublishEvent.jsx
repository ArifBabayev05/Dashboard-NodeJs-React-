import axios from "axios";
import React, { useState, useEffect } from "react";


const PublishEvent = () => {

    const [data, setData] = useState([])
    const [datas, setDatas] = useState([])
    useEffect(() => {
        axios.get('http://localhost:2006/schedule')
            .then(res => {
                setDatas(res.data)
            }).catch(err => console.log(err))
    }, []);
    const Option = datas.map((datas, index) => {
        return (
            <li>
                <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{datas.Subject}</a>
            </li>
        )
    })
    function handles(e) {
        const newData = { ...datas }
        console.log(e.taget.value)
        newData[e.target.selected] = e.target.value;
        setDatas(newData);
    }

    function handle(e) {

        const newData = { ...data }
        newData[e.target.id] = e.target.value;
        setData(newData);
    }
    return (
        <div>
            <button id="dropdownDefault" data-dropdown-toggle="dropdown" class="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                Publish Event
                <svg class="ml-2 h-4 w-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom" style={{ "position": "absolute", "inset": "0px auto auto 0px", "margin": "0px", "transform": "translate3d(0px, 592px, 0px)" }}>
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                    <li>
                        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                    </li>
                </ul>
            </div>


        </div>

    )
}

export default PublishEvent