import React from 'react'
import { Link } from 'react-router-dom'


const CustomersCard = (props) => {
    return (
        <div className=''>
            <div className='search'>
            </div>
            <Link id='cards' to={`/customers/${props.product._id}`} style={{ textDecoration: 'none' }}>
                <div class="max-w-6xl m-2 justify-center bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" style={{'letf':'100px','position':'relative'}}>
                    <div class="flex justify-end px-4 pt-4">
                    </div>
                    <div class="flex flex-col items-center pb-10">
                        <img class="mb-3 mt-4 w-24 h-24 rounded-full shadow-lg" src={props.product.imageUrl} alt="Bonnie image" />
                        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{props.product.name}</h5>
                        <span class="text-sm text-gray-500 dark:text-gray-400">{props.product.location}</span>
                        <div class="flex mt-4 space-x-3 md:mt-6">
                            <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">More Details</a>
                        </div>
                    </div>
                </div>

                

            </Link>

        </div>
    )
}

export default CustomersCard