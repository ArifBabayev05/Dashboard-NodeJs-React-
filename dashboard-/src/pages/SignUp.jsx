import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { register } from '../axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const [disabled, setDisabled] = useState(true)
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullname: "",
        password: "",
        phoneNumber: "",
        email: "",
    });

    useEffect(() => {
        const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/
        if (
            formData.fullname.length >= 3 &&
            formData.phoneNumber.length >= 7 &&
            formData.email.length >= 5 &&
            re.test(formData.password)
        ) {
            setDisabled(false)
        }
        else {
            setDisabled(true)

        }
    }, [formData])
    return (

        <div class="flex mt-10 items-center h-screen w-full">
            <div class="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
                <span class="block w-full text-xl uppercase font-bold mb-4">Create an account</span>
                <form onSubmit={(e) => {
                    e.preventDefault();

                    register(formData)
                        .then((res) => {
                            navigate("/signin");
                        })
                        .catch((err) => console.log(err));
                }} class="mb-4" action="/" method="post">
                    <div class="mb-4 md:w-full">
                        <label for="email" class="text-left block text-xs mb-1">Username</label>
                        <input onChange={(e) => setFormData({ ...formData, fullname: e.target.value })} class="w-full border rounded p-2 outline-none focus:shadow-outline" type="name" name="text" id="text" placeholder="Username " />
                    </div>
                    <div class="mb-4 md:w-full">
                        <label for="email" class="text-left block text-xs mb-1"> Email</label>
                        <input onChange={(e) => setFormData({ ...formData, email: e.target.value })} class="w-full border rounded p-2 outline-none focus:shadow-outline" type="email" name="email" id="email" placeholder="Email" />
                    </div>
                    <div class="mb-4 md:w-full">
                        <label for="email" class="text-left block text-xs mb-1"> Phone Number</label>
                        <input onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} class="w-full border rounded p-2 outline-none focus:shadow-outline" type="text" name="text" id="text" placeholder="Phone Number" />
                    </div>
                    <div class="mb-6 md:w-full">
                        <label for="password" class="text-left block text-xs mb-1">Password</label>
                        <input onChange={(e) => setFormData({ ...formData, password: e.target.value })} class="w-full border rounded p-2 outline-none focus:shadow-outline" type="password" name="password" id="password" placeholder="Password" />
                    </div>

                    {disabled ?

                        <div className='flex'>
                            <i class="fa-solid text-center text-red-500 w-100 fa-circle-info float-center justify-center text-3xl" data-modal-toggle="popup-modal"></i>


                            <div id="popup-modal" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
                                <div class="relative p-4 w-full max-w-md h-full md:h-auto">
                                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                        <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            <span class="sr-only">Close modal</span>
                                        </button>
                                        <div class="p-6 text-center">
                                            <svg aria-hidden="true" class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            <div>
                                                <h3 class="mb-5 text-normal font-normal text-gray-500 dark:text-gray-400">Full Name length must be higher than 3</h3>
                                                <h3 class="mb-5 text-normal font-normal text-gray-500 dark:text-gray-400">Phone Number length must be higher than 7</h3>
                                                <h3 class="mb-5 text-normal font-normal text-gray-500 dark:text-gray-400">Email length must be higher than 5</h3>
                                                <h3 class="mb-5 text-normal font-normal text-gray-500 dark:text-gray-400">Password Length must be higher than 8</h3>
                                                <h3 class="mb-5 text-normal font-normal text-gray-500 dark:text-gray-400">Password must include at least one Uppercase,lowercase,number and special characters</h3>



                                            </div>
                                            <button data-modal-toggle="popup-modal" type="button" class="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                                Yes, I'm understand
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        : ""}

                    <button disabled={disabled} type='submit' style={{ 'width': "100%" }} class="bg-purple-500 hover:bg-purple-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">Register</button>
                    <a href='signin' className='text-gray-400'>Already have an account? <span className='text-purple-700'>Sign in</span></a>

                </form>
            </div>
        </div>
    )
}

export default SignUp