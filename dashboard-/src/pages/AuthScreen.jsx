import React, { useState } from 'react'
import { login } from '../axios/'
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AuthScreen = ({ setUser }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    return (
        <div class="flex text-center items-center h-screen w-full">
            {/* <Toaster
                position="top-right"
                reverseOrder={true}
            /> */}
            
            <div class="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
                <span class="block w-full text-xl uppercase font-bold mb-4">Login to your account</span>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    login(formData)
                        .then((res) => {

                            console.log(res.data)

                            localStorage.setItem("user", JSON.stringify(res.data.user));
                            setUser(res.data.user);
                            navigate("/home");
                            toast.success("Success")

                        })
                        .catch((err) => {
                            toast.error(err.response.data.message)
                            console.log(err.response.data.message);
                        });
                }} class="mb-4">
                    <div class="mb-4 md:w-full">
                        <label for="email" class="text-left block text-xs mb-1">Username or Email</label>
                        <input onChange={(e) => setFormData({ ...formData, email: e.target.value })} class="w-full border rounded p-2 outline-none focus:shadow-outline" type="email" name="email" id="email" placeholder="Username or Email" />
                    </div>
                    <div class="mb-6 md:w-full">
                        <label for="password" class="text-left block text-xs mb-1">Password</label>
                        <input onChange={(e) => setFormData({ ...formData, password: e.target.value })} class="w-full border rounded p-2 outline-none focus:shadow-outline" type="password" name="password" id="password" placeholder="Password" />
                    </div>
                    {formData.email === '' || formData.password === '' ? <p className='text-left text-red-600 mb-4'>Please enter all fields</p> : ""}
                    <button disabled={formData.email === '' || formData.password === ''} type='submit' style={{ 'width': "100%" }} class="text-center bg-purple-500 text-white uppercase text-sm font-semibold px-4 py-2 rounded">Login</button>
                </form>
                <a href='signup' className='text-gray-400'>Dont have an account? <span className='text-purple-700'>Sign up</span></a>

            </div>
        </div>
    )
}

export default AuthScreen