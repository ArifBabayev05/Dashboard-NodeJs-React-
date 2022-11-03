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
        if (
            formData.password.length > 8 &&
            formData.fullname.length >= 3 &&
            formData.phoneNumber.length >= 7 &&
            formData.email.length >= 5
        )
        
            setDisabled(false)
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
                        <div>
                            <p style={{'font-size':'14px'}} className='text-left  text-red-600 mb-4'>Full Name must be higher than 3 characters</p>
                            <p style={{'font-size':'14px'}} className='text-left text-red-600 mb-4'>Password must be higher than 8 characters</p>
                            <p style={{'font-size':'14px'}} className='text-left text-red-600 mb-4'>Email must be higher than 5 characters</p>
                            <p style={{'font-size':'14px'}} className='text-left text-red-600 mb-4'>Phone number must be higher than 7 characters</p>
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