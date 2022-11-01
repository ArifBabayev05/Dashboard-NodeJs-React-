
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import { useDispatch } from 'react-redux'

//Company Details
function CustomersDetail({user}) {
    const { id } = useParams()
    const url = `http://localhost:2006/company/${id}`
    const [product, setProduct] = useState({
        loading: false,
        data: null,
        error: false
    })



    let content = null

    useEffect(() => {
        setProduct({
            loading: true,
            data: null,
            error: false

        })

        axios.get(url)
            .then(response => {
                setProduct({
                    loading: false,
                    data: response.data,
                    error: false
                })

                    .catch(() => {
                        setProduct({
                            loading: false,
                            data: null,
                            error: true
                        })
                    })
            })
    }, [url])
    

    const [Tdata, setTData] = useState([])
    const [NoteData, setNoteData] = useState([])
    const [dataLength, setDataLength] = useState()

    useEffect(() => {
        axios.get('http://localhost:2006/deals')

            .then(res => {

                setDataLength(res.data.length)
            }).catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get('http://localhost:2006/deals')

            .then(res => {

                setTData(res.data)
            }).catch(err => console.log(err))
    }, [])
    useEffect(() => {
        axios.get('http://localhost:2006/notes')

            .then(res => {
                setNoteData(res.data)
            }).catch(err => console.log(err))
    }, [])
    const noteUrl = 'http://localhost:2006/notes';
    const [data, setData] = useState({
        text: "",
        author: "",

    })
    function submit(e) {
        e.preventDefault();

        axios.post(noteUrl, {
            text: data.text,
            author: product.data.name
        }).then(res => {
        }).catch((err) => {
            console.log(err);
        })
    }
    function handle(e) {
        const newData = { ...data }
        newData[e.target.id] = e.target.value;
        setData(newData);
    }



    const array = Tdata.map((Tdata, index) => {
        return (
            <div role="button" class="relative flex gap-3 bg-white p-2 transition-colors duration-300 hover:bg-slate-100">
                <div class="relative h-25 w-12 shrink-0">
                    <img class="h-12 w-12 rounded-xl object-cover object-center" src="https://image.shutterstock.com/image-vector/male-avatar-profile-picture-green-260nw-255319249.jpg" alt="" />
                    <p class="bg-green-400 text-black-800 w-100 text-xs font-semibold mr-2 px-1.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900 mt-3">WON</p>


                </div>

                <div class="overflow-hidden">
                    {/* {array} */}

                    <h2 class="font-semibold text-xl">{Tdata.title}</h2>
                    <h3 class="text-sm">{Tdata.createAt.slice(0, 10)}</h3>
                    <h3 class="text-sm"><span class="font-semibold">Organization</span> : {Tdata.organisation}</h3>
                    <h3 class="text-sm"><span class="font-semibold">Value</span> : ${Tdata.valuet}</h3>
                    <hr className='w-100' style={{ "position": 'absolute' }} />
                    <h3 class="text-sm"><span class="font-semibold text-slate-800">Contact:</span></h3>
                    <h3 class="text-sm"><i class=" mr-2 fa-solid fa-phone"></i>{Tdata.tel}</h3>
                    <h3 class="text-sm"><i class=" mr-2 fa-solid fa-envelope"></i>{Tdata.mail}</h3>
                </div>

                <div class="flex h-8 w-8 shrink-0 items-center justify-center self-center rounded-lg bg-orange-300 ring-orange-300 ring-offset-2 transition-colors duration-300 hover:bg-orange-400 focus:outline-none focus:ring-2" role="button" aria-label="Call  My wife " tabindex="1">
                    <i class="fa-sharp fa-solid fa-pen text-slate-800"></i>
                </div>
                <div class="flex h-8 w-8 shrink-0 items-center justify-center self-center rounded-lg bg-orange-300 ring-orange-300 ring-offset-2 transition-colors duration-300 hover:bg-orange-400 focus:outline-none focus:ring-2" role="button" aria-label="Call  My wife " tabindex="1">
                    <i class="fa-solid fa-ellipsis text-slate-800"></i>
                </div>

            </div>

        )
    })
    const notes = NoteData.map((NoteData, index) => {
        return (
            <div className='flex'>

                <img class="w-26 h-16  mt-3 mr-2 rounded-full" src="https://play-lh.googleusercontent.com/JOPJ9dbtmH9FZKNweSkJN89I6Yy7dYJ_8kQB9eHYN_PPpH-p0gas76UDhXPes3OSVqQ" alt="image description" />
                <a href="#" class="w-100 block p-6 max-w-2xl bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" style={{ 'width': '100%' }}>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Author: {NoteData.author}</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400"><i class="fa-solid fa-caret-right"></i> {NoteData.text}</p>
                    <p class="font-normal text-gray-400 dark:text-gray-400">{NoteData.createAt.slice(0,10)}</p>

                </a>
            </div>

        )
    }).reverse();



    if (product.loading) {
        content = <Loader />
    }

    if (product.error) {
        content = <p>Error! Try Again!</p>
    }
    if (product.data) {
        content =
            <div class="flex min-h-screen bg-gray-200">
                <div class="w-85 divide-y overflow-y-auto bg-slate-300">

                    <div role="button" class="relative flex gap-3 bg-white p-2 transition-colors duration-300">

                        <div class="fle overflow-hidden">
                            <h2 class="font-semibold text-3xl">{product.data.name}</h2>

                            <div class="flex mt-3">
                                <a href='#' class="message text-sm font-semibold text-blue-500">{product.data.webSite}</a>
                            </div>

                            <div class="flex mt-4">
                                <i class="fa-solid text-slate-600 fa-map-location-dot mr-1"></i><p class="message text-sm font-semibold text-blue-500">{product.data.location}</p>
                            </div>

                            <div class="flex mt-4">
                                <p class="message text-normal font-semibold text-slate-600">OPPORTUNITIES </p>
                            </div>
                        </div>

                    </div>

                    {/* Sidebar */}
                    {array}
                </div>

                {/* Posts */}
                <div class="flex flex-1 flex-col justify-start gap-3 bg-slate-50 p-3">
                    <div>
                        <button type="button" class="w-25 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-sm text-sm px-3 py-1.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                            <i class="fa-solid fa-message mr-2"></i>
                            Note
                        </button>
                        <button type="button" class="w-25 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-sm text-sm px-3 py-1.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                            <i class="fa-solid fa-envelope mr-2"></i>
                            Email
                        </button>

                        <button type="button" class="w-25 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-sm text-sm px-3 py-1.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                            <i class="fa-solid fa-comments mr-2"></i>
                            Sms
                        </button>
                        <button type="button" class="w-25 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-sm text-sm px-3 py-1.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                            <i class="fa-solid fa-phone mr-2"></i>
                            Call
                            <i class=" ml-2 fa-solid fa-caret-down"></i>
                        </button>
                    </div>

                    <form enctype="multipart/form-data" method="post" onSubmit={(e) => submit(e)}>
                        <div class="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                            <div class="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
                                <label for="comment" class="sr-only">Your comment</label>
                                <textarea onChange={(e) => handle(e)} value={data.value} required type="text" id="text" rows="4" class="px-0 w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a note..."></textarea>
                            </div>
                            <div class="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">
                                <div></div>
                                <div class="flex pl-0 space-x-1 sm:pl-2">
                                    <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-gray-700 rounded-lg focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-900 hover:bg-gray-800">
                                        Done
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>

                    {notes}

                </div>

            </div>


    }

    return (
        <div className='container'>

           {user ?  <div>{content}</div> : <Loader/>}
        </div>


    )
}

export default CustomersDetail