import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';
import Loader from './Loader';

const DropDown = ({ currentMode }) => (
    <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
        <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
    </div>
);

const WebAnalytic = ({ user }) => {
    const { currentColor, currentMode } = useStateContext();

    return (
        <div>
            {user?.isAdmin ?
                <div className=" container">
                    <h1 className='font-bold text-3xl mt-3 text-center '>GolfHeap Analytic</h1>

                    <div className='mt-10'>
                        <div class="grid grid-cols-4 gap-4">
                            <div class="w-full px-2">
                                <div class="rounded-lg shadow-sm mb-4">
                                    <div class="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                                        <div class="px-5 pt-8 pb-10 text-left relative z-10">
                                            <h4 class="text-sm uppercase text-gray-500 font-bold leading-tight">Sessions</h4>
                                            <div className='flex'>
                                                <h3 class="text-3xl text-gray-700 font-bold leading-tight my-3">111</h3>
                                                <span class="text-xs flex text-green-500 mb-2 leading-tight" style={{ 'align-items': 'end' }}>▲ 57.1%</span>
                                            </div>
                                            <p class="text-xs flex text-gray-500 mb-2 leading-tight">vs previous timeframe</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="w-full px-2">
                                <div class="rounded-lg shadow-sm mb-4">
                                    <div class="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                                        <div class="px-5 pt-8 pb-10 text-left relative z-10">
                                            <h4 class="text-sm uppercase text-gray-500 font-bold leading-tight">Page Views</h4>
                                            <div className='flex'>
                                                <h3 class="text-3xl text-gray-700 font-bold leading-tight my-3">597</h3>
                                                <span class="text-xs flex text-green-500 mb-2 leading-tight" style={{ 'align-items': 'end' }}>▲ 57.1%</span>
                                            </div>
                                            <p class="text-xs flex text-gray-500 mb-2 leading-tight">vs previous timeframe</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="w-full px-2">
                                <div class="rounded-lg shadow-sm mb-4">
                                    <div class="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                                        <div class="px-5 pt-8 pb-10 text-left relative z-10">
                                            <h4 class="text-sm uppercase text-gray-500 font-bold leading-tight">Users</h4>
                                            <div className='flex'>
                                                <h3 class="text-3xl text-gray-700 font-bold leading-tight my-3">97</h3>
                                                <span class="text-xs flex text-green-500 mb-2 leading-tight" style={{ 'align-items': 'end' }}>▲ 57.1%</span>
                                            </div>
                                            <p class="text-xs flex text-gray-500 mb-2 leading-tight">vs previous timeframe</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="w-full px-2">
                                <div class="rounded-lg shadow-sm mb-4">
                                    <div class="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                                        <div class="px-5 pt-8 pb-10 text-left relative z-10">
                                            <h4 class="text-sm uppercase text-gray-500 font-bold leading-tight">Balance Rate</h4>
                                            <div className='flex'>
                                                <h3 class="text-3xl text-gray-700 font-bold leading-tight my-3">18%</h3>
                                                <span class="text-xs flex text-green-500 mb-2 leading-tight" style={{ 'align-items': 'end' }}>▲ 57.1%</span>
                                            </div>
                                            <p class="text-xs flex text-gray-500 mb-2 leading-tight">vs previous timeframe</p>

                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>



                        <div className="flex gap-10 flex-wrap justify-center">
                            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
                                <div className="flex justify-between">
                                    <p className="font-semibold text-xl">Audience Metrics</p>
                                    <div className="flex items-center gap-4">
                                        <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                                            <span>
                                                <GoPrimitiveDot />
                                            </span>
                                            <span>Expense</span>
                                        </p>
                                        <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                                            <span>
                                                <GoPrimitiveDot />
                                            </span>
                                            <span>Budget</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-10 flex gap-10 flex-wrap justify-center">
                                    <div className=" border-r-1 border-color m-4 pr-10">
                                        <div>
                                            <p>
                                                <span className="text-3xl font-semibold">$93,438</span>
                                                <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                                                    23%
                                                </span>
                                            </p>
                                            <p className="text-gray-500 mt-1">Budget</p>
                                        </div>
                                        <div className="mt-8">
                                            <p className="text-3xl font-semibold">$48,487</p>

                                            <p className="text-gray-500 mt-1">Expense</p>
                                        </div>

                                        <div className="mt-5">
                                            <SparkLine currentColor={currentColor} id="line-sparkLine" type="Line" height="80px" width="250px" data={SparklineAreaData} color={currentColor} />
                                        </div>
                                    </div>
                                    <div>
                                        <Stacked currentMode={currentMode} width="320px" height="360px" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div
                                    className="bg-white rounded-2xl md:w-400 p-4 m-3"
                                >
                                    <div className="justify-between items-center ">
                                        <p className="font-semibold text-black text-2xl">Session by device</p>

                                        <div className='flex'>
                                            <h3 class="text-3xl text-gray-700 font-bold leading-tight my-3">18%</h3>
                                            <span class="text-xs flex text-green-500 mb-2 leading-tight" style={{ 'align-items': 'end' }}>▲ 57.1%</span>
                                        </div>
                                        <p class="text-xs flex text-gray-500 mb-2 leading-tight">vs previous timeframe</p>

                                    </div>

                                    <div className="mt-4">
                                        <SparkLine currentColor={currentColor} id="column-sparkLine" height="100px" type="Column" data={SparklineAreaData} width="320" color="#111714" />
                                    </div>
                                </div>

                                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
                                    <div>
                                        <p className="text-2xl font-semibold ">97</p>
                                        <p className="text-gray-400">Total Users</p>
                                    </div>

                                    <div className="w-40">
                                        <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="160px" />
                                    </div>
                                </div>



                            </div>

                        </div>

                        <div className="flex gap-10 flex-wrap justify-center">
                            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
                                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-full p-8 m-3 flex justify-center items-center gap-1">

                                    <div class=" overflow-x-auto relative shadow-md sm:rounded-lg">
                                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                <tr>
                                                    <th scope="col" class="py-3 px-6">
                                                        Name
                                                    </th>
                                                    <th scope="col" class="py-3 px-6">
                                                        User
                                                    </th>
                                                    <th scope="col" class="py-3 px-6">
                                                        Category
                                                    </th>
                                                    <th scope="col" class="py-3 px-6">
                                                        Time
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        Apple MacBook Pro 17"
                                                    </th>
                                                    <td class="py-4 px-6">
                                                        Sliver
                                                    </td>
                                                    <td class="py-4 px-6">
                                                        Laptop
                                                    </td>
                                                    <td class="py-4 px-6">
                                                        $2999
                                                    </td>
                                                </tr>
                                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        Microsoft Surface Pro
                                                    </th>
                                                    <td class="py-4 px-6">
                                                        White
                                                    </td>
                                                    <td class="py-4 px-6">
                                                        Laptop PC
                                                    </td>
                                                    <td class="py-4 px-6">
                                                        $1999
                                                    </td>
                                                </tr>
                                                <tr class="bg-white dark:bg-gray-800">
                                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        Magic Mouse 2
                                                    </th>
                                                    <td class="py-4 px-6">
                                                        Black
                                                    </td>
                                                    <td class="py-4 px-6">
                                                        Accessories
                                                    </td>
                                                    <td class="py-4 px-6">
                                                        $99
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                            <div>
                                <div
                                    className="bg-white rounded-2xl md:w-400 p-4 m-3"
                                >
                                    <div class=" relative">
                                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                <tr>
                                                    <th scope="col" class="py-3 px-6">
                                                        Product name
                                                    </th>
                                                    <th scope="col" class="py-3 px-6">
                                                        Color
                                                    </th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        Apple MacBook Pro 17"
                                                    </th>
                                                    <td class="py-4 px-6">
                                                        Sliver
                                                    </td>

                                                </tr>
                                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        Microsoft Surface Pro
                                                    </th>
                                                    <td class="py-4 px-6">
                                                        White
                                                    </td>

                                                </tr>
                                                <tr class="bg-white dark:bg-gray-800">
                                                    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        Magic Mouse 2
                                                    </th>
                                                    <td class="py-4 px-6">
                                                        Black
                                                    </td>

                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>





                            </div>

                        </div>
                    </div>

                </div>

                : <Loader />
            }
        </div>
    );
};

export default WebAnalytic;