
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import { useDispatch } from 'react-redux'

//Company Details
function CustomersDetail() {

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

    const [Tdata, setData] = useState([])
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

                setData(res.data)
            }).catch(err => console.log(err))
    }, [])

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
                    <h3 class="text-sm">{Tdata.createAt.slice(0,10)}</h3>
                    <h3 class="text-sm"><span class="font-semibold">Organization</span> : {Tdata.organisation}</h3>
                    <h3 class="text-sm"><span class="font-semibold">Value</span> : ${Tdata.valuet}</h3>
                    <hr className='w-100' style={{"position":'absolute'}}/>
                    <h3 class="text-sm"><span class="font-semibold text-slate-800">Contact</span></h3>
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



    if (product.loading) {
        content = <Loader />
    }

    if (product.error) {
        content = <p>Xəta baş verdi, yenidən yoxlayın.</p>
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

                    {array}
                </div>
                <div class="flex flex-1 flex-col justify-start gap-3 bg-slate-50 p-3">
                    <div class="max-w-fit rounded-tr-lg rounded-bl-lg bg-blue-500 text-white px-2 py-1 shadow-sm">hi have you visited Maka ?</div>
                    <div class="max-w-fit self-end rounded-tl-lg rounded-br-lg bg-white px-2 py-1">Yes I enjoy my time there</div>
                    <div class="max-w-fit rounded-tr-lg rounded-bl-lg bg-blue-500 text-white  px-2 py-1 ">Do you take some pictures ?</div>
                    <div class="max-w-fit self-end rounded-tl-lg rounded-br-lg bg-white px-2 py-1">Yes I do</div>
                    <div class="max-w-fit rounded-tr-lg rounded-bl-lg bg-blue-500 text-white  px-2 py-1">Please Send me some</div>

                    <div class="flex max-w-xs flex-wrap justify-end gap-2 self-end">
                        <div class="h-20 w-28 overflow-hidden rounded border-2  bg-slate-400">
                            <img class="h-20 w-28 object-cover object-center" src="https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="Maka" />
                        </div>
                        <div class="h-20 w-28 overflow-hidden rounded border-2 bg-slate-400">
                            <img class="h-20 w-28 object-cover object-center" src="https://images.unsplash.com/photo-1580109158791-5cfcb80419e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" alt="Maka" />
                        </div>
                        <div class="relative h-20 w-28 overflow-hidden rounded border-2 bg-slate-400">
                            <div class="absolute inset-0 flex items-center justify-center bg-slate-900/40">
                                <span class="font-semibold text-white">+2</span>
                            </div>
                            <img class="h-20 w-28 object-cover object-center" src="https://images.unsplash.com/photo-1591604176169-ed3393581c4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Maka" />
                        </div>
                    </div>
                    <div class="max-w-fit rounded-tr-lg rounded-bl-lg bg-blue-500 text-white  px-2 py-1">جزاك الله خيرا</div>
                </div>
            </div>


    }

    return (
        <div className='container'>

            <div>{content}</div>
        </div>


    )
}

export default CustomersDetail