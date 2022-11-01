import { useTable, useSortBy } from "react-table";
import "../styles/Table.css";
import { Modal } from 'react-responsive-modal';
import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import AddDealButton from "../components/AddDealButton";
import {
    KanbanComponent,
    ColumnsDirective,
    ColumnDirective,
} from "@syncfusion/ej2-react-kanban";

import { kanbanData, kanbanGrid } from "../data/dummy";
import { Header } from "../components";
import Loader from "./Loader";
const DragOrder = ({ user }) => {

    const [open, setOpen] = useState(false);
    const [Tdata, setData] = useState([])
    const [query, setQuery] = useState("")
    const navigate = useNavigate();
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
    const Delete = (_id, e) => {
        const url = `http://localhost:2006/deals/${_id}`

        axios.delete(url)
            .then(res => {
                toast.success("Deleted")

            }).catch(err => toast.error(err))
    }
    const array = Tdata.filter((value) => {
        if (query === "") {
            return value;
        }
        else if (value.name.toLowerCase().includes(query.toLowerCase())) {
            return value;
        }

    }).map((Tdata, index) => {
        return (
            <tr>
                <td>{Tdata.title}</td>
                <td>{Tdata.valuet}</td>
                <td>{Tdata.organisation}</td>
                <td>{Tdata.person}</td>
                <td>{Tdata.tel}</td>
                <td>{Tdata.mail}</td>
                <td>{Tdata.closeDate.slice(0, 10)}</td>

                <td><button onClick={(e) => Delete(Tdata._id, e)} className='btn btn-danger delete text-red-500'>Delete</button></td>

            </tr>
        )
    })
    let sum = 0
    const result = Tdata.map((Tdata, index) => {
        sum += Tdata.valuet;

        return (
            <h1>{sum}</h1>
        )
    })
    function SortByVlaue() {
        let sum = 0
        Tdata.map((Tdata, index) => {
            sum += Tdata.valuet;
            console.log(sum)
        })
    }


    return (
        <div>
            {user ? <div className="container">
                <div className='flex'>
                    <div className='p-2 w-100 bg-white justify-between rounded-3xl dark:bg-secondary-dark-bg' style={{ 'display': 'content', 'width': '100%' }}>
                        <div className='card-header px-5 flex justify-between' style={{ 'width': '100%' }}>
                            <AddDealButton />
                            <h1 className='text-3xl text-center text-purple-400 underline	justify-items-center block fs-1'>Deal Table</h1>

                            <div className='flex'>
                                <h1 className='text mx-2 text-center text-gray-600  flex	items-center fs-1'>{sum}$</h1>
                                <h1 className='text mx-2 text-center text-gray-600  flex	items-center fs-1'>{dataLength} Deal</h1>

                            </div>
                        </div>

                        <div class="inline-flex rounded-md shadow-sm" role="group">
                            <a href='/order' type="button" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                                <svg aria-hidden="true" class="mr-2 w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                                Table
                            </a>
                            <a href='/orderr' type="button" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                                <svg aria-hidden="true" class="mr-2 w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
                                Pipeline
                            </a>
                        </div>


                    </div>
                </div>


                <div className="mt-5 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">

                    <KanbanComponent
                        id="kanban"
                        dataSource={kanbanData}
                        cardSettings={{ contentField: "Summary", headerField: "Id" }}
                        keyField="Status"
                    >
                        <ColumnsDirective>
                            {kanbanGrid.map((item, index) => (
                                <ColumnDirective key={index} {...item} />
                            ))}
                        </ColumnsDirective>
                    </KanbanComponent>
                </div>

            </div>
                :
                <Loader />
            }
        </div>
    );
}

export default DragOrder